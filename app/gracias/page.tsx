import { getPreapproval, getPayerName, isPaid } from "@/lib/mp";
import { issueCard, type IssuedCard } from "@/lib/lasso";

export const dynamic = "force-dynamic";

type SP = { [k: string]: string | string[] | undefined };

export default async function Gracias({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const preapprovalId = (Array.isArray(sp.preapproval_id) ? sp.preapproval_id[0] : sp.preapproval_id) || "";

  if (!preapprovalId) {
    return <Shell title="Falta la referencia del pago">No recibimos el identificador de la suscripción. Vuelve a intentar desde el enlace de pago.</Shell>;
  }

  // Modo demo: solo activo con DEMO_MODE=1 (nunca se configura en Vercel).
  if (process.env.DEMO_MODE === "1" && preapprovalId === "demo") {
    try {
      const card = await issueCard({ email: "demo@knox.mx", firstName: "Demo", lastName: "Knox" });
      return <Issued card={card} />;
    } catch {
      return <RetryShell />;
    }
  }

  let pre;
  try {
    pre = await getPreapproval(preapprovalId);
  } catch {
    return <RetryShell />;
  }
  if (!isPaid(pre)) {
    return (
      <Shell title="Tu pago aún no está confirmado">
        Estado actual: <b>{pre.status}</b>. En cuanto se confirme podrás descargar tu tarjeta. Si acabas de pagar, recarga en unos segundos.
      </Shell>
    );
  }
  const email = pre.payer_email || "";
  if (!email) return <RetryShell />;

  try {
    const name = await getPayerName(preapprovalId);
    const card = await issueCard({ email, firstName: name.first, lastName: name.last });
    return <Issued card={card} />;
  } catch {
    return <RetryShell />;
  }
}

function Issued({ card }: { card: IssuedCard }) {
  return (
    <Shell title="¡Pago confirmado!">
      <p style={{ marginTop: 0, marginBottom: 16 }}>Tu membresía Knox está lista. Escanea el QR o toca el botón para instalar tu tarjeta:</p>
      {card.installQR ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={card.installQR} alt="QR de tu tarjeta" width={220} height={220} style={{ margin: "0 auto 20px", display: "block", background: "#fff", borderRadius: 8, padding: 8 }} />
      ) : null}
      {card.installURL ? <a className="btn" href={card.installURL}>Instalar en Apple / Google Wallet</a> : null}
    </Shell>
  );
}

function RetryShell() {
  return (
    <Shell title="No pudimos verificar tu pago">
      Intenta de nuevo en unos segundos. Si el problema persiste, guarda tu comprobante y contáctanos.
    </Shell>
  );
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
