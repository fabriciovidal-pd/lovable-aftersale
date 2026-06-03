import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export function CTA() {
  const { lang } = useLang();
  return (
    <section id="cta" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-brand-gradient p-10 lg:p-16 shadow-brand-strong">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent-gradient opacity-30 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-brand-gradient opacity-40 blur-3xl mix-blend-overlay" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-foreground leading-tight">
              {t("cta_titulo", lang)}
            </h2>
            <p className="mt-5 text-lg text-brand-foreground/80">
              {t("cta_subtitulo", lang)}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="LINK_AGENDAMENTO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background text-brand px-5 py-3 text-sm font-medium shadow-elegant hover:shadow-accent-glow transition-all"
              >
                {t("cta_btn", lang)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
