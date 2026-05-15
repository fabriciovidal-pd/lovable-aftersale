import selo1 from "@/assets/selo-1.svg";
import selo2 from "@/assets/selo-2.png";

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerColumns = [
  {
    title: "Navegação",
    links: [
      { label: "Trocas e Devoluções", href: "#trocas" },
      { label: "Resultados", href: "#resultados" },
      { label: "Produto", href: "#produtos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Clientes", href: "#clientes" },
      { label: "Nossa História", href: "#historia" },
    ],
  },
  {
    title: "Fale Conosco",
    links: [
      { label: "comercial@aftersale.com.br", href: "mailto:comercial@aftersale.com.br" },
      { label: "Agendar demonstração", href: "#cta" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#5C159B" }} className="px-6 lg:px-16 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 mb-12 items-start">
          {/* Logo + selos */}
          <div>
            <img
              src="/Aftersale_negativo.svg"
              alt="Aftersale"
              style={{ width: 320, height: "auto", objectFit: "contain", maxWidth: "100%" }}
            />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div
                className="rounded-xl p-2 flex items-center justify-center h-14"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <img src={selo1} alt="Selo de parceiro" className="h-9 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <div
                className="rounded-xl p-2 flex items-center justify-center h-14"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <img src={selo2} alt="Shopify Partner" className="h-9 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
            </div>
          </div>

          {/* Colunas de menus balanceadas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="transition-colors"
                        style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 400, textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="sm:col-span-3 flex items-center gap-4 mt-2" style={{ color: "rgba(255,255,255,0.7)" }}>
              <a href="#" aria-label="Instagram" className="transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}><IconInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}><IconLinkedin /></a>
              <a href="#" aria-label="X" className="transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}><IconX /></a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 24,
            marginTop: 16,
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          © {new Date().getFullYear()} Aftersale. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
