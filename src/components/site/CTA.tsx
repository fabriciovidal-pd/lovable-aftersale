export function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-brand-gradient p-10 lg:p-16 shadow-brand-strong">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent-gradient opacity-30 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-brand-gradient opacity-40 blur-3xl mix-blend-overlay" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-foreground leading-tight">
              Trocas e devoluções fazem parte de um sistema econômico, saiba como fazer bom uso dele.
            </h2>
            <p className="mt-5 text-lg text-brand-foreground/80">
              Pare de medir por volume de chamados, meça pelo impacto no seu P&amp;L. Agende uma conversa estratégica.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-background text-brand px-5 py-3 text-sm font-medium shadow-elegant hover:shadow-accent-glow transition-all"
              >
                Agende uma reunião
              </a>
              <a
                href="#plataforma"
                className="inline-flex items-center justify-center rounded-full border-2 border-accent bg-transparent px-5 py-3 text-sm font-medium text-brand-foreground hover:bg-accent/10 transition-colors border-slate-100 border-solid"
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
