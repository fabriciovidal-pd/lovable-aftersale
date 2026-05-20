import { useState, useMemo } from "react";

type SliderProps = {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
};

function Slider({ label, sublabel, value, min, max, step, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>{label}</p>
          {sublabel && <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>{sublabel}</p>}
        </div>
        <span style={{
          fontSize: 18, fontWeight: 800, color: "#5C159B", letterSpacing: "-0.02em",
          background: "rgba(92,21,155,0.06)", padding: "4px 12px", borderRadius: 8,
        }}>
          {format(value)}
        </span>
      </div>
      <div style={{ position: "relative", height: 6, background: "#E8E0F4", borderRadius: 99 }}>
        <div style={{
          position: "absolute", left: 0, width: `${pct}%`, height: "100%",
          background: "linear-gradient(90deg, #7B2FBE, #5C159B)", borderRadius: 99, transition: "width 0.1s",
        }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", margin: 0 }}
        />
        <div style={{
          position: "absolute", top: "50%", left: `${pct}%`,
          transform: "translate(-50%, -50%)",
          width: 20, height: 20, background: "#5C159B", borderRadius: "50%",
          border: "3px solid #FFFFFF", boxShadow: "0 2px 8px rgba(92,21,155,0.35)",
          pointerEvents: "none", transition: "left 0.1s",
        }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 11, color: "#BBB" }}>{format(min)}</span>
        <span style={{ fontSize: 11, color: "#BBB" }}>{format(max)}</span>
      </div>
    </div>
  );
}

