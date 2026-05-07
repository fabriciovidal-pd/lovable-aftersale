import { Package } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-8 rounded-lg bg-brand-gradient text-brand-foreground">
              <Package className="size-4" />
            </span>
            <span className="font-display font-semibold text-foreground">Reversa</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="#plataforma" className="hover:text-foreground transition-colors">Plataforma</a>
            <a href="#problema" className="hover:text-foreground transition-colors">Soluções</a>
            <a href="#metricas" className="hover:text-foreground transition-colors">Resultados</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Contato</a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Reversa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
