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
