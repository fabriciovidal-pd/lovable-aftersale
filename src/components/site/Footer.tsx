import { Linkedin, Youtube, ShieldCheck, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0512] text-brand-foreground border-t border-brand/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display font-medium text-2xl tracking-tight">
              AFTERSALE<span className="text-accent">.com</span>
            </div>
            <p className="mt-4 text-sm text-brand-foreground/70 max-w-sm leading-relaxed">
              A plataforma SaaS enterprise para pós-venda, trocas e devoluções inteligentes — orientada a IA, dados e governança.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-10 grid place-items-center rounded-full border border-brand-foreground/15 bg-brand-foreground/5 hover:bg-accent hover:text-brand-foreground hover:border-accent transition-all"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="size-10 grid place-items-center rounded-full border border-brand-foreground/15 bg-brand-foreground/5 hover:bg-accent hover:text-brand-foreground hover:border-accent transition-all"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.18em] text-brand-foreground/60">NAVEGAÇÃO</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-foreground/80">
              <li><a href="#solucoes" className="hover:text-accent transition-colors">Soluções</a></li>
              <li><a href="#resultados" className="hover:text-accent transition-colors">Resultados</a></li>
              <li><a href="#depoimentos" className="hover:text-accent transition-colors">Depoimentos</a></li>
              <li><a href="#rp" className="hover:text-accent transition-colors">R.P.</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-[0.18em] text-brand-foreground/60">CONTATO E LEGAL</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-foreground/80">
              <li><a href="#cta" className="hover:text-accent transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-foreground/15 bg-brand-foreground/5 px-3 py-1.5 text-xs">
                <ShieldCheck className="size-3.5 text-accent" />
                LGPD Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-foreground/15 bg-brand-foreground/5 px-3 py-1.5 text-xs">
                <Award className="size-3.5 text-accent" />
                Selo de Partners
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-brand-foreground/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-brand-foreground/60">
          <p>© 2026 Aftersale — ECO SISTEMAS Cont. Todos os direitos reservados.</p>
          <p>Feito no Brasil · Operação enterprise</p>
        </div>
      </div>
    </footer>
  );
}
