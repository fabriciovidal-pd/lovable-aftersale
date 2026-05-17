import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    ano: "2018",
    titulo: "O início",
    descricao:
      "A Aftersale nasce com a missão de transformar o pós-venda no Brasil. Identificamos que devoluções e trocas eram o maior ponto cego do e-commerce nacional.",
  },
  {
    ano: "2019",
    titulo: "Primeiros clientes",
    descricao:
      "Chegamos aos primeiros 50 clientes, validando a proposta de valor e consolidando as bases da plataforma com feedback real de operações.",
  },
  {
    ano: "2020",
    titulo: "Escala e automação",
    descricao:
      "Lançamos o motor de regras inteligentes, permitindo que marcas automatizassem 80% das decisões de troca sem intervenção humana.",
  },
  {
    ano: "2021",
    titulo: "Expansão nacional",
    descricao:
      "Ultrapassamos 150 clientes ativos. Tramontina, Ri Happy e Hugo Boss passam a usar a Aftersale para gerenciar sua logística reversa.",
  },
  {
    ano: "2022",
    titulo: "Integração omnichannel",
    descricao:
      "Lançamos integrações nativas com VTEX, Shopify e os principais ERPs do mercado, tornando a adoção ainda mais simples.",
  },
  {
    ano: "2023",
    titulo: "IA no pós-venda",
    descricao:
      "Incorporamos inteligência artificial à plataforma para prever devoluções, identificar padrões e sugerir ações preventivas automaticamente.",
  },
  {
    ano: "2024",
    titulo: "+400 clientes",
    descricao:
      "Chegamos à marca de 400 clientes e consolidamos nossa posição como a principal plataforma de gestão de trocas e devoluções do Brasil.",
  },
];

type CardProps = {
  ano: string;
  titulo: string;
  descricao: string;
  isLeft: boolean;
  index: number;
};

function TimelineCard({ ano, titulo, descricao, isLeft, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        gridColumn: isLeft ? "1" : "3",
        display: "flex",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        paddingRight: isLeft ? 16 : 0,
        paddingLeft: isLeft ? 0 : 16,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : isLeft
            ? "translateX(-20px)"
            : "translateX(20px)",
        transition: `opacity 0.45s ease ${index * 0.06}s, transform 0.45s ease ${index * 0.06}s`,
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #EAE0F5",
          borderRadius: 12,
          padding: "20px 22px",
          maxWidth: 400,
          width: "100%",
          boxShadow: visible ? "0 2px 12px rgba(92,21,155,0.07)" : "none",
          transition: "box-shadow 0.4s ease",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(92,21,155,0.07)",
            border: "1px solid rgba(92,21,155,0.18)",
            borderRadius: "999px",
            padding: "2px 10px",
            fontSize: 11,
            fontWeight: 700,
            color: "#5C159B",
            letterSpacing: "0.04em",
            marginBottom: 8,
          }}
        >
          {ano}
        </span>

        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#0A0A0A",
            lineHeight: 1.3,
            marginBottom: 6,
          }}
        >
          {titulo}
        </h3>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: "#666666",
            margin: 0,
          }}
        >
          {descricao}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dotsVisible, setDotsVisible] = useState<boolean[]>(
    Array(timeline.length).fill(false)
  );

  useEffect(() => {
    const observers = dotRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setDotsVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      id="historia"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(92,21,155,0.04) 0%, transparent 70%), #F8F7FC",
        padding: "72px 64px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
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
            Nossa História
          </span>
        </div>

        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0A0A0A",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          De ideia a referência no Brasil
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 24px 1fr",
            rowGap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              gridColumn: "2",
              gridRow: `1 / ${timeline.length + 1}`,
              display: "flex",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: 1,
                background: "rgba(92,21,155,0.12)",
                borderRadius: 1,
              }}
            />
          </div>

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return [
              <TimelineCard
                key={`card-${item.ano}`}
                {...item}
                isLeft={isLeft}
                index={i}
              />,
              <div
                key={`dot-${item.ano}`}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                style={{
                  gridColumn: "2",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: 28,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: dotsVisible[i]
                      ? "#5C159B"
                      : "rgba(92,21,155,0.2)",
                    border: "2px solid #F8F7FC",
                    boxShadow: dotsVisible[i]
                      ? "0 0 0 2px rgba(92,21,155,0.2)"
                      : "none",
                    transition:
                      "background 0.5s ease, box-shadow 0.5s ease",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </div>,
              <div
                key={`empty-${item.ano}`}
                style={{ gridColumn: isLeft ? "3" : "1" }}
              />,
            ];
          })}
        </div>
      </div>
    </section>
  );
}
