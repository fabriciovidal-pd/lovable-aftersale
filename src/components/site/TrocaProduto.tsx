import { useEffect, useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export function TrocaProduto() {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const START = 7;
    const END = 28;
    const handleLoaded = () => {
      try { v.currentTime = START; } catch {}
    };
    const handleTime = () => {
      if (v.currentTime >= END || v.currentTime < START) {
        try { v.currentTime = START; } catch {}
      }
    };
    v.addEventListener("loadedmetadata", handleLoaded);
    v.addEventListener("timeupdate", handleTime);
    return () => {
      v.removeEventListener("loadedmetadata", handleLoaded);
      v.removeEventListener("timeupdate", handleTime);
    };
  }, []);

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

          <div className="browser-float" style={{ width: "100%" }}>
            <div
              style={{
                background: "#1E1E2E",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow:
                  "0 24px 64px rgba(92,21,155,0.18), 0 4px 16px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  background: "#2A2A3E",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 6,
                    padding: "4px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.01em" }}>
                    troque-facil.aftersale.com.br
                  </span>
                </div>
              </div>

              <div style={{ position: "relative", width: "100%", aspectRatio: "960/450", background: "#FAFAFA" }}>
                <video
                  ref={videoRef}
                  src="/troque-facil-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            <div
              style={{
                height: 32,
                marginTop: -1,
                background: "linear-gradient(180deg, rgba(92,21,155,0.06) 0%, transparent 100%)",
                borderRadius: "0 0 16px 16px",
                filter: "blur(8px)",
                transform: "scaleY(-1)",
                opacity: 0.4,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .troca-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes browserFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .browser-float {
          animation: browserFloat 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
