import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Metrics } from "@/components/site/Metrics";
import { Logos } from "@/components/site/Logos";
import { Timeline } from "@/components/site/Timeline";
import { CTA } from "@/components/site/CTA";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aftersale — Plataforma de pós-venda, trocas e devoluções" },
      {
        name: "description",
        content:
          "Plataforma SaaS de pós-venda para e-commerce e varejo. Automatize trocas, devoluções e logística reversa com experiência premium para o cliente.",
      },
      { property: "og:title", content: "Aftersale — Pós-venda inteligente" },
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
        <Problem />
        <Metrics />
        <Features />
        <Logos />
        <Timeline />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
