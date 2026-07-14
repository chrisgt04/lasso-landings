"use client";

import { useState } from "react";

type Result = { installURL: string; installQR: string };

export default function IssueForm({ preapprovalId, email }: { preapprovalId: string; email: string }) {
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preapproval_id: preapprovalId, fName, sName, phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      setResult({ installURL: data.installURL, installQR: data.installQR });
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: 16 }}>¡Listo! Escanea el QR o instala tu tarjeta:</p>
        {result.installQR ? (
          <img src={result.installQR} alt="QR de tu tarjeta" width={220} height={220} style={{ margin: "0 auto 20px", display: "block", background: "#fff", borderRadius: 8, padding: 8 }} />
        ) : null}
        {result.installURL ? <a className="btn" href={result.installURL}>Instalar en Apple / Google Wallet</a> : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
      <p style={{ textAlign: "center", opacity: 0.9, marginTop: 0 }}>Pago confirmado. Completa tus datos para generar tu tarjeta:</p>
      <label style={lbl}>Nombre
        <input style={inp} value={fName} onChange={(e) => setFName(e.target.value)} required autoComplete="given-name" />
      </label>
      <label style={lbl}>Apellido
        <input style={inp} value={sName} onChange={(e) => setSName(e.target.value)} required autoComplete="family-name" />
      </label>
      <label style={lbl}>Teléfono
        <input style={inp} value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" placeholder="10 dígitos" />
      </label>
      <label style={lbl}>Correo (de tu pago)
        <input style={{ ...inp, opacity: 0.7 }} value={email} readOnly />
      </label>
      {error ? <p style={{ color: "#ff9a9a", fontSize: 13, margin: 0 }}>{error}</p> : null}
      <button className="btn" type="submit" disabled={loading} style={{ opacity: loading ? 0.6 : 1 }}>
        {loading ? "Generando..." : "Generar mi tarjeta"}
      </button>
    </form>
  );
}

const lbl: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6, fontSize: 13, opacity: 0.9 };
const inp: React.CSSProperties = { padding: "10px 12px", borderRadius: 8, border: "1px solid #16456a", background: "#062336", color: "#fff", fontSize: 15 };
