import { motion } from "framer-motion";
import {
  ShieldCheck,
  GitBranch,
  Plug,
  BarChart3,
  Gift,
  Lock,
  Repeat,
  MessageCircle,
  Wallet,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Autorização Inteligente",
    description:
      "Aprove ou bloqueie trocas com base em regras de negócio personalizáveis.",
  },
  {
    icon: GitBranch,
    title: "Fluxo Personalizável",
    description:
      "Monte o fluxo ideal para troca, devolução ou crédito — sem código.",
  },
  {
    icon: Plug,
    title: "Integração — API Simples e Flexível",
    description:
      "Conecte com qualquer plataforma de e-commerce em minutos.",
  },
  {
    icon: BarChart3,
    title: "Dashboards em Tempo Real",
    description:
      "Monitore volume, motivos e impacto financeiro das devoluções ao vivo.",
  },
  {
    icon: Gift,
    title: "Retenção Programada",
    description:
      "Ofertas de recompra com vouchers e cashback automatizados.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Dados protegidos com criptografia end-to-end e compliance PCI.",
  },
  {
    icon: Repeat,
    title: "Fluxo de Troca Contínua",
    description:
      "Transforme devoluções em novas vendas com sugestões automáticas de troca.",
  },
  {
    icon: MessageCircle,
    title: "Solicitação via WhatsApp e e-mail",
    description:
      "Cliente abre a troca pelo canal que preferir, sem atrito.",
  },
  {
    icon: Wallet,
    title: "Estorno e vale-compras automatizado",
    description:
      "Processe reembolsos e registre novas compras de forma automática.",
  },
  {
    icon: Truck,
    title: "Logística Reversa Integrada",
    description:
      "Etiquetas, rastreio e reembolso centralizados em uma única tela.",
  },
];

export function Features() {
  return (
    <section
      id="produtos"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#5C159B" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block rounded-full px-3.5 py-1 text-[12px] font-semibold uppercase text-white"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              letterSpacing: "0.06em",
            }}
          >
            Plataforma completa
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-white leading-[1.1]">
            Tudo que seu e-commerce precisa
          </h2>
          <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            Funcionalidades que se encaixam na sua operação desde o primeiro
            pedido de troca.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px rounded-2xl overflow-hidden bg-white/5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.06 }}
              className="group bg-white/[0.07] hover:bg-white/[0.13] transition-colors p-7 flex flex-col gap-3"
            >
              <div className="size-11 rounded-xl bg-white/10 grid place-items-center text-white">
                <f.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-semibold text-white leading-snug tracking-tight">
                {f.title}
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
