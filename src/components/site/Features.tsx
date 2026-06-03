import { motion } from "framer-motion";
import {
  ShieldCheck,
  GitBranch,
  Plug,
  BarChart3,
  Gift,
  Lock,
  Repeat,
  MessageCircle,
  Wallet,
  Truck,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export function Features() {
  const { lang } = useLang();

  const features = [
    { icon: ShieldCheck, title: t("s5_f1_titulo", lang), description: t("s5_f1_desc", lang) },
    { icon: GitBranch, title: t("s5_f2_titulo", lang), description: t("s5_f2_desc", lang) },
    { icon: Plug, title: t("s5_f3_titulo", lang), description: t("s5_f3_desc", lang) },
    { icon: BarChart3, title: t("s5_f4_titulo", lang), description: t("s5_f4_desc", lang) },
    { icon: Gift, title: t("s5_f5_titulo", lang), description: t("s5_f5_desc", lang) },
    { icon: Lock, title: t("s5_f6_titulo", lang), description: t("s5_f6_desc", lang) },
    { icon: Repeat, title: t("s5_f7_titulo", lang), description: t("s5_f7_desc", lang) },
    { icon: MessageCircle, title: t("s5_f8_titulo", lang), description: t("s5_f8_desc", lang) },
    { icon: Wallet, title: t("s5_f9_titulo", lang), description: t("s5_f9_desc", lang) },
    { icon: Truck, title: t("s5_f10_titulo", lang), description: t("s5_f10_desc", lang) },
  ];

  return (
    <section
      id="produtos"
      className="py-24 lg:py-32"
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
            {t("s5_eyebrow", lang)}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-white leading-[1.1]">
            {t("s5_titulo", lang)}
          </h2>
          <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            {t("s5_subtitulo", lang)}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px rounded-2xl overflow-hidden bg-white/5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.06 }}
              className="group bg-white/[0.07] hover:bg-white/[0.13] transition-colors p-7 flex flex-col gap-3"
            >
              <div className="size-11 rounded-xl bg-white/10 grid place-items-center text-white">
                <f.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-semibold text-white leading-snug tracking-tight">
                {f.title}
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
