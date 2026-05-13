import { Youtube, Linkedin } from "lucide-react";
import logoWhite from "@/assets/aftersale-logo-white.png";
import selo1 from "@/assets/selo-1.svg";
import selo2 from "@/assets/selo-2.png";

export function Footer() {
  return (
    <footer className="border-t-4 border-brand" style={{ backgroundColor: "#9012FF" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        {/* Selos */}
        <div className="mb-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
          <div className="bg-white rounded-xl p-3 flex items-center justify-center h-16">
            <img src={selo1} alt="Selo de parceiro" className="h-10 w-auto" />
          </div>
          <div className="bg-white rounded-xl p-3 flex items-center justify-center h-16">
            <img src={selo2} alt="Shopify Partner" className="h-10 w-auto" />
          </div>
        </div>

        <div className="h-px bg-white/15 mb-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logoWhite} alt="Aftersale" className="h-10 sm:h-12 md:h-14 w-auto" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white">
            <a href="#reposicionamento" className="hover:opacity-80 transition-opacity">Soluções</a>
            <a href="#metricas" className="hover:opacity-80 transition-opacity">Resultados</a>
            <a href="#produto" className="hover:opacity-80 transition-opacity">Produto</a>
            <a href="#depoimentos" className="hover:opacity-80 transition-opacity">Clientes</a>
            <a href="#historia" className="hover:opacity-80 transition-opacity">História</a>
            <a href="#cta" className="hover:opacity-80 transition-opacity">Contato</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex items-center justify-center size-10 rounded-full border border-white/30 text-white hover:bg-white hover:text-brand transition-colors"
            >
              <Youtube className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center size-10 rounded-full border border-white/30 text-white hover:bg-white hover:text-brand transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/80 text-center md:text-right">
          © {new Date().getFullYear()} Aftersale — ECCO SISTEMAS Cont. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
