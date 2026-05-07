import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 68, suffix: "%", label: "Redução no tempo médio de resolução", desc: "Automação de fluxos elimina etapas manuais e atrito operacional." },
  { value: 3.4, suffix: "x", decimals: 1, label: "Aumento na taxa de recompra", desc: "Clientes com experiência fluida voltam mais e gastam mais." },
  { value: 42, suffix: "%", label: "Mais conversão em troca vs reembolso", desc: "Retenção de receita por meio de jornadas inteligentes." },
  { value: 99.9, suffix: "%", decimals: 1, label: "Disponibilidade da plataforma", desc: "Infraestrutura corporativa pronta para alto volume." },
];

export function Metrics() {
  return (
    <section id="metricas" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Resultados mensuráveis</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Métricas que movem o negócio.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Resultados médios observados em operações que adotaram a Reversa para gerir pós-venda em escala.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-5xl font-display font-semibold tracking-tight text-foreground">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-4 text-sm font-medium text-foreground">{s.label}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="absolute inset-x-7 bottom-0 h-px bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {["NORTHWAVE", "LUMEN", "ATLAS RETAIL", "OBJECT", "MERIDIAN", "FORMA"].map((b) => (
            <span key={b} className="text-sm tracking-[0.2em] text-muted-foreground font-medium">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
