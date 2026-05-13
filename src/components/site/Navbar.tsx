import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/aftersale-logo.png";

const links = [
  { label: "Soluções", href: "#reposicionamento" },
  { label: "Resultados", href: "#metricas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "R.P.", href: "#historia" },
];

function LanguageSelector({ className = "" }: { className?: string }) {
  const [lang, setLang] = useState<"PT" | "ES" | "EN">("PT");
  const options: Array<"PT" | "ES" | "EN"> = ["PT", "ES", "EN"];
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-brand/30 px-1 py-1 text-xs ${className}`}
    >
      <Globe className="size-3.5 text-brand ml-1.5" />
      {options.map((o) => (
        <button
          key={o}
          onClick={() => setLang(o)}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            lang === o
              ? "bg-brand text-white"
              : "text-brand hover:bg-brand/5"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <a href="#" className="flex items-center font-display font-semibold text-brand">
            <img src={logo} alt="Aftersale" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-brand hover:opacity-80 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#plataforma"
              className="text-sm px-4 py-2 rounded-full border-2 border-brand text-brand hover:bg-brand/5 transition-colors"
            >
              Conhecer plataforma
            </a>
            <a
              href="#cta"
              className="text-sm px-4 py-2 rounded-full bg-brand text-white hover:bg-brand/90 transition-all shadow-elegant"
            >
              Agendar demonstração
            </a>
            <LanguageSelector />
          </div>

          <button
            className="md:hidden p-2 rounded-md text-brand"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a href="#plataforma" className="text-sm px-4 py-2 rounded-full bg-secondary text-center">
                  Conhecer plataforma
                </a>
                <a href="#cta" className="text-sm px-4 py-2 rounded-full bg-brand-gradient text-brand-foreground text-center shadow-brand">
                  Agendar demonstração
                </a>
                <div className="pt-2 flex justify-center">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
