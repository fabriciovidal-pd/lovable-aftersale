import { useEffect, useRef, useState } from "react";

type Item = {
  ano: string;
  titulo: string;
  descricao: string;
  badge?: string;
};

const timeline: Item[] = [
  {
    ano: "2017-18",
    titulo: "O começo",
    descricao:
      "Nascemos como empresa de pontos de entrega e criamos o produto de troca e devolução.",
  },
  {
    ano: "2019-20",
    titulo: "Vale do Silício",
    descricao:
      "Única empresa brasileira aceita no programa 500 Startups no Vale do Silício.",
  },
  {
    ano: "2021-22",
    titulo: "Ecossistema Confi",
    descricao:
      "A soma de experiências consolida. Nos tornamos parte do ecossistema Confi.",
  },
  {
    ano: "2023+",
    titulo: "Liderança consolidada",
    descricao:
      "+400 clientes, +6M reversas. Líderes consolidados no mercado de troca e devolução.",
  },
  {
    ano: "2025",
    titulo: "Reposicionamento tecnológico",
    descricao:
      "Reestruturação do produto com foco em operações maduras, orientadas a dados e governança.",
  },
  {
    ano: "2026",
    titulo: "Aquisição da Genius Returns",
    descricao:
      "Embarcamos portfólio, tecnologia, capital intelectual e market share — consolidando a Aftersale como a plataforma definitiva de pós-venda no Brasil, agora orientada a inteligência artificial.",
    badge: "Novo ciclo · IA First",
  },
];

function CardContent({ ano, titulo, descricao, badge }: Item) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        padding: "18px 22px",
        maxWidth: 380,
        width: "100%",
        border: "1px solid rgba(92,21,155,0.08)",
        boxShadow: hov
          ? "0 4px 24px rgba(92,21,155,0.13), 0 1px 4px rgba(0,0,0,0.06)"
          : "0 2px 16px rgba(92,21,155,0.07), 0 1px 4px rgba(0,0,0,0.04)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
    >
      {badge && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            background: "rgba(92,21,155,0.07)",
            border: "1px solid rgba(92,21,155,0.18)",
            borderRadius: "999px",
            padding: "2px 10px",
            fontSize: 11,
            fontWeight: 600,
            color: "#5C159B",
            letterSpacing: "0.03em",
            marginBottom: 10,
          }}
        >
          🔮 {badge}
        </span>
      )}

      <span
        style={{
          display: "inline-block",
          background: "rgba(92,21,155,0.07)",
          border: "1px solid rgba(92,21,155,0.15)",
          borderRadius: "999px",
          padding: "2px 10px",
          fontSize: 11,
          fontWeight: 700,
          color: "#5C159B",
          letterSpacing: "0.05em",
          marginBottom: 8,
        }}
      >
        {ano}
      </span>

      <h3
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: "#0A0A0A",
          lineHeight: 1.3,
          margin: "0 0 6px",
        }}
      >
        {titulo}
      </h3>

      <p style={{ fontSize: 13, lineHeight: 1.65, color: "#666", margin: 0 }}>
        {descricao}
      </p>
    </div>
  );
}

type CardProps = Item & {
  isLeft: boolean;
  index: number;
  dotVisible: boolean;
};

function TimelineCard({
  ano,
  titulo,
  descricao,
  isLeft,
  index,
  dotVisible,
  badge,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr",
        alignItems: "center",
        minHeight: 120,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 24 }}>
        {isLeft && (
          <CardContent ano={ano} titulo={titulo} descricao={descricao} badge={badge} />
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: "100%",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: dotVisible ? "#5C159B" : "rgba(92,21,155,0.2)",
            border: "3px solid #FFFFFF",
            boxShadow: dotVisible
              ? "0 0 0 3px rgba(92,21,155,0.2), 0 2px 8px rgba(92,21,155,0.3)"
              : "none",
            transition: "background 0.5s ease, box-shadow 0.5s ease",
            zIndex: 3,
            flexShrink: 0,
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 24 }}>
        {!isLeft && (
          <CardContent ano={ano} titulo={titulo} descricao={descricao} badge={badge} />
        )}
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
        ([e]) => {
          if (e.isIntersecting) {
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
          "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(92,21,155,0.04) 0%, transparent 70%), #F8F7FC",
        padding: "80px 48px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
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
            marginBottom: 64,
          }}
        >
          De ideia a referência no Brasil
        </h2>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              transform: "translateX(-50%)",
              width: 2,
              background: `repeating-linear-gradient(
                to bottom,
                rgba(92,21,155,0.25) 0px,
                rgba(92,21,155,0.25) 5px,
                transparent 5px,
                transparent 12px
              )`,
              zIndex: 1,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => (
              <div key={item.ano} style={{ position: "relative" }}>
                <div
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: 1,
                    height: 1,
                    pointerEvents: "none",
                  }}
                />
                <TimelineCard
                  {...item}
                  isLeft={i % 2 === 0}
                  index={i}
                  dotVisible={dotsVisible[i]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
