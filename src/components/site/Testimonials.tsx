import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Trabalhar com a Aftersale com o software Troque Fácil foi um grande passo na automação da operação de e-commerce Tramontina Store. O time da Aftersale entrega apoio acima da média, agilidade, solução aos nossos negócios e confiança.",
    name: "Marceli Oliani",
    role: "Coordenadora de Operações e Tecnologia",
    company: "Tramontina Store",
  },
  {
    quote:
      "Com a implantação da ferramenta, em qualquer lugar, você faz 100 atendimentos manuais por hora para conseguir fazer com outro fornecedor. Quer ganhar agilidade e facilidade de comunicação com seu cliente? Ative a Aftersale.",
    name: "Virlane Castro",
    role: "Owner Calçados",
    company: "Oscar Calçados",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 bg-brand-foreground/10 backdrop-blur px-3 py-1 text-brand-foreground/80 text-2xl">DEPOIMENTOS</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Nossos parceiros recomendam
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-brand/15 bg-card p-8 lg:p-10 shadow-card hover:shadow-brand transition-all"
            >
              <div className="absolute top-0 left-8 right-8 h-1 bg-brand-gradient rounded-b-full" aria-hidden />
              <Quote className="size-10 text-brand" />
              <blockquote className="mt-6 text-lg text-foreground leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
                <div className="text-sm font-medium text-brand mt-1">{t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
