import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { RecruitmentForm } from "@/components/recruitment-form";
import { SiteFooter } from "@/components/site-footer";
import { SuccessView } from "@/components/success-view";
import type { RecruitmentValues } from "@/lib/recruitment";

export const Route = createFileRoute("/")({ component: Home });

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxYBWoUGq8DVoJdl3CW43O9rOx1f9g73BSbmmKmpM2gIusMF2hDjgUvjG9OSc8KL45/exec";

function Home() {
  const [submitted, setSubmitted] = useState<RecruitmentValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(values: RecruitmentValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      console.log("Form submitted to Google Sheets:", values);
      setSubmitted(values);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page-bg">
      <Hero />
      <AnimatePresence>
        {submitted ? null : <Pillars />}
      </AnimatePresence>
      {submitted ? (
        <SuccessView values={submitted} onReset={() => setSubmitted(null)} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RecruitmentForm onSubmitted={handleSubmit} />
        </motion.div>
      )}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg"
        >
          {submitError}
        </motion.div>
      )}
      <SiteFooter />
    </main>
  );
}
