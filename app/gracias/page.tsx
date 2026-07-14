import { getPreapproval, isPaid } from "@/lib/mp";
import IssueForm from "./IssueForm";

export const dynamic = "force-dynamic";

type SP = { [k: string]: string | string[] | undefined };

export default async function Gracias({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const preapprovalId = (Array.isArray(sp.preapproval_id) ? sp.preapproval_id[0] : sp.preapproval_id) || "";

  if (!preapprovalId) {
    return <Shell title="Falta la referencia del pago">No recibimos el identificador de la suscripción. Vuelve a intentar desde el enlace de pago.</Shell>;
  }

  let content: React.ReactNode;
  try {
    const pre = await getPreapproval(preapprovalId);
    if (!isPaid(pre)) {
      content = <Shell title="Tu pago aún no está confirmado">Estado actual: <b>{pre.status}</b>. En cuanto se confirme podrás generar tu tarjeta. Si acabas de pagar, recarga en unos segundos.</Shell>;
    } else {
      content = (
        <Shell title="¡Pago confirmado!">
          <IssueForm preapprovalId={preapprovalId} email={pre.payer_email || ""} />
        </Shell>
      );
    }
  } catch {
    content = <Shell title="No pudimos verificar tu pago">Intenta de nuevo en unos segundos. Si el problema persiste, guarda tu comprobante y contáctanos.</Shell>;
  }
  return content;
}

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main style={{ minHeight: "100dvh", display: "grid", placeItems: "center", background: "#062336", color: "#fff", fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <div style={{ background: "#0b2f47", border: "1px solid #16456a", borderRadius: 16, padding: 32, maxWidth: 420, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 22, marginBottom: 16 }}>{title}</h1>
        <div style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.92 }}>{children}</div>
      </div>
      <style>{`.btn{background:#3B82F6;color:#fff;padding:12px 16px;border-radius:10px;text-decoration:none;font-weight:600;display:block;text-align:center;border:none;cursor:pointer;font-size:15px}`}</style>
    </main>
  );
}
