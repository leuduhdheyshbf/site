import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/site-footer";
import { RecruitmentForm } from "@/components/recruitment-form";
import { SuccessView } from "@/components/success-view";
import type { RecruitmentValues } from "@/lib/recruitment";

export const Route = createFileRoute("/candidatura")({ component: Candidatura });

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw0ht83Y1DOMCS9woV8iXKK9K94Toy6ohIKSn3WN3WNkvOXcnyCK_bvSPNJcT2ZSSNy/exec";

function Candidatura() {
  const [submitted, setSubmitted] = useState<RecruitmentValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(values: RecruitmentValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const payload: RecruitmentValues = {
        nome: values.nome,
        idade: values.idade,
        nick: values.nick,
        idConta: values.idConta,
        cidadeEstado: values.cidadeEstado,
        funcao: values.funcao,
        patenteAtual: values.patenteAtual,
        experienciaCompetitiva: values.experienciaCompetitiva,
        experienciaDescricao: values.experienciaDescricao ?? "",
        tempoDisponivel: values.tempoDisponivel,
        horarioDisponivel: values.horarioDisponivel,
      };

      console.log("VALORES ENVIADOS:", payload);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
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
    <main className="page-bg min-h-screen">
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
          className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50"
        >
          {submitError}
        </motion.div>
      )}
      <SiteFooter />
    </main>
  );
}
