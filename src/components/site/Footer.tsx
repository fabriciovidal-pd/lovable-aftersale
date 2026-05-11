import logoWhite from "@/assets/aftersale-logo-white.png";

export function Footer() {
  return (
    <footer className="border-t-4 border-brand" style={{ backgroundColor: "#9012FF" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logoWhite} alt="Aftersale" className="h-9 w-auto" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white">
            <a href="#plataforma" className="hover:opacity-80 transition-opacity">Plataforma</a>
            <a href="#clientes" className="hover:opacity-80 transition-opacity">Clientes</a>
            <a href="#depoimentos" className="hover:opacity-80 transition-opacity">Depoimentos</a>
            <a href="#historia" className="hover:opacity-80 transition-opacity">História</a>
            <a href="#cta" className="hover:opacity-80 transition-opacity">Contato</a>
          </div>
          <p className="text-xs text-white text-right">
            © {new Date().getFullYear()} Aftersale — ECCO SISTEMAS Cont.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
