import { motion } from "framer-motion";

const logos = [
  { name: "AOC",             src: "/aoc.svg" },
  { name: "Arezzo",          src: "/arezzo.svg" },
  { name: "Bagaggio",        src: "/bagaggio.svg" },
  { name: "Britania",        src: "/britania.svg" },
  { name: "Calvin Klein",    src: "/calvin-klien.svg" },
  { name: "Chilli Beans",    src: "/chilli-beans.svg" },
  { name: "Decathlon",       src: "/decathlon.svg" },
  { name: "DUX",             src: "/dux.svg" },
  { name: "FTD",             src: "/ftd.svg" },
  { name: "Grendene",        src: "/grendene.svg" },
  { name: "Hope",            src: "/hope.svg" },
  { name: "Inbrands",        src: "/inbrands.svg" },
  { name: "Infra Commerce",  src: "/infra-commerce.svg" },
  { name: "Integral Médica", src: "/integral-mdica.svg" },
  { name: "Le Creuset",      src: "/le-creuset.svg" },
  { name: "Levi's",          src: "/levis.svg" },
  { name: "Lór Espresso",    src: "/lr-espresso.svg" },
  { name: "Malwee",          src: "/malwee.svg" },
  { name: "Melitta",         src: "/melitta.svg" },
  { name: "Monte Carlo",     src: "/monte-carlo.svg" },
  { name: "Morena Rosa",     src: "/morena-rosa.svg" },
  { name: "Mormaii",         src: "/mormaii.svg" },
  { name: "Mr Cat",          src: "/mr-cat.svg" },
  { name: "Multilaser",      src: "/multilaser.svg" },
  { name: "Natural One",     src: "/natural-one.svg" },
  { name: "Philips",         src: "/phlips.svg" },
  { name: "Reserva",         src: "/reserva.svg" },
  { name: "Ri Happy",        src: "/ri-happy.svg" },
  { name: "Samsonite",       src: "/samsonite.svg" },
  { name: "Samsung",         src: "/samsung.svg" },
  { name: "Santa Lolla",     src: "/santa-lolla.svg" },
  { name: "Seilia",          src: "/seilia.svg" },
  { name: "Speedo",          src: "/speedo.svg" },
  { name: "Tramontina",      src: "/tramontina.svg" },
  { name: "Universal",       src: "/universal.svg" },
];

function LogoCarousel() {
  const doubled = [...logos, ...logos];
  return (
    <div
      style={{
        marginTop: 56,
        background: "#F4F4F6",
        borderRadius: 20,
        padding: "32px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-logos-track { animation: scrollLogos 28s linear infinite; }
        .scroll-logos-track:hover { animation-play-state: paused; }
      `}</style>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, #F4F4F6 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(270deg, #F4F4F6 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
      <div
        className="scroll-logos-track"
        style={{ display: "flex", gap: 16, width: "max-content" }}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            style={{
              width: 140,
              height: 80,
              background: "#FFFFFF",
              borderRadius: 14,
              border: "1px solid #E8E8EC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 20px",
              flexShrink: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                maxWidth: "100%",
                maxHeight: 36,
                objectFit: "contain",
                filter: "grayscale(1)",
                opacity: 0.7,
                transition: "filter 0.2s, opacity 0.2s",
              }}
              onError={(e) => {
                const img = e.currentTarget;
                const parent = img.parentElement;
                if (parent && !parent.querySelector("span")) {
                  img.style.display = "none";
                  const span = document.createElement("span");
                  span.textContent = logo.name;
                  span.style.cssText = "font-size:13px;font-weight:600;color:#999;text-align:center;letter-spacing:0.02em;";
                  parent.appendChild(span);
                }
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0)"; e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(1)"; e.currentTarget.style.opacity = "0.7"; }}
            />
          </div>
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
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
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
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1] mb-9 text-center">
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
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
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
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1] mb-10 text-center">
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
                className="text-[16px] font-medium leading-[1.55] italic"
                style={{ color: "#555555" }}
              >
                "Hoje processamos milhares de trocas por mês com fluxos automatizados e visibilidade total — uma transformação que impactou diretamente nossa margem."
              </p>
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
              <p
                className="text-[22px] lg:text-[24px] font-bold leading-[1.3] mb-4"
                style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
              >
                "A integração foi simples e os resultados vieram rápido — a Aftersale virou parte essencial da nossa operação."
              </p>
              <div style={{ width: 40, height: 2, background: "rgba(92,21,155,0.2)", borderRadius: 2, marginBottom: 16 }} />
              <p
                className="text-[16px] font-medium leading-[1.55] italic"
                style={{ color: "#555555" }}
              >
                "Ganhamos visibilidade total da jornada de pós-venda e reduzimos drasticamente o tempo de tratamento de cada solicitação de troca."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
