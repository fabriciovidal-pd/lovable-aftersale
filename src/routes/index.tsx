import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Features } from "@/components/site/Features";
import { Metrics } from "@/components/site/Metrics";
import { Logos } from "@/components/site/Logos";
import { Testimonials } from "@/components/site/Testimonials";
import { Timeline } from "@/components/site/Timeline";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aftersale — Plataforma enterprise de pós-venda, trocas e devoluções" },
      {
        name: "description",
        content:
          "Aftersale é a plataforma SaaS enterprise IA-First para pós-venda, trocas e devoluções inteligentes. Líder no Brasil desde 2017, com +400 clientes e +6M reversas processadas.",
      },
      { property: "og:title", content: "Aftersale — Pós-venda inteligente IA-First" },
      {
        property: "og:description",
        content: "Reduza custo, proteja receita e transforme trocas em fidelização.",
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
        <Problem />
        <Features />
        <Metrics />
        <Logos />
        <Testimonials />
        <Timeline />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
