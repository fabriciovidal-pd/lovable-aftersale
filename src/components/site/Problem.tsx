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
      id="reposicionamento"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#5C159B" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
            Por que escalar muda tudo
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-white leading-[1.1]">
            A troca e devolução que você conhece não foi feita para escalar
          </h2>
          <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            Quem processava cem trocas por mês não tem os mesmos problemas de
            troca e devolução com um volume mais alto.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/5">
          {items.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/[0.07] hover:bg-white/[0.12] transition-colors p-8 lg:p-10"
            >
              <div className="size-11 rounded-xl bg-white/10 grid place-items-center text-white">
                <c.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-semibold tracking-tight text-white leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] text-white/60 leading-relaxed">
                {c.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
