import { Check, Copy, MessageCircle, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  displayValue,
  FIELD_LABELS,
  formatApplicationMessage,
  GUILD_NAME,
  type RecruitmentValues,
} from "@/lib/recruitment";

const SUMMARY_KEYS: (keyof RecruitmentValues)[] = [
  "nome",
  "idade",
  "cidadeEstado",
  "nick",
  "idConta",
  "funcao",
  "patenteAtual",
  "experienciaCompetitiva",
  "experienciaDescricao",
  "tempoDisponivel",
  "horarioDisponivel",
];

type SuccessViewProps = {
  values: RecruitmentValues;
  onReset: () => void;
};

export function SuccessView({ values, onReset }: SuccessViewProps) {
  const message = formatApplicationMessage(values);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Candidatura copiada");
    } catch {
      toast.error("Não foi possível copiar. Selecione o texto e copie.");
    }
  }

  return (
    <section id="formulario" className="mx-auto w-full max-w-xl px-5 pb-20 pt-10">
      <div className="section-card text-center latam-card-fade-in">
        <div className="success-mark mx-auto">
          <Check className="size-7" strokeWidth={2.25} />
        </div>
        <h2 className="font-display mt-5 text-4xl tracking-wide text-silver text-balance">
          Candidatura registrada
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-normal text-muted-foreground text-pretty">
          A liderança da {GUILD_NAME} vai analisar seu perfil e entrar em contato.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={copyMessage}>
            <Copy className="size-4" />
            Copiar texto
          </Button>
        </div>
      </div>

      <dl className="summary-list mt-5 latam-card-fade-in" style={{ animationDelay: "100ms" }}>
        {SUMMARY_KEYS.filter(key => key !== 'experienciaDescricao' || values.experienciaDescricao).map((key) => (
          <div key={key} className="summary-row">
            <dt>{FIELD_LABELS[key]}</dt>
            <dd>{displayValue(key, values)}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex justify-center latam-card-fade-in" style={{ animationDelay: "200ms" }}>
        <Button variant="ghost" onClick={onReset}>
          <RotateCcw className="size-4" />
          Enviar outra candidatura
        </Button>
      </div>
    </section>
  );
}
