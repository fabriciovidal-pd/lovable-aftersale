import { motion } from "framer-motion";

const clients = [
  { name: "Tramontina", color: "#C8102E" },
  { name: "Oscar Calçados", color: "#1E3A8A" },
  { name: "Polishop", color: "#E11D48" },
  { name: "Centauro", color: "#FBBF24" },
  { name: "Riachuelo", color: "#0EA5E9" },
  { name: "Marisa", color: "#DB2777" },
  { name: "Pernambucanas", color: "#16A34A" },
  { name: "Hering", color: "#2563EB" },
  { name: "Reserva", color: "#0F172A" },
  { name: "Track&Field", color: "#16A34A" },
  { name: "Animale", color: "#7C3AED" },
  { name: "Farm", color: "#F59E0B" },
];

export function Logos() {
  return (
    <section className="relative py-24 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand tracking-wider">
            CLIENTES
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-strong">
            +400 clientes confiam
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            As maiores marcas do Brasil transformaram sua operação de troca e devolução com a Aftersale.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group h-24 rounded-2xl border border-border bg-card grid place-items-center px-4 hover:border-brand/30 hover:shadow-brand transition-all"
            >
              <span
                className="font-display font-bold text-base tracking-tight text-center transition-colors"
                style={{ color: c.color }}
              >
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
