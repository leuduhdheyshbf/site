import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="page-bg">
      <Hero />
      <Pillars />
      
      {/* Seção de Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center justify-center px-5 pb-20 pt-10"
      >
        <Link
          to="/candidatura"
          className="cta-jump mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-black shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl hover:scale-105"
        >
          <span>Preencher Candidatura</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Clique acima para iniciar seu processo de recrutamento
        </p>
      </motion.div>
      
      <SiteFooter />
    </main>
  );
}
