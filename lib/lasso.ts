const LASSO_BASE = process.env.LASSO_BASE || "https://app.lasso.com.mx/api/v1";
const LASSO_TOKEN = process.env.LASSO_TOKEN || "";
const ID_TEMPLATE = Number(process.env.ID_TEMPLATE || "1101390");

async function lasso(method: string, body: Record<string, unknown>) {
  const res = await fetch(`${LASSO_BASE}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-access-token": LASSO_TOKEN },
    body: JSON.stringify(body),
  });
  const raw = await res.json();
  return Array.isArray(raw) ? raw[0] : raw;
}

export type IssuedCard = { userID: number; installURL: string; installQR: string; serialNumber: string };

// Upsert del cliente (match por email/phone) + emisión de la tarjeta.
export async function issueCard(input: {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}): Promise<IssuedCard> {
  const fName = input.firstName?.trim() || input.email.split("@")[0] || "Cliente";
  const sName = input.lastName?.trim() || "Knox";
  const phone = input.phone?.replace(/\D/g, "") || undefined;

  const clientBody: Record<string, unknown> = { idTemplate: ID_TEMPLATE, fName, sName, email: input.email };
  if (phone) clientBody.phone = Number(phone);

  const created = await lasso("createClient", clientBody);
  const userID = created?.userID;
  if (!userID) throw new Error(`Lasso createClient sin userID: ${JSON.stringify(created)}`);

  // Si el cliente ya existía (error 5) puede que ya tenga la tarjeta; createPass es idempotente para el flujo.
  const pass = await lasso("createPass", { idTemplate: ID_TEMPLATE, userID });

  return {
    userID,
    installURL: pass?.installURL || "",
    installQR: pass?.installQR || "",
    serialNumber: pass?.serialNumber || "",
  };
}
