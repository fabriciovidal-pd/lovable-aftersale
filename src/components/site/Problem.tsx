import { motion } from "framer-motion";
import { Package, Zap, BarChart3, Coins } from "lucide-react";

const items = [
  {
    icon: Package,
    title: "Cada devolução é uma decisão de negócio",
    description:
      "A maioria das plataformas trata devolução como um evento isolado. Nós conectamos cada troca ao estoque, à margem e ao comportamento do cliente em tempo real.",
  },
  {
    icon: Zap,
    title: "O maior erro é a devolução rápido demais",
    description:
      "Velocidade sem inteligência gera retrabalho. Nossa engine analisa o motivo antes de processar — e sugere o melhor caminho para preservar a receita.",
  },
  {
    icon: BarChart3,
    title:
      "Se sua taxa de devolução sobe e ninguém sabe por quê, você não está sozinho",
    description:
      "Dados fragmentados entre ERP, e-commerce e SAC criam pontos cegos. Centralizamos tudo em um painel acionável, não só relatórios.",
  },
  {
    icon: Coins,
    title:
      "Todo mundo fala em vender mais. A gente fala em proteger e perder menos.",
    description:
      "Cada devolução mal gerida consome margem duas vezes: no custo logístico e na perda de confiança do cliente. Resolvemos os dois lados.",
  },
];

export function Problem() {
  return (
    <section
      id="trocas"
      className="py-20 lg:py-24"
      style={{ backgroundColor: "#5C159B" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block rounded-full px-3.5 py-1 text-[12px] font-semibold uppercase text-white"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              letterSpacing: "0.06em",
            }}
          >
            Por que escalar muda tudo
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-white leading-[1.1]">
            A troca e devolução que você conhece não foi feita para escalar
          </h2>
          <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            Quem processava cem trocas por mês não tem os mesmos problemas de
            troca e devolução com um volume mais alto.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/5">
          {items.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/[0.07] hover:bg-white/[0.12] transition-colors"
              style={{ padding: "28px 32px" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="grid place-items-center text-white shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.12)",
                    marginTop: 1,
                  }}
                >
                  <c.icon className="size-[18px]" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-white leading-snug tracking-tight m-0">
                  {c.title}
                </h3>
              </div>
              <p
                className="text-[14px] text-white/60 leading-relaxed"
                style={{ paddingLeft: 48, marginTop: 10 }}
              >
                {c.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
