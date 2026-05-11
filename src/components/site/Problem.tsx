import { motion } from "framer-motion";
import { Brain, AlertOctagon, TrendingUp, Coins } from "lucide-react";

const cards = [
  {
    icon: Brain,
    eyebrow: "QUANDO TROCA E DEVOLUÇÃO DEIXA DE SER FLUXO E VIRA DECISÃO",
    headline: "Cada devolução é uma decisão de negócio",
    text:
      "A maioria das jornadas trata troca e devolução como um fluxo operacional burocrático. Mas quando o cliente inicia isso, o produto tem margem diferente e o cliente tem valor distinto. Tratar tudo igual é decidir errado. Troca e devolução inteligente exige motor de decisão, não apenas menu de processos.",
  },
  {
    icon: AlertOctagon,
    eyebrow: "O CUSTO INVISÍVEL DAS EXCEÇÕES",
    headline: "O maior erro é aceitar a devolução rápido demais",
    text:
      "Para cada troca automatizada, existem dezenas de exceções resolvidas manualmente pelo time de atendimento. Acertar isso no automático parece ótimo, mas gera inconsistência, retrabalho e custos que nunca aparecem no dashboard. Piorar os excessos virou o primeiro passo para controlar isso.",
  },
  {
    icon: TrendingUp,
    eyebrow: "POR QUE REGRAS SIMPLES QUEBRAM EM ESCALA",
    headline: "Se sua taxa de devolução sobe e ninguém sabe por quê, você não está sozinho",
    text:
      "Um e-commerce com 500 pedidos/mês resolve trocas com planilha e boa vontade. Com 50.000 pedidos, as mesmas regras geram gargalos, atrito e inconsistência. A complexidade não cresce linearmente. Ela explode. Sua operação precisa de um sistema que evolua junto e mostre as causas reais.",
  },
  {
    icon: Coins,
    eyebrow: "TROCA E DEVOLUÇÃO COMO SISTEMA ECONÔMICO",
    headline: "Todo mundo fala em vender mais. A gente fala em proteger e perder menos.",
    text:
      "Cada reversa movimenta estoque, frete, pessoas, crédito, recompra e confiança. Quando bem orquestrado, o fluxo de troca e devolução gera receita recorrente, reduz custo de aquisição e aumenta LTV. Se ele é tratado por volume de chamados... isso vira prejuízo econômico no seu P&L.",
  },
];

export function Problem() {
  return (
    <section id="reposicionamento" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-medium tracking-[0.2em] text-brand">
            REPOSICIONANDO A CATEGORIA
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-display font-medium tracking-tight text-brand">
            A troca e devolução que você conhece não foi feita para escalar
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Quatro perspectivas que sua operação precisa considerar antes de tratar troca e devolução como mais um processo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.article
              key={c.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-card hover:shadow-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-12 rounded-2xl bg-brand-soft border border-brand/15 grid place-items-center text-brand">
                <c.icon className="size-5" strokeWidth={1.75} />
              </div>
              <p className="mt-6 text-[11px] font-semibold tracking-[0.18em] text-brand/80">
                {c.eyebrow}
              </p>
              <h3 className="mt-3 text-xl md:text-2xl font-display font-medium tracking-tight text-foreground leading-snug">
                {c.headline}
              </h3>
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
                {c.text}
              </p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
