import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { RecruitmentForm } from "@/components/recruitment-form";
import { SiteFooter } from "@/components/site-footer";
import { SuccessView } from "@/components/success-view";
import type { RecruitmentValues } from "@/lib/recruitment";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [submitted, setSubmitted] = useState<RecruitmentValues | null>(null);

  async function handleSubmit(values: RecruitmentValues) {
    // Send to Google Sheets via webhook
    try {
      // Replace with your Google Apps Script Web App URL
      const GOOGLE_SHEETS_WEBHOOK_URL = ""; // Set your webhook URL here
      
      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      }
      
      // Also log to console for debugging
      console.log("Form submitted:", values);
      
      setSubmitted(values);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitted(values);
    }
  }

  return (
    <main className="page-bg">
      <Hero />
      {submitted ? null : <Pillars />}
      {submitted ? (
        <SuccessView values={submitted} onReset={() => setSubmitted(null)} />
      ) : (
        <RecruitmentForm onSubmitted={handleSubmit} />
      )}
      <SiteFooter />
    </main>
  );
}
