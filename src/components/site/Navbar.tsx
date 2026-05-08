import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Package } from "lucide-react";

const links = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Soluções", href: "#problema" },
  { label: "Resultados", href: "#metricas" },
  { label: "Recursos", href: "#recursos" },
];

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
          ? "bg-brand/90 backdrop-blur-xl border-b border-brand-foreground/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-semibold text-brand-foreground">
            <span className="grid place-items-center size-8 rounded-lg bg-background text-brand shadow-glow">
              <Package className="size-4" />
            </span>
            <span className="text-base tracking-tight">Aftersale</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-brand-foreground/80 hover:text-brand-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#plataforma"
              className="text-sm px-4 py-2 rounded-full text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
            >
              Conhecer plataforma
            </a>
            <a
              href="#cta"
              className="text-sm px-4 py-2 rounded-full bg-background text-brand hover:opacity-95 transition-all shadow-elegant"
            >
              Agendar demonstração
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-brand-foreground"
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
