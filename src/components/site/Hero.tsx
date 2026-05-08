import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
const dashboard = "/dashboard-mockup-new.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-brand-gradient overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 size-[28rem] rounded-full bg-accent opacity-10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-40 -right-32 size-[32rem] rounded-full bg-brand-glow opacity-30 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 bg-brand-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium text-brand-foreground"
          >
            <Sparkles className="size-3.5 text-accent" />
            Líder em trocas e devoluções desde 2017
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-brand-foreground leading-[1.05]"
          >
            Nós ajudamos na redução do custo da sua operação, maximizando a proteção e a geração da sua receita.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-brand-foreground/85 max-w-3xl mx-auto leading-relaxed"
          >
            Você sabia que grande parte das devoluções no e-commerce poderiam ser evitadas antes mesmo do produto voltar? A gente trabalha exatamente nisso. E faz muita diferença no final do mês, e no acumulado do ano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-brand-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-accent-glow hover:bg-accent-glow transition-all"
            >
              Solicitar Orçamento
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 bg-brand-foreground/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
            >
              Conheça as Soluções
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mt-20"
        >
          <div className="absolute inset-x-10 -bottom-10 h-24 bg-accent opacity-20 blur-3xl" />
          <div className="relative rounded-2xl border border-brand-foreground/15 bg-brand-foreground/5 backdrop-blur p-2 shadow-brand-strong">
            <img
              src={dashboard}
              alt="Painel da plataforma de pós-venda Aftersale"
              width={1920}
              height={1080}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
