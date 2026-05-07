import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 lg:p-16 shadow-elegant">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Sua troca e devolução é um sistema econômico. Trate-a assim.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Pare de medir por volume de chamados. Meça pelo impacto no seu P&amp;L. Agende uma conversa estratégica.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium shadow-elegant hover:shadow-glow transition-all"
              >
                Agende uma reunião
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#plataforma"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Conheça nossas soluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
