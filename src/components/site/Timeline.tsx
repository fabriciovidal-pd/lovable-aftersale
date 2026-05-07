import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2017–18",
    title: "O começo",
    desc: "Nascemos como empresa de pontos de entrega e criamos o produto de troca e devolução.",
  },
  {
    year: "2019–20",
    title: "Vale do Silício",
    desc: "Única empresa brasileira aceita no programa 500 Startups no Vale do Silício.",
  },
  {
    year: "2021–22",
    title: "Ecossistema Confi",
    desc: "A soma de experiências consolida. Nos tornamos parte do ecossistema Confi.",
  },
  {
    year: "2023+",
    title: "Liderança consolidada",
    desc: "+400 clientes, +6M reversas. Líderes consolidados no mercado de troca e devolução.",
  },
  {
    year: "2025",
    title: "Reposicionamento tecnológico",
    desc: "Reestruturação do produto com foco em operações maduras, orientadas a dados e governança.",
  },
];

export function Timeline() {
  return (
    <section id="historia" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 bg-brand-foreground/10 backdrop-blur px-3 py-1 text-brand-foreground/80 text-base tracking-[0.2em]">NOSSA TRAJETÓRIA</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Nossa história
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            De startup de ponto de entrega à líder em troca e devolução no Brasil.
          </p>
        </div>

        <div className="relative mt-20">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                >
                  {/* dot */}
                  <span className="absolute left-4 md:left-1/2 top-2 size-3 rounded-full bg-brand-gradient ring-4 ring-background md:-translate-x-1/2" aria-hidden />

                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className="text-sm font-medium text-brand tracking-wider">{m.year}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{m.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* 2026 highlight milestone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-12 md:gap-8 items-center"
            >
              <span className="absolute left-4 md:left-1/2 top-6 size-4 rounded-full bg-brand-gradient ring-4 ring-background md:-translate-x-1/2 shadow-glow" aria-hidden />
              <div className="md:col-span-12">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-elegant">
                  <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand-gradient opacity-20 blur-3xl" aria-hidden />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
                      <Sparkles className="size-3.5 text-brand" />
                      Novo ciclo · IA First
                    </div>
                    <div className="mt-5 text-sm font-medium text-brand tracking-wider">2026</div>
                    <h3 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
                      Aquisição da Genius Returns
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                      Embarcamos portfólio, tecnologia, capital intelectual e market share — consolidando a Aftersale como
                      a plataforma definitiva de pós-venda no Brasil, agora orientada a inteligência artificial.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
