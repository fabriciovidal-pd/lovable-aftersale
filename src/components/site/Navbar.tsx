import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";

const langOptions: Lang[] = ["pt", "en", "es"];

function LanguageDropdown() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 px-3 py-1.5 text-xs font-medium text-brand hover:bg-brand/5 transition-colors"
      >
        <Globe className="size-3.5" />
        <span>{lang.toUpperCase()}</span>
        <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-32 rounded-xl border border-zinc-200 bg-white shadow-lg overflow-hidden z-50"
          >
            {langOptions.map((o) => (
              <button
                key={o}
                onClick={() => {
                  setLang(o);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-xs transition-colors ${
                  lang === o ? "bg-brand/5 text-brand" : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <span>{o.toUpperCase()}</span>
                {lang === o && <Check className="size-3" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav_trocas", lang), href: "#trocas" },
    { label: t("nav_resultados", lang), href: "#resultados" },
    { label: t("nav_produtos", lang), href: "#produtos" },
    { label: t("nav_clientes", lang), href: "#clientes" },
    { label: t("nav_historia", lang), href: "#historia" },
  ];

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
            <img
              src="/Aftersale_fundo_transparente_1.svg"
              alt="Aftersale"
              style={{
                height: 81,
                width: 192,
                objectFit: "contain",
              }}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-brand hover:opacity-80 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="LINK_AGENDAMENTO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full bg-brand text-white hover:bg-brand/90 transition-all shadow-elegant"
            >
              {t("btn_agendar", lang)}
            </a>
            <LanguageDropdown />
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-brand"
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
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a href="LINK_AGENDAMENTO" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full bg-brand-gradient text-brand-foreground text-center shadow-brand">
                  {t("btn_agendar", lang)}
                </a>
                <div className="pt-2 flex justify-center">
                  <LanguageDropdown />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
