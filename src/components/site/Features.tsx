import { motion } from "framer-motion";
import {
  Smartphone,
  Workflow,
  Plug,
  BarChart3,
  Gift,
  ShieldCheck,
  Ruler,
  MessageCircle,
  Wallet,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Portal de Autoatendimento",
    desc: "Interface mobile e desktop onde o cliente inicia trocas e devoluções 24/7.",
  },
  {
    icon: Workflow,
    title: "Fluxos Customizáveis",
    desc: "Crie regras, jornadas e decisões sob medida para políticas, fretes e canais.",
  },
  {
    icon: Plug,
    title: "Integrações — API Robusta e Flexível",
    desc: "Conecte com ERPs, plataformas de e-commerce, gateways e APIs diversas.",
  },
  {
    icon: BarChart3,
    title: "Relatórios em Tempo Real",
    desc: "Indicadores de desempenho, motivos e benchmarking para decisões estratégicas.",
  },
  {
    icon: Gift,
    title: "Retenção Programada",
    desc: "Ofertas de recompra com vouchers, cashback e incentivos de retenção automatizados.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Criptografia de dados, conformidade com LGPD e auditoria completa de interações.",
  },
  {
    icon: Ruler,
    title: "Troca de Tamanho facilitada",
    desc: "Experiência fluída e intuitiva para clientes que só precisam ajustar o tamanho do produto.",
  },
  {
    icon: MessageCircle,
    title: "Jornada de devolução via Whatsapp",
    desc: "Seu cliente resolve tudo pelo canal que ele já usa — simples, rápido e com alta taxa de engajamento.",
  },
  {
    icon: Wallet,
    title: "Estorno e vale-compras automatizado",
    desc: "Ofereça opções ágeis de reembolso ou crédito na loja, aumentando a confiança do cliente.",
  },
  {
    icon: Truck,
    title: "Logística Inteligente com autonomia para o cliente",
    desc: "Automatize a logística reversa, sem fricção e sem depender do atendimento.",
  },
];

export function Features() {
  return (
    <section id="produto" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-medium tracking-[0.2em] text-brand">
            PLATAFORMA COMPLETA
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-display font-medium tracking-tight text-brand">
            Tudo que seu e-commerce precisa
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Automatize a operação de pós-compra e transforme cada interação em oportunidade de fidelização.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-11 rounded-xl bg-brand-soft border border-brand/15 grid place-items-center text-brand group-hover:bg-brand-gradient group-hover:text-brand-foreground group-hover:border-transparent transition-all">
                <f.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground leading-snug">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
