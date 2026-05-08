import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import dashboard from "@/assets/dashboard-mockup.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-brand-gradient overflow-hidden">
      {/* floating accents */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-20 size-80 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-40 -right-24 size-96 rounded-full bg-brand-gradient opacity-15 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 bg-brand-foreground/10 backdrop-blur px-3 py-1 text-xs text-brand-foreground/80"
          >
            <Sparkles className="size-3.5 text-accent" />
            Pós-venda inteligente para e-commerce e varejo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl md:text-6xl tracking-tight text-brand-foreground leading-[1.05] font-medium text-left px-0 py-0 lg:text-5xl"
          >
            Nós ajudamos na redução do custo de trocas e devolução da sua operação, maximizando a proteção e a geração da sua receita.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-brand-foreground/80 max-w-2xl mx-auto"
          >
            Muitas devoluções no e-commerce poderiam ser evitadas antes mesmo da logística reversa acontecer. Nossa solução atua de forma preventiva para reduzir impactos operacionais e financeiros em toda a operação.
          </motion.p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mt-16"
        >
          <div className="absolute inset-x-10 -bottom-10 h-24 bg-brand-gradient opacity-30 blur-3xl" />
          <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-2 shadow-elegant">
            <img
              src={dashboard}
              alt="Painel da plataforma de pós-venda"
              width={1920}
              height={1080}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-background text-brand px-5 py-3 text-sm font-medium shadow-elegant hover:shadow-accent-glow transition-all"
          >
            Agendar demonstração
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#plataforma"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-5 py-3 text-sm font-medium text-brand-foreground hover:bg-accent/10 transition-colors"
          >
            Conhecer plataforma
          </a>
        </motion.div>
      </div>
    </section>
  );
}
