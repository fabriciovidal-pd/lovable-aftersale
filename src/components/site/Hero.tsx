import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import dashboard from "@/assets/dashboard-new.png";

const pillStyle = {
  display: "inline-block",
  background: "rgba(92,21,155,0.07)",
  border: "1px solid rgba(92,21,155,0.18)",
  borderRadius: "999px",
  padding: "4px 14px",
  fontSize: 12,
  fontWeight: 600,
  color: "#5C159B",
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
};

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,520px)_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy — left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-brand" />
                <Sparkles className="size-3.5 text-brand" />
                <span className="text-xs font-medium text-brand">
                  Líder em trocas e devoluções desde 2017
                </span>
              </span>
              <span style={pillStyle}>+6M reversas processadas</span>
              <span style={pillStyle}>IA-First</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight leading-[1.05] text-brand"
            >
              Reduza o custo de trocas e devoluções e{" "}
              <span className="bg-gradient-to-r from-brand to-[#AD7AFC] bg-clip-text text-transparent">
                proteja a receita
              </span>{" "}
              da sua operação
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-lg text-zinc-600 leading-relaxed"
            >
              Reduzir devoluções começa antes do produto voltar. Trabalhamos para evitar ocorrências desnecessárias, diminuindo custos e aumentando a eficiência da operação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-brand text-white px-6 py-3.5 text-sm font-semibold shadow-elegant hover:bg-brand/90 hover:-translate-y-0.5 hover:shadow-brand transition-all"
              >
                Agendar demonstração
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 px-5 py-3 text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                Conhecer plataforma
              </a>
            </motion.div>

          </div>

          {/* Product screenshot — right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-brand/20 via-[#AD7AFC]/15 to-transparent blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-elegant p-2">
              <img
                src={dashboard}
                alt="Painel da plataforma de pós-venda Aftersale"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-zinc-100 flex flex-wrap items-center gap-x-10 gap-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-400 whitespace-nowrap">
            Marcas que confiam na Aftersale
          </span>
          {["Samsung", "Hugo Boss", "Lofty", "Farm", "Ri Happy"].map((co) => (
            <span
              key={co}
              className="text-sm font-semibold text-zinc-300 tracking-tight"
            >
              {co}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
