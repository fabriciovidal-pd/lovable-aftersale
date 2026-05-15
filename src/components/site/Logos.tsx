import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const clientLogos = [
  "Samsung", "Tramontina", "Decathlon", "Malwee", "Calvin Klein",
  "Chilli Beans", "Farm", "Ri Happy", "Hugo Boss", "FTD", "Hope", "Le Creuset",
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div
      style={{
        height: 48,
        minWidth: 120,
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F3F0F7",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 700,
        color: "#5C159B",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {name}
    </div>
  );
}

function LogoCarousel() {
  const [offset, setOffset] = useState(0);
  const itemWidth = 160;
  const total = clientLogos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(interval);
  }, [total]);

  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <div
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(to right, #FAFAFA, transparent)",
          zIndex: 2, pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(to left, #FAFAFA, transparent)",
          zIndex: 2, pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: 16,
          transform: `translateX(-${offset * itemWidth}px)`,
          transition: "transform 0.6s ease",
          width: "max-content",
        }}
      >
        {doubled.map((name, i) => (
          <LogoPlaceholder key={i} name={name} />
        ))}
      </div>
    </div>
  );
}

export function Logos() {
  return (
    <>
      {/* +400 clientes confiam — carrossel (vem ANTES) */}
      <section
        id="clientes"
        className="py-12 lg:py-16"
        style={{ background: "#FAFAFA", borderTop: "1px solid #EEEEEE" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span
            className="inline-block rounded-full px-3.5 py-1 text-[12px] font-semibold uppercase mb-4"
            style={{
              background: "rgba(92,21,155,0.07)",
              border: "1px solid rgba(92,21,155,0.18)",
              color: "#5C159B",
              letterSpacing: "0.06em",
            }}
          >
            Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1] mb-9">
            +400 clientes confiam
          </h2>
          <LogoCarousel />
        </div>
      </section>

      {/* Parceiros recomendam */}
      <section
        id="parceiros"
        className="py-16 lg:py-20"
        style={{ background: "#FAFAFA" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span
            className="inline-block rounded-full px-3.5 py-1 text-[12px] font-semibold uppercase mb-4"
            style={{
              background: "rgba(92,21,155,0.07)",
              border: "1px solid rgba(92,21,155,0.18)",
              color: "#5C159B",
              letterSpacing: "0.06em",
            }}
          >
            Parceiros
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1] mb-10">
            Nossos parceiros recomendam
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="max-md:!grid-cols-1">
            {/* Card Tramontina */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 lg:p-10 h-full"
              style={{ border: "1px solid #E5E5E5" }}
            >
              <img
                src="/tramontina.svg"
                alt="Tramontina"
                style={{ height: 28, width: "auto", objectFit: "contain", marginBottom: 20 }}
              />
              <p
                className="text-[22px] lg:text-[24px] font-bold leading-[1.3] mb-4"
                style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
              >
                "A Aftersale nos deu controle real sobre nossa operação de trocas em escala — algo que parecia impossível antes."
              </p>
              <div style={{ width: 40, height: 2, background: "rgba(92,21,155,0.2)", borderRadius: 2, marginBottom: 16 }} />
              <p
                className="text-[16px] font-medium leading-[1.55] italic mb-6"
                style={{ color: "#555555" }}
              >
                "Hoje processamos milhares de trocas por mês com fluxos automatizados e visibilidade total — uma transformação que impactou diretamente nossa margem."
              </p>
              <a
                href="#"
                className="text-sm font-semibold"
                style={{
                  color: "#5C159B",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(92,21,155,0.3)",
                  paddingBottom: 2,
                }}
              >
                Ler o caso completo →
              </a>
            </motion.div>

            {/* Card Oscar Calçados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-white rounded-2xl p-8 lg:p-10 h-full"
              style={{ border: "1px solid #E5E5E5" }}
            >
              <img
                src="/oscar.svg"
                alt="Oscar Calçados"
                style={{ height: 40, width: "auto", objectFit: "contain", marginBottom: 20 }}
              />
              <p className="text-[15px] leading-[1.65] mb-3.5" style={{ color: "#444444" }}>
                "A integração foi simples e os resultados vieram rápido. A Aftersale virou parte essencial da nossa operação de pós-venda."
              </p>
              <a href="#" className="text-[13px] font-semibold" style={{ color: "#5C159B", textDecoration: "none", opacity: 0.75 }}>
                Ver caso →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
