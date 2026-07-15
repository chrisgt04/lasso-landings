const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || "";

export type Preapproval = {
  id: string;
  status: string; // "authorized" cuando la suscripción quedó activa
  payer_email?: string;
  external_reference?: string;
  reason?: string;
};

// Verifica la suscripción con MP a partir del preapproval_id que llega en el back_url.
export async function getPreapproval(id: string): Promise<Preapproval> {
  const res = await fetch(`https://api.mercadopago.com/preapproval/${id}`, {
    headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
  });
  if (!res.ok) throw new Error(`MP preapproval ${id} -> HTTP ${res.status}`);
  return res.json();
}

export function isPaid(p: Preapproval): boolean {
  return p.status === "authorized";
}

// Mejor esfuerzo: nombre del pagador desde el último cobro de la suscripción
// (la preapproval no trae nombre confiable). Si falla, se emite con fallback.
export async function getPayerName(preapprovalId: string): Promise<{ first?: string; last?: string }> {
  const auth = { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } };
  try {
    const s = await fetch(
      `https://api.mercadopago.com/authorized_payments/search?preapproval_id=${preapprovalId}&limit=1`,
      auth
    );
    if (!s.ok) return {};
    const search = await s.json();
    const paymentId = search?.results?.[0]?.payment?.id;
    if (!paymentId) return {};
    const p = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, auth);
    if (!p.ok) return {};
    const pay = await p.json();
    const first = pay?.payer?.first_name?.trim();
    const last = pay?.payer?.last_name?.trim();
    if (first || last) return { first, last };
    const holder: string = pay?.card?.cardholder?.name?.trim() || "";
    if (holder && !/^(apro|othe|cont|call|fund|secu|expi|form)$/i.test(holder)) {
      const parts = holder.split(/\s+/).map((w) => w[0] + w.slice(1).toLowerCase());
      return { first: parts[0], last: parts.slice(1).join(" ") || undefined };
    }
    return {};
  } catch {
    return {};
  }
}
