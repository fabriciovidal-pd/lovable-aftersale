import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "R.P.", href: "#rp" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("PT");

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
          ? "bg-brand/95 backdrop-blur-xl border-b border-brand-foreground/10 shadow-brand"
          : "bg-brand/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-brand-foreground">
            <span className="text-lg tracking-tight">AFTERSALE<span className="text-accent">.com</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-foreground/85 hover:text-brand-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-full text-brand-foreground/85 hover:text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
                aria-label="Idioma"
              >
                <Globe className="size-4" />
                {lang}
                <ChevronDown className="size-3.5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute right-0 mt-2 min-w-[120px] rounded-xl border border-border bg-card shadow-elegant overflow-hidden"
                  >
                    {["PT", "ES", "EN"].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-sm text-left text-foreground hover:bg-surface transition-colors"
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="#cta"
              className="text-sm font-medium px-4 py-2 rounded-full text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
            >
              Falar com Especialista
            </a>
            <a
              href="#cta"
              className="text-sm font-semibold px-4 py-2 rounded-full bg-accent text-brand-foreground hover:bg-accent-glow shadow-elegant hover:shadow-accent-glow transition-all"
            >
              Agende uma demonstração
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-brand-foreground"
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
            className="lg:hidden border-t border-brand-foreground/10 bg-brand"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-brand-foreground/85 hover:text-brand-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {["PT", "ES", "EN"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-full text-xs ${lang === l ? "bg-accent text-brand-foreground" : "border border-brand-foreground/20 text-brand-foreground/80"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <a href="#cta" className="text-sm px-4 py-2 rounded-full border border-brand-foreground/20 text-brand-foreground text-center">
                  Falar com Especialista
                </a>
                <a href="#cta" className="text-sm px-4 py-2 rounded-full bg-accent text-brand-foreground text-center font-semibold shadow-elegant">
                  Agende uma demonstração
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
