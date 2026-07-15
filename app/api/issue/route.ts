import { NextRequest, NextResponse } from "next/server";
import { getPreapproval, isPaid } from "@/lib/mp";
import { issueCard } from "@/lib/lasso";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let body: { preapproval_id?: string; fName?: string; sName?: string; phone?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const preapprovalId = (body.preapproval_id || "").trim();
  if (!preapprovalId) return NextResponse.json({ error: "Falta preapproval_id" }, { status: 400 });
  if (!body.fName?.trim() || !body.sName?.trim()) {
    return NextResponse.json({ error: "Nombre y apellido son obligatorios" }, { status: 400 });
  }

  // Modo demo: solo activo con DEMO_MODE=1 (nunca se configura en Vercel).
  if (process.env.DEMO_MODE === "1" && preapprovalId === "demo") {
    try {
      const card = await issueCard({
        email: "demo@knox.mx",
        firstName: body.fName,
        lastName: body.sName,
        phone: body.phone,
      });
      return NextResponse.json({ ok: true, installURL: card.installURL, installQR: card.installQR });
    } catch (e) {
      return NextResponse.json({ error: `Error emitiendo la tarjeta: ${String(e)}` }, { status: 500 });
    }
  }

  // Candado: re-verificamos el pago contra MP con nuestro token secreto.
  // El email lo tomamos de MP (no del cliente) para mantener integridad.
  let pre;
  try {
    pre = await getPreapproval(preapprovalId);
  } catch {
    return NextResponse.json({ error: "No se pudo verificar el pago" }, { status: 502 });
  }
  if (!isPaid(pre)) {
    return NextResponse.json({ error: `Pago no confirmado (estado: ${pre.status})` }, { status: 402 });
  }

  const email = pre.payer_email || "";
  if (!email) return NextResponse.json({ error: "MP no devolvió el email del pagador" }, { status: 422 });

  try {
    const card = await issueCard({
      email,
      firstName: body.fName,
      lastName: body.sName,
      phone: body.phone,
    });
    return NextResponse.json({ ok: true, installURL: card.installURL, installQR: card.installQR });
  } catch (e) {
    return NextResponse.json({ error: `Error emitiendo la tarjeta: ${String(e)}` }, { status: 500 });
  }
}
