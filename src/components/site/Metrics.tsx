import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
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

type Stat = {
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  display?: string;
  label: string;
};

export function Metrics() {
  const { lang } = useLang();

  const stats: Stat[] = [
    { value: 90, suffix: "%", label: t("s3_stat1", lang) },
    { value: 30, suffix: "%", label: t("s3_stat2", lang) },
    { value: 40, suffix: "%", label: t("s3_stat3", lang) },
    { value: 6, prefix: "+", suffix: "M", label: t("s3_stat4", lang) },
    { display: t("s3_stat5_display", lang), label: t("s3_stat5", lang) },
    { value: 71, suffix: "%", label: t("s3_stat6", lang) },
  ];

  return (
    <section id="resultados" className="py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block rounded-full px-3.5 py-1 text-[12px] font-semibold uppercase"
            style={{
              background: "rgba(92,21,155,0.07)",
              border: "1px solid rgba(92,21,155,0.18)",
              color: "#5C159B",
              letterSpacing: "0.06em",
            }}
          >
            {t("s3_eyebrow", lang)}
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-display font-medium tracking-tight text-brand">
            {t("s3_titulo", lang)}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {t("s3_subtitulo", lang)}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div
                className="absolute -top-16 -right-16 size-40 rounded-full bg-brand-gradient opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
                aria-hidden
              />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-brand-gradient">
                  {s.display ? (
                    s.display
                  ) : (
                    <Counter
                      to={s.value!}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  )}
                </div>
                <div className="mt-4 text-sm font-medium text-foreground leading-snug">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-3xl md:text-5xl font-display font-medium tracking-tight">
            <span className="text-brand-gradient">{t("s3_closing", lang)}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