const fmtNum = (v: number) => v.toLocaleString("pt-BR");
const fmtBRL = (v: number) => `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export function Calculadora() {
  const [reversasMes, setReversasMes] = useState(500);
  const [ticketMedio, setTicketMedio] = useState(250);
  const [tempoPorReversa, setTempoPorReversa] = useState(12);

  const TAXA_AUTO = 0.70;
  const CUSTO_PCT_TICKET = 0.15;

  const calc = useMemo(() => {
    const custoManual = ticketMedio * CUSTO_PCT_TICKET;
    const reversasAuto = Math.round(reversasMes * TAXA_AUTO);
    const reversasManuais = reversasMes - reversasAuto;
    const custoAtualMes = reversasMes * custoManual;
    const custoDepoisMes = reversasManuais * custoManual;
    const economiaMes = custoAtualMes - custoDepoisMes;
    const economiaAno = economiaMes * 12;
    const horasAntes = (reversasMes * tempoPorReversa) / 60;
    const horasDepois = (reversasManuais * tempoPorReversa) / 60;
    const horasLiberadasMes = horasAntes - horasDepois;
    const operadoresLiberados = (horasLiberadasMes / 176).toFixed(1);
    return {
      economiaMes, economiaAno, custoManual,
      reversasAuto,
      horasLiberadasMes: Math.round(horasLiberadasMes),
      operadoresLiberados,
    };
  }, [reversasMes, ticketMedio, tempoPorReversa]);

  return (
    <section
      id="calculadora"
      style={{
        background: "linear-gradient(180deg, #F9F7FD 0%, #FFFFFF 100%)",
        padding: "80px 24px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(92,21,155,0.07)",
            border: "1px solid rgba(92,21,155,0.18)",
            borderRadius: "999px",
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 600,
            color: "#5C159B",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            Calculadora
          </span>
        </div>

        <h2 style={{
          fontSize: 38, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em",
          color: "#5C159B", textAlign: "center", marginBottom: 12,
        }}>
          Saiba o quanto você pode economizar
        </h2>
        <p style={{
          fontSize: 16, color: "#666", textAlign: "center",
          maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.6,
        }}>
          Ajuste os parâmetros da sua operação e veja o impacto real da automação de reversas.
        </p>

        <div className="calc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
          <div style={{
            background: "#FFFFFF", border: "1px solid #EAE0F5", borderRadius: 20,
            padding: "36px 32px", boxShadow: "0 4px 24px rgba(92,21,155,0.06)",
          }}>
            <p style={{
              fontSize: 13, fontWeight: 700, color: "#5C159B",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28,
            }}>
              Sua operação atual
            </p>

            <Slider label="Reversas por mês" sublabel="Trocas e devoluções processadas"
              value={reversasMes} min={50} max={5000} step={50} onChange={setReversasMes} format={fmtNum} />
            <Slider label="Ticket médio" sublabel="Valor médio do produto envolvido em cada reversa"
              value={ticketMedio} min={50} max={2000} step={10} onChange={setTicketMedio}
              format={(v) => `R$ ${v.toLocaleString("pt-BR")}`} />
            <Slider label="Tempo médio por reversa" sublabel="Minutos que um operador gasta em cada caso"
              value={tempoPorReversa} min={5} max={60} step={1} onChange={setTempoPorReversa} format={(v) => `${v} min`} />

            <div style={{
              background: "rgba(92,21,155,0.04)", border: "1px solid rgba(92,21,155,0.12)",
              borderRadius: 12, padding: "14px 16px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 20,
            }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#5C159B", margin: 0 }}>
                  Custo estimado por reversa
                </p>
                <p style={{ fontSize: 11, color: "#AAA", margin: "2px 0 0" }}>
                  Calculado automaticamente (15% do ticket médio)
                </p>
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#5C159B" }}>
                {fmtBRL(calc.custoManual)}
              </span>
            </div>

            <p className="text-neutral-950 text-xs font-medium" style={{ marginTop: 8, lineHeight: 1.5 }}>
              * Valores estimados para fins de referência. A economia real pode variar conforme as necessidade e características da operação.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{
              background: "#5C159B", borderRadius: 20, padding: "40px 32px",
              boxShadow: "0 8px 32px rgba(92,21,155,0.25)",
            }}>
              <p style={{
                fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8,
              }}>
                Economia estimada por mês
              </p>
              <p style={{
                fontSize: 52, fontWeight: 800, color: "#FFFFFF",
                letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8,
              }}>
                {fmtBRL(calc.economiaMes)}
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", margin: "24px 0" }} />
              <p style={{
                fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8,
              }}>
                Economia gerada por ano
              </p>
              <p style={{
                fontSize: 36, fontWeight: 800, color: "rgba(255,255,255,0.92)",
                letterSpacing: "-0.03em", lineHeight: 1,
              }}>
                {fmtBRL(calc.economiaAno)}
              </p>
            </div>

            <div style={{
              background: "#FFFFFF", border: "1px solid #EAE0F5", borderRadius: 20,
              padding: "28px 32px", boxShadow: "0 4px 24px rgba(92,21,155,0.05)",
              display: "flex", gap: 0,
            }}>
              {[
                { v: calc.reversasAuto.toLocaleString("pt-BR"), l: "reversas automatizadas/mês" },
                { v: `${calc.horasLiberadasMes}h`, l: "horas operacionais liberadas" },
                { v: calc.operadoresLiberados, l: "operadores realocáveis" },
              ].map(({ v, l }, i, arr) => (
                <div key={l} style={{
                  flex: 1, textAlign: "center",
                  borderRight: i < arr.length - 1 ? "1px solid #EAE0F5" : "none",
                  padding: "0 16px",
                }}>
                  <p style={{ fontSize: 26, fontWeight: 800, color: "#5C159B", letterSpacing: "-0.03em", margin: 0 }}>{v}</p>
                  <p style={{ fontSize: 12, color: "#AAA", margin: "6px 0 0", lineHeight: 1.4 }}>{l}</p>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              style={{
                background: "#5C159B", color: "#FFFFFF", border: "none", borderRadius: 14,
                padding: "16px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer",
                fontFamily: "inherit", width: "100%", textAlign: "center", textDecoration: "none",
                display: "block",
              }}
            >
              Quero economizar com a Aftersale
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
