import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-brand-gradient p-10 lg:p-20 shadow-brand-strong">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent opacity-25 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-brand-glow opacity-40 blur-3xl mix-blend-overlay" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-brand-foreground leading-[1.1]">
              Sua troca e devolução é um sistema econômico. Trate-a assim.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-brand-foreground/85 leading-relaxed">
              Pare de medir por volume de chamados. Meça pelo impacto no seu P&amp;L.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-accent-glow hover:bg-accent-glow transition-all"
              >
                Agende uma Reunião
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center rounded-full border border-brand-foreground/30 bg-brand-foreground/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
              >
                Conheça Nossas Soluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
