export function TrocaProduto() {
  const bullets = [
    {
      titulo: "60–65% das devoluções em moda são por tamanho",
      texto:
        "A maioria dos clientes não quer devolver — quer trocar. Cada devolução sem oferta de troca é uma venda perdida que poderia ser retida.",
    },
    {
      titulo: "Troca guiada no portal do cliente",
      texto:
        "O consumidor escolhe o novo tamanho ou cor diretamente no fluxo de reversa, sem precisar abrir chamado ou falar com atendimento.",
    },
    {
      titulo: "Retenção de receita em vez de reembolso",
      texto:
        "Ao converter devoluções em trocas, sua operação reduz chargebacks, mantém o GMV e aumenta a satisfação pós-compra.",
    },
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
                Troca de Produto
              </span>
            </div>

            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#0A0A0A",
                marginBottom: 16,
              }}
            >
              Transforme devoluções em novas vendas
            </h2>

            <p style={{ fontSize: 16, color: "#555555", lineHeight: 1.7, marginBottom: 32 }}>
              Em moda e acessórios, a maioria das devoluções não é rejeição ao produto
              — é um problema de tamanho. Com a Aftersale, você oferece a troca certa
              no momento certo, retendo a receita antes que ela vire reembolso.
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
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                background: "rgba(243,240,247,0.92)",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "rgba(92,21,155,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="#5C159B" opacity="0.7" />
                </svg>
              </div>
              <p style={{ fontSize: 13, color: "#9B78C8", fontWeight: 500, margin: 0 }}>
                Demo em vídeo — em breve
              </p>
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
