import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
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
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 90, suffix: "%", label: "Atendimento de troca rápido" },
  { value: 30, suffix: "%", label: "Redução na retenção de chamados" },
  { value: 40, suffix: "%", label: "Upsell entre trocas reversas" },
  { value: 6, prefix: "+", suffix: "M", label: "Reversas processadas" },
];

const highlights = [
  { metric: "até 60%", text: "de redução em custo logístico com leilão de frete." },
  { metric: "71%", text: "dos consumidores satisfeitos tendem a comprar novamente. (RD Station)" },
];

export function Metrics() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand tracking-wider">
            RESULTADOS COMPROVADOS
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-strong leading-[1.1]">
            Números que comprovam
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Resultados reais de mais de 400 clientes que transformaram sua operação de troca e devolução.
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
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-strong">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm font-medium text-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-brand-gradient p-7 shadow-brand text-brand-foreground">
            <div className="text-3xl font-display font-bold">IA-First</div>
            <div className="mt-2 text-sm opacity-90">Decisões inteligentes em cada reversa.</div>
          </div>
          {highlights.map((h) => (
            <div key={h.metric} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="text-3xl font-display font-bold text-brand-strong">{h.metric}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.text}</div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Tem muito dinheiro na mesa!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
