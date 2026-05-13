import { Youtube, Linkedin, ShieldCheck, Award, BadgeCheck } from "lucide-react";
import logoWhite from "@/assets/aftersale-logo-white.png";

export function Footer() {
  return (
    <footer className="border-t-4 border-brand" style={{ backgroundColor: "#9012FF" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        {/* Selos de parceiros */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Selos de parceiros
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[ShieldCheck, Award, BadgeCheck, ShieldCheck, Award].map((Icon, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white/80 text-xs hover:bg-white/10 transition-colors"
              >
                <Icon className="size-4" />
                <span>Parceiro {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/15 mb-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logoWhite} alt="Aftersale" className="h-10 sm:h-12 md:h-14 w-auto" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white">
            <a href="#plataforma" className="hover:opacity-80 transition-opacity">Plataforma</a>
            <a href="#clientes" className="hover:opacity-80 transition-opacity">Clientes</a>
            <a href="#depoimentos" className="hover:opacity-80 transition-opacity">Depoimentos</a>
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
