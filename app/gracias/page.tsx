export const dynamic = "force-dynamic";

// La landing NO tiene credenciales: delega en n8n, que verifica el pago en
// Mercado Pago y emite la tarjeta Lasso. El webhook no es secreto.
const WEBHOOK =
  process.env.KNOX_WEBHOOK_URL ||
  "https://lassomkt.app.n8n.cloud/webhook/knox-mercadopago";

type SP = { [k: string]: string | string[] | undefined };
type IssueResult = { ok: boolean; installURL?: string; installQR?: string };

async function issueViaN8n(preapprovalId: string): Promise<IssueResult> {
  const res = await fetch(WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ preapproval_id: preapprovalId }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`n8n webhook HTTP ${res.status}`);
  const raw = await res.json();
  const d = Array.isArray(raw) ? raw[0] : raw;
  return { ok: !!d?.installURL, installURL: d?.installURL, installQR: d?.installQR };
}

export default async function Gracias({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const preapprovalId =
    (Array.isArray(sp.preapproval_id) ? sp.preapproval_id[0] : sp.preapproval_id) || "";

  if (!preapprovalId) {
    return (
      <Shell title="Falta la referencia del pago">
        No recibimos el identificador de la suscripción. Vuelve a intentar desde el enlace de pago.
      </Shell>
    );
  }

  let card: IssueResult;
  try {
    card = await issueViaN8n(preapprovalId);
  } catch {
    return <RetryShell />;
  }

  if (!card.ok || !card.installURL) {
    return (
      <Shell title="Tu pago aún no está confirmado">
        En cuanto se confirme tu suscripción podrás descargar tu tarjeta. Si acabas de pagar, recarga en unos segundos.
      </Shell>
    );
  }

  return <Issued installURL={card.installURL} installQR={card.installQR} />;
}

function Issued({ installURL, installQR }: { installURL: string; installQR?: string }) {
  return (
    <Shell title="¡Pago confirmado!">
      <p style={{ marginTop: 0, marginBottom: 16 }}>
        Tu membresía Knox está lista. Escanea el QR o toca el botón para instalar tu tarjeta:
      </p>
      {installQR ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={installQR}
          alt="QR de tu tarjeta"
          width={220}
          height={220}
          style={{ margin: "0 auto 20px", display: "block", background: "#fff", borderRadius: 8, padding: 8 }}
        />
      ) : null}
      <a className="btn" href={installURL}>Instalar en Apple / Google Wallet</a>
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
