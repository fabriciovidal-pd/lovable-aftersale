import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Metrics } from "@/components/site/Metrics";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reversa — Plataforma de pós-venda, trocas e devoluções" },
      {
        name: "description",
        content:
          "Plataforma SaaS de pós-venda para e-commerce e varejo. Automatize trocas, devoluções e logística reversa com experiência premium para o cliente.",
      },
      { property: "og:title", content: "Reversa — Pós-venda inteligente" },
      {
        property: "og:description",
        content: "Transforme trocas e devoluções em fidelização. Agende uma demonstração.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div id="plataforma" />
        <Problem />
        <Metrics />
        <div id="recursos" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
