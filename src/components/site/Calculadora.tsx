import { useState, useMemo } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

type SliderProps = {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  prefix?: string;
};

function Slider({ label, sublabel, value, min, max, step, onChange, format, prefix }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const num = Math.min(Math.max(Number(raw) || min, min), max);
    onChange(num);
  };

  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>{label}</p>
          {sublabel && <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>{sublabel}</p>}
        </div>
        <div
          style={{
            display: "flex", alignItems: "center", gap: 2,
            background: "rgba(92,21,155,0.06)", borderRadius: 8,
            padding: "4px 10px",
            border: "1px solid transparent",
            transition: "border-color 0.15s",
          }}
          onFocusCapture={(e) => (e.currentTarget.style.borderColor = "rgba(92,21,155,0.3)")}
          onBlurCapture={(e) => (e.currentTarget.style.borderColor = "transparent")}
        >
          {prefix && (
            <span style={{ fontSize: 16, fontWeight: 700, color: "#5C159B" }}>{prefix}</span>
          )}
          <input
            type="text"
            inputMode="numeric"
            value={value.toLocaleString("pt-BR")}
            onChange={handleInputChange}
            onFocus={(e) => e.target.select()}
            style={{
              fontSize: 18, fontWeight: 800, color: "#5C159B",
              letterSpacing: "-0.02em",
              background: "transparent",
              border: "none",
              outline: "none",
              width: `${Math.max(String(value).length + 1, 4)}ch`,
              textAlign: "right",
              fontFamily: "inherit",
              cursor: "text",
            }}
          />
        </div>
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
  const { lang } = useLang();
  const [reversasMes, setReversasMes] = useState(500);
  const [ticketMedio, setTicketMedio] = useState(250);

  const CUSTO_PCT_TICKET = 0.30;
  const RETENCAO_PCT = 0.30;

  const calc = useMemo(() => {
    const custoManual = ticketMedio * CUSTO_PCT_TICKET;
    const receitaRetidaMes = reversasMes * ticketMedio * RETENCAO_PCT;
    const receitaRetidaAno = receitaRetidaMes * 12;
    return { custoManual, receitaRetidaMes, receitaRetidaAno };
  }, [reversasMes, ticketMedio]);

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
            {t("s6_eyebrow", lang)}
          </span>
        </div>

        <h2 style={{
          fontSize: 38, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em",
          color: "#5C159B", textAlign: "center", marginBottom: 12,
          fontFamily: "'Rubik', 'Helvetica Neue', sans-serif",
        }}>
          {t("s6_titulo", lang)}
        </h2>
        <p style={{
          fontSize: 16, color: "#666", textAlign: "center",
          maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.6,
        }}>
          {t("s6_subtitulo", lang)}
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
              {t("s6_panel_label", lang)}
            </p>

            <Slider label={t("s6_slider1_label", lang)} sublabel={t("s6_slider1_sub", lang)}
              value={reversasMes} min={50} max={30000} step={50} onChange={setReversasMes} format={fmtNum} />
            <Slider label={t("s6_slider2_label", lang)} sublabel={t("s6_slider2_sub", lang)}
              value={ticketMedio} min={50} max={10000} step={10} onChange={setTicketMedio}
              format={(v) => `R$ ${v.toLocaleString("pt-BR")}`} prefix="R$" />

            <div style={{
              background: "rgba(92,21,155,0.04)", border: "1px solid rgba(92,21,155,0.12)",
              borderRadius: 12, padding: "14px 16px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 20,
            }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#5C159B", margin: 0 }}>
                  {t("s6_custo_label", lang)}
                </p>
                <p style={{ fontSize: 11, color: "#AAA", margin: "2px 0 0" }}>
                  {t("s6_custo_sub", lang)}
                </p>
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#5C159B" }}>
                {fmtBRL(calc.custoManual)}
              </span>
            </div>

            <p className="text-neutral-950 text-xs font-medium" style={{ marginTop: 8, lineHeight: 1.5 }}>
              {t("s6_disclaimer", lang)}
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
                {t("s6_card_mes", lang)}
              </p>
              <p style={{
                fontSize: 52, fontWeight: 800, color: "#FFFFFF",
                letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8,
              }}>
                {fmtBRL(calc.receitaRetidaMes)}
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", margin: "24px 0" }} />
              <p style={{
                fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8,
              }}>
                {t("s6_card_ano", lang)}
              </p>
              <p style={{
                fontSize: 36, fontWeight: 800, color: "rgba(255,255,255,0.92)",
                letterSpacing: "-0.03em", lineHeight: 1,
              }}>
                {fmtBRL(calc.receitaRetidaAno)}
              </p>
            </div>

            <a
              href="LINK_AGENDAMENTO"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#5C159B", color: "#FFFFFF", border: "none", borderRadius: 14,
                padding: "16px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer",
                fontFamily: "inherit", width: "100%", textAlign: "center", textDecoration: "none",
                display: "block",
              }}
            >
              {t("s6_cta", lang)}
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
