import { motion } from "framer-motion";
import { Brain, EyeOff, TrendingUp, Coins } from "lucide-react";

const cards = [
  {
    icon: Brain,
    eyebrow: "QUANDO TROCA E DEVOLUÇÃO DEIXA DE SER FLUXO E VIRA DECISÃO",
    title: "Cada devolução é uma decisão de negócio",
    desc: "A maioria das jornadas trata troca e devolução como um fluxo operacional burocrático. Mas quando o cliente inicia isso, o produto tem margem diferente e o cliente tem valor distinto. Tratar tudo igual é decidir errado. Troca e devolução inteligente exige motor de decisão, não apenas menu de processos.",
  },
  {
    icon: EyeOff,
    eyebrow: "O CUSTO INVISÍVEL DAS EXCEÇÕES",
    title: "O maior erro é aceitar a devolução rápido demais",
    desc: "Para cada troca automatizada, existem dezenas de exceções resolvidas manualmente pelo time de atendimento. Acertar isso no automático parece ótimo, mas gera inconsistência, retrabalho e custos que nunca aparecem no dashboard. Piorar os excessos virou o primeiro passo para controlar isso.",
  },
  {
    icon: TrendingUp,
    eyebrow: "POR QUE REGRAS SIMPLES QUEBRAM EM ESCALA",
    title: "Se sua taxa de devolução sobe e ninguém sabe por quê, você não está sozinho",
    desc: "Um e-commerce com 500 pedidos/mês resolve trocas com planilha e boa vontade. Com 50.000 pedidos, as mesmas regras geram gargalos, atrito e inconsistência.",
  },
  {
    icon: Coins,
    eyebrow: "TROCA E DEVOLUÇÃO COMO SISTEMA ECONÔMICO",
    title: "Todo mundo fala em vender mais. A gente fala em proteger e perder menos.",
    desc: "Cada reversa movimenta estoque, frete, pessoas, crédito, recompra e confiança.",
  },
];

export function Problem() {
  return (
    <section id="solucoes" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand tracking-wider">
            REPOSICIONANDO A CATEGORIA
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-strong leading-[1.1]">
            A troca e devolução que você conhece não foi feita para escalar
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Quatro perspectivas que sua operação precisa considerar antes de tratar troca e devolução como mais um processo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-card hover:shadow-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-12 rounded-2xl bg-brand-soft border border-brand/20 grid place-items-center text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-all">
                <c.icon className="size-6" strokeWidth={1.75} />
              </div>
              <p className="mt-6 text-[11px] font-semibold tracking-[0.18em] text-brand">{c.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-display font-bold tracking-tight text-foreground leading-snug">
                {c.title}
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="absolute inset-x-10 bottom-0 h-px bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
