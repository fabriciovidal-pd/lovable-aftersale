import { motion } from "framer-motion";

const clients = [
  "Tramontina",
  "Oscar Calçados",
  "Polishop",
  "Centauro",
  "Riachuelo",
  "Marisa",
  "Pernambucanas",
  "Hering",
  "Reserva",
  "Track&Field",
  "Animale",
  "Farm",
];

export function Logos() {
  return (
    <section id="clientes" className="relative py-24 lg:py-32 bg-brand-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient text-brand-foreground px-3 py-1 text-xs font-medium tracking-wider shadow-brand">CLIENTES</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-brand">
            +400 clientes confiam
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            As maiores marcas do Brasil transformaram sua operação de troca e devolução com a Aftersale.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="bg-card hover:bg-surface transition-colors duration-300 h-24 grid place-items-center px-4"
            >
              <span className="font-display font-semibold text-foreground/80 text-base tracking-tight text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
