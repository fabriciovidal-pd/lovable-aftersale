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
        padding: "48px 64px",
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

          <div style={{ width: "100%" }}>
            <div
              style={{
                background: "#1c1c1e",
                borderRadius: 28,
                padding: "14px 14px 18px",
                overflow: "hidden",
                boxShadow:
                  "0 24px 64px rgba(92,21,155,0.18), 0 4px 16px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.08)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 6,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#0A0A0A",
                  position: "relative",
                  aspectRatio: "4/3",
                }}
              >
                <video
                  ref={videoRef}
                  src="/troque-facil-demo.mp4#t=7,28"
                  autoPlay
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
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
