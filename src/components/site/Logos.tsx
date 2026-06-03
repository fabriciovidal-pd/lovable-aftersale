import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const logos = [
  { name: "Seilia",        src: "/logos/seilia.svg" },
  { name: "Samsung",       src: "/logos/samsung.svg" },
  { name: "Decathlon",     src: "/logos/decathlon.svg" },
  { name: "Calvin Klein",  src: "/logos/calvin-klien.svg" },
  { name: "Chilli Beans",  src: "/logos/chilli-beans.svg" },
  { name: "Ri Happy",      src: "/logos/ri-happy.svg" },
  { name: "Tramontina",    src: "/logos/tramontina.svg" },
  { name: "Malwee",        src: "/logos/malwee.svg" },
  { name: "Le Creuset",    src: "/logos/le-creuset.svg" },
  { name: "Hope",          src: "/logos/hope.svg" },
  { name: "FTD",           src: "/logos/ftd.svg" },
  { name: "Arezzo",        src: "/logos/arezzo.svg" },
  { name: "Reserva",       src: "/logos/reserva.svg" },
  { name: "Bagaggio",      src: "/logos/bagaggio.svg" },
  { name: "Mormaii",       src: "/logos/mormaii.svg" },
  { name: "Speedo",        src: "/logos/speedo.svg" },
  { name: "Levis",         src: "/logos/levis.svg" },
  { name: "Mr Cat",        src: "/logos/mr-cat.svg" },
  { name: "Santa Lolla",   src: "/logos/santa-lolla.svg" },
  { name: "Melitta",       src: "/logos/melitta.svg" },
  { name: "Monte Carlo",   src: "/logos/monte-carlo.svg" },
  { name: "Morena Rosa",   src: "/logos/morena-rosa.svg" },
  { name: "Multilaser",    src: "/logos/multilaser.svg" },
  { name: "Natural One",   src: "/logos/natural-one.svg" },
  { name: "Philips",       src: "/logos/phlips.svg" },
  { name: "Samsonite",     src: "/logos/samsonite.svg" },
  { name: "Universal",     src: "/logos/universal.svg" },
  { name: "AOC",           src: "/logos/aoc.svg" },
  { name: "Britânia",      src: "/logos/britania.svg" },
  { name: "DUX",           src: "/logos/dux.svg" },
  { name: "Grendene",      src: "/logos/grendene.svg" },
  { name: "Inbrands",      src: "/logos/inbrands.svg" },
  { name: "Infra Commerce",src: "/logos/infra-commerce.svg" },
  { name: "Integral Médica",src: "/logos/integral-medica.svg" },
  { name: "Lór Espresso",  src: "/logos/lor-espresso.svg" },
];

function LogoRow({ items, duration, reverse = false }: { items: typeof logos; duration: number; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: `logo-scroll ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            style={{
              width: 245,
              height: 144,
              flexShrink: 0,
              background: "#FFFFFF",
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 32px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              style={{ maxWidth: "100%", maxHeight: 72, objectFit: "contain" }}
              onError={(e) => {
                const img = e.currentTarget;
                const parent = img.parentElement;
                if (parent && !parent.querySelector("span")) {
                  img.style.display = "none";
                  const span = document.createElement("span");
                  span.textContent = logo.name;
                  span.style.cssText = "font-size:14px;font-weight:600;color:#999;text-align:center;";
                  parent.appendChild(span);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoGrid() {
  const perRow = Math.ceil(logos.length / 3);
  const row1 = logos.slice(0, perRow);
  const row2 = logos.slice(perRow, perRow * 2);
  const row3 = logos.slice(perRow * 2);
  return (
    <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
      <style>{`@keyframes logo-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <LogoRow items={row1} duration={50} reverse />
      <LogoRow items={row2} duration={60} reverse />
      <LogoRow items={row3} duration={55} reverse />
    </div>
  );
}


export function Logos() {
  const { lang } = useLang();
  return (
    <>
      {/* +400 clientes confiam — carrossel (vem ANTES) */}
      <section
        id="clientes"
        className="py-8 lg:py-10"
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
            {t("s7_eyebrow", lang)}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1] mb-9 text-center">
            {t("s7_titulo", lang)}
          </h2>
          <LogoGrid />
        </div>
      </section>

      {/* Parceiros recomendam */}
      <section
        id="parceiros"
        className="py-10 lg:py-12"
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
            {t("s8_eyebrow", lang)}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1] mb-10 text-center">
            {t("s8_titulo", lang)}
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
                "{t("s8_dep1", lang)}"
              </p>
              <div style={{ width: 40, height: 2, background: "rgba(92,21,155,0.2)", borderRadius: 2, marginBottom: 16 }} />
              <p
                className="text-[16px] font-medium leading-[1.55] italic"
                style={{ color: "#555555" }}
              >
                "{t("s8_dep2", lang)}"
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
                "{t("s8_dep3", lang)}"
              </p>
              <div style={{ width: 40, height: 2, background: "rgba(92,21,155,0.2)", borderRadius: 2, marginBottom: 16 }} />
              <p
                className="text-[16px] font-medium leading-[1.55] italic"
                style={{ color: "#555555" }}
              >
                "{t("s8_dep4", lang)}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
