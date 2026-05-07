import { motion } from "framer-motion";
import { AlertTriangle, Clock, Workflow, HeartHandshake, BarChart3, ShieldCheck } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Processos manuais e propensos a erros", desc: "Planilhas, e-mails e operações desconectadas geram retrabalho e custos invisíveis." },
  { icon: Clock, title: "Tempo médio de resolução elevado", desc: "Cada hora a mais de espera reduz a probabilidade de recompra do cliente." },
  { icon: Workflow, title: "Logística reversa fragmentada", desc: "Sem rastreabilidade ponta a ponta, é impossível otimizar fluxos e custos." },
  { icon: HeartHandshake, title: "Experiência inconsistente", desc: "Atrito no pós-venda destrói NPS, recompra e lifetime value." },
  { icon: BarChart3, title: "Falta de dados acionáveis", desc: "Sem visibilidade de causas raiz, o problema se repete a cada ciclo." },
  { icon: ShieldCheck, title: "Compliance e auditoria frágeis", desc: "Operações reativas expõem a marca a riscos regulatórios e financeiros." },
];

export function Problem() {
  return (
    <section id="problema" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand">O reposicionamento do pós-venda</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            De centro de custo a motor de experiência do cliente.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Marcas líderes deixaram de tratar trocas e devoluções como problema operacional. Hoje, é o ponto de contato decisivo para fidelizar e crescer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-card p-8 hover:bg-surface transition-colors"
            >
              <div className="size-10 rounded-lg bg-brand-soft border border-brand/20 grid place-items-center text-brand group-hover:bg-brand-gradient group-hover:text-brand-foreground group-hover:border-brand transition-all">
                <p.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
