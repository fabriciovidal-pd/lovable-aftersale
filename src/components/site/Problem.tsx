import { motion } from "framer-motion";
import { Package, Zap, BarChart3, Coins } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export function Problem() {
  const { lang } = useLang();

  const items = [
    { icon: Package, titulo: t("s2_card1_titulo", lang), desc: t("s2_card1_desc", lang) },
    { icon: Zap, titulo: t("s2_card2_titulo", lang), desc: t("s2_card2_desc", lang) },
    { icon: BarChart3, titulo: t("s2_card3_titulo", lang), desc: t("s2_card3_desc", lang) },
    { icon: Coins, titulo: t("s2_card4_titulo", lang), desc: t("s2_card4_desc", lang) },
  ];

  return (
    <section
      id="trocas"
      className="py-14 lg:py-16"
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
            {t("s2_eyebrow", lang)}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-white leading-[1.1]">
            {t("s2_titulo", lang)}
          </h2>
          <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            {t("s2_subtitulo", lang)}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/5">
          {items.map((c, i) => (
            <motion.article
              key={c.titulo}
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
                  {c.titulo}
                </h3>
              </div>
              <p
                className="text-[14px] text-white/60 leading-relaxed"
                style={{ paddingLeft: 48, marginTop: 10 }}
              >
                {c.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
