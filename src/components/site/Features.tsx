import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GitBranch,
  Plug,
  BarChart3,
  Repeat,
  ShieldCheck,
  Ruler,
  MessageCircle,
  Wallet,
  Truck,
} from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Portal de Autoatendimento", desc: "Experiência self-service que resolve sem fricção e em poucos cliques." },
  { icon: GitBranch, title: "Fluxos Customizáveis", desc: "Regras por SKU, categoria, valor e perfil — sem dependência de TI." },
  { icon: Plug, title: "Integrações — API Robusta e Flexível", desc: "Conecte ERPs, OMS, marketplaces e gateways em poucas horas." },
  { icon: BarChart3, title: "Relatórios em Tempo Real", desc: "Visão executiva da operação, causas raiz e impacto financeiro." },
  { icon: Repeat, title: "Retenção Programada", desc: "Jornadas de retenção que convertem reembolso em troca ou crédito." },
  { icon: ShieldCheck, title: "Security First", desc: "Governança, LGPD, auditoria e SLAs corporativos por padrão." },
  { icon: Ruler, title: "Troca de Tamanho Facilitada", desc: "Fluxo simplificado que reduz exceções e aumenta a recompra." },
  { icon: MessageCircle, title: "Jornada de Devolução via WhatsApp", desc: "Notificações conversacionais com identidade da sua marca." },
  { icon: Wallet, title: "Estorno e Vale-Compras Automatizado", desc: "Liquidação financeira sem intervenção manual do atendimento." },
  { icon: Truck, title: "Logística Inteligente", desc: "Autonomia para o cliente escolher entre coleta, ponto e leilão de frete." },
];

export function Features() {
  return (
    <section id="plataforma" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand tracking-wider">
            PLATAFORMA COMPLETA
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-brand-strong leading-[1.1]">
            Tudo que seu e-commerce precisa
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Automatize a operação de pós-compra e transforme cada interação em oportunidade de fidelização.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="size-11 rounded-xl bg-brand-soft border border-brand/15 grid place-items-center text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-all">
                <f.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-display font-medium tracking-tight text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="absolute -bottom-px left-7 right-7 h-px bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-2xl md:text-3xl font-display font-medium text-brand-strong max-w-4xl mx-auto leading-snug">
          As maiores marcas do Brasil transformaram sua operação de troca e devolução com a Aftersale.
        </p>
      </div>
    </section>
  );
}
