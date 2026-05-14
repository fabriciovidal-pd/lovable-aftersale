import { motion } from "framer-motion";

const featured = {
  empresa: "Samsung",
  depoimento:
    "A Aftersale transformou completamente nossa operação de pós-venda. Reduzimos o tempo médio de resolução de trocas em 60% e praticamente zeramos as reclamações relacionadas a devoluções.",
  autor: "Gerente de Operações, Samsung Brasil",
};

const cards = [
  {
    empresa: "Hugo Boss",
    trecho:
      "Conseguimos escalar nossa operação de trocas sem aumentar o time. A automação de regras por SKU foi decisiva.",
  },
  {
    empresa: "Farm",
    trecho:
      "O dashboard em tempo real mudou nossa visão sobre devoluções. Agora tomamos decisões com dados, não achismo.",
  },
  {
    empresa: "Ri Happy",
    trecho:
      "Integração simples, onboarding rápido e resultados desde a primeira semana. Recomendamos sem hesitar.",
  },
];

const ImagePlaceholder = () => (
  <div
    className="w-full"
    style={{
      background: "#F3F0F7",
      borderRadius: "12px",
      height: "260px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(92,21,155,0.25)",
    }}
  >
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <polyline points="21,15 16,10 5,21" />
    </svg>
  </div>
);

export function Logos() {
  return (
    <section
      id="clientes"
      className="py-24 lg:py-32"
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
          Clientes
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand leading-[1.1]">
          +400 clientes confiam
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 lg:p-10"
          style={{ border: "1px solid #E5E5E5" }}
        >
          <div>
            <div className="text-lg font-bold" style={{ color: "#5C159B" }}>
              {featured.empresa}
            </div>
            <blockquote className="mt-4 text-2xl md:text-[26px] font-medium leading-snug text-foreground">
              “{featured.depoimento}”
            </blockquote>
            <div className="mt-6 text-[13px] text-muted-foreground">
              {featured.autor}
            </div>
            <a
              href="#"
              className="mt-5 inline-block text-sm font-medium hover:underline"
              style={{ color: "#5C159B" }}
            >
              Ler o caso completo
            </a>
          </div>
          <ImagePlaceholder />
        </motion.div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.empresa}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-xl p-7"
              style={{ border: "1px solid #E5E5E5" }}
            >
              <div className="text-base font-bold" style={{ color: "#5C159B" }}>
                {c.empresa}
              </div>
              <p className="mt-3 text-[15px] text-foreground leading-relaxed">
                {c.trecho}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium hover:underline"
                style={{ color: "#5C159B" }}
              >
                Ver caso
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
