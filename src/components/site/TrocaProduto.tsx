import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import trocaDetalhes from "@/assets/troca-detalhes.png";

export function TrocaProduto() {
  const { lang } = useLang();

  const bullets = [
    { titulo: t("s4_b1_titulo", lang), texto: t("s4_b1_desc", lang) },
    { titulo: t("s4_b2_titulo", lang), texto: t("s4_b2_desc", lang) },
    { titulo: t("s4_b3_titulo", lang), texto: t("s4_b3_desc", lang) },
  ];

  return (
    <section
      id="troca-produto"
      style={{
        background: "#FFFFFF",
        padding: "80px 64px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          className="troca-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
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
                }}
              >
                {t("s4_eyebrow", lang)}
              </span>
            </div>

            <h2
              className="text-[#7d00fa] px-0 text-5xl rounded-none font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              {t("s4_titulo", lang)}
            </h2>

            <p style={{ fontSize: 16, color: "#555555", lineHeight: 1.7, marginBottom: 32 }}>
              {t("s4_subtitulo", lang)}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 3,
                      minHeight: 48,
                      background: "linear-gradient(180deg, #7B2FBE, #5C159B)",
                      borderRadius: 99,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0A0A0A",
                        marginBottom: 4,
                        lineHeight: 1.3,
                      }}
                    >
                      {b.titulo}
                    </p>
                    <p style={{ fontSize: 14, color: "#666666", lineHeight: 1.65, margin: 0 }}>
                      {b.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#F3F0F7",
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16/10",
              boxShadow: "0 8px 40px rgba(92,21,155,0.12)",
              border: "1px solid rgba(92,21,155,0.1)",
            }}
          >
            <video
              src="/demo-troca.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                left: "-2%",
                width: "104%",
                top: "-9%",
                height: "120%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .troca-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
