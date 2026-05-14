import logo from "@/assets/aftersale-logo.png";
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

const columns = [
  { title: "Empresa", links: ["Sobre nós", "Contato", "Privacidade", "Termos"] },
  { title: "Produto", links: ["Integrações", "API", "Status", "Changelog"] },
  { title: "Recursos", links: ["Blog", "Suporte", "Comunidade", "Parceiros"] },
  { title: "Aftersale para", links: ["E-commerce", "Marcas", "Operadores"] },
];

export function Footer() {
  return (
    <footer style={{ background: "#FFFFFF", borderTop: "1px solid #E5E5E5" }} className="px-6 lg:px-16 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[260px_repeat(4,1fr)] gap-10 mb-12">
          {/* Coluna logo + sociais + selos */}
          <div>
            <img
              src={logo}
              alt="Aftersale"
              style={{ height: 56, width: "auto", objectFit: "contain", background: "transparent", mixBlendMode: "multiply" }}
            />
            <div className="mt-6 flex items-center gap-4" style={{ color: "#666666" }}>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-[#5C159B]"><IconInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[#5C159B]"><IconLinkedin /></a>
              <a href="#" aria-label="X" className="transition-colors hover:text-[#5C159B]"><IconX /></a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="bg-white rounded-xl p-2 flex items-center justify-center h-14" style={{ border: "1px solid #E5E5E5" }}>
                <img src={selo1} alt="Selo de parceiro" className="h-9 w-auto" />
              </div>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center h-14" style={{ border: "1px solid #E5E5E5" }}>
                <img src={selo2} alt="Shopify Partner" className="h-9 w-auto" />
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#999999",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="transition-colors"
                      style={{ fontSize: 14, color: "#333333", lineHeight: 2, textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#5C159B")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#333333")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #E5E5E5",
            paddingTop: 24,
            marginTop: 16,
            fontSize: 13,
            color: "#999999",
          }}
        >
          © {new Date().getFullYear()} Aftersale. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
