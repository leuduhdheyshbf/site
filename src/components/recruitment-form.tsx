import { zodResolver } from "@hookform/resolvers/zod";
import { Gamepad2, Map, Clock, Trophy, Users, Send, MessageCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Field } from "@/components/field";
import { SectionCard } from "@/components/section-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OptionCards } from "@/components/ui/option-cards";
import { SelectField } from "@/components/ui/select-field";
import { Textarea } from "@/components/ui/textarea";
import {
  defaultValues,
  FUNCOES,
  PATENTES_LATAM,
  SIM_NAO,
  HORAS_DISPONIBILIDADE,
  recruitmentSchema,
  type RecruitmentInput,
  type RecruitmentValues,
} from "@/lib/recruitment";

type RecruitmentFormProps = {
  onSubmitted: (values: RecruitmentValues) => void;
};

export function RecruitmentForm({ onSubmitted }: RecruitmentFormProps) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RecruitmentInput, unknown, RecruitmentValues>({
    resolver: zodResolver(recruitmentSchema),
    defaultValues,
    mode: "onSubmit",
  });

  function onInvalid() {
    requestAnimationFrame(() => {
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  return (
    <form
      id="formulario"
      className="mx-auto flex w-full max-w-xl flex-col gap-5 px-5 pb-20 pt-10"
      onSubmit={handleSubmit(onSubmitted, onInvalid)}
      noValidate
    >
      {/* Header do Formulário */}
      <div className="mb-4 text-center">
        <h2 className="font-display text-3xl tracking-wide text-silver">
          FORMULÁRIO DE RECRUTAMENTO
        </h2>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">
          A <strong>LATAM</strong> está iniciando um processo de recrutamento para novos jogadores.
          <br />
          Buscamos pessoas ativas, comprometidas e com vontade de evoluir junto com à equipe.
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent">
          Foco total na partida sem ter medo de perder.
        </p>
      </div>

      <SectionCard 
        id="dados" 
        eyebrow="01" 
        title="INFORMAÇÕES DO JOGADOR" 
        icon={Users}
        className="latam-card latam-card-fade-in"
      >
        <Field number={1} label="Nome" htmlFor="nome" error={errors.nome?.message}>
          <Input
            id="nome"
            autoComplete="name"
            placeholder="Seu nome completo"
            {...register("nome")}
          />
        </Field>

        <Field number={2} label="Idade" htmlFor="idade" error={errors.idade?.message}>
          <Input
            id="idade"
            inputMode="numeric"
            maxLength={3}
            placeholder="Sua idade"
            {...register("idade")}
          />
        </Field>

        <Field number={3} label="Nickname do jogo" htmlFor="nick" error={errors.nick?.message}>
          <Input
            id="nick"
            placeholder="Seu nickname no jogo"
            {...register("nick")}
          />
        </Field>

        <Field number={4} label="ID da conta" htmlFor="idConta" error={errors.idConta?.message}>
          <Input
            id="idConta"
            inputMode="numeric"
            maxLength={15}
            placeholder="ID da sua conta"
            {...register("idConta", {
              onChange: (event) => {
                const digits = event.target.value.replace(/\D/g, "").slice(0, 15);
                setValue("idConta", digits, { shouldValidate: false });
              },
            })}
          />
        </Field>

        <Field number={5} label="Cidade/Estado" htmlFor="cidadeEstado" error={errors.cidadeEstado?.message}>
          <Input
            id="cidadeEstado"
            placeholder="Ex: São Paulo - SP"
            {...register("cidadeEstado")}
          />
        </Field>
      </SectionCard>

      <SectionCard 
        id="perfil" 
        eyebrow="02" 
        title="PERFIL NO JOGO" 
        icon={Trophy}
        className="latam-card latam-card-fade-in"
        style={{ animationDelay: "100ms" }}
      >
        <Field
          number={6}
          label="Qual sua principal função?"
          htmlFor="funcao"
          error={errors.funcao?.message}
        >
          <Controller
            name="funcao"
            control={control}
            render={({ field }) => (
              <OptionCards
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                options={FUNCOES}
              />
            )}
          />
        </Field>

        <Field
          number={7}
          label="Qual sua patente atual?"
          htmlFor="patenteAtual"
          error={errors.patenteAtual?.message}
        >
          <Controller
            name="patenteAtual"
            control={control}
            render={({ field }) => (
              <OptionCards
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                options={PATENTES_LATAM}
              />
            )}
          />
        </Field>

        <Field number={8} label="Já teve experiência em competitivo, guildas ou campeonatos?" error={errors.experienciaCompetitiva?.message}>
          <Controller
            name="experienciaCompetitiva"
            control={control}
            render={({ field }) => (
              <OptionCards
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                options={SIM_NAO}
              />
            )}
          />
        </Field>

        <Field
          number={9}
          label="Se sim, conte brevemente sua experiência."
          htmlFor="experienciaDescricao"
          error={errors.experienciaDescricao?.message}
        >
          <Textarea
            id="experienciaDescricao"
            rows={4}
            maxLength={800}
            placeholder="Conte sobre suas experiências em competições, guildas ou campeonatos..."
            {...register("experienciaDescricao")}
          />
        </Field>
      </SectionCard>

      <SectionCard 
        id="disponibilidade" 
        eyebrow="03" 
        title="DISPONIBILIDADE" 
        icon={Clock}
        className="latam-card latam-card-fade-in"
        style={{ animationDelay: "200ms" }}
      >
        <Field 
          number={10} 
          label="Quanto tempo você costuma ficar disponível para jogar por dia?" 
          error={errors.tempoDisponivel?.message}
        >
          <Controller
            name="tempoDisponivel"
            control={control}
            render={({ field }) => (
              <OptionCards
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                options={HORAS_DISPONIBILIDADE}
                columns="stack"
              />
            )}
          />
        </Field>

        <Field 
          number={11} 
          label="Qual seu horário normalmente disponível para jogar?" 
          htmlFor="horarioDisponivel"
          error={errors.horarioDisponivel?.message}
        >
          <Input
            id="horarioDisponivel"
            placeholder="Ex: 19h às 23h"
            {...register("horarioDisponivel")}
          />
        </Field>
      </SectionCard>

      <div className="submit-panel latam-submit-panel latam-card-fade-in" style={{ animationDelay: "300ms" }}>
        <Button type="submit" size="lg" className="w-full latam-btn-3d">
          <Send className="size-4" />
          Enviar candidatura
        </Button>
        <p className="mt-3 text-center text-sm leading-normal text-muted-foreground text-pretty">
          Após o envio, aguarde o contato da liderança.
        </p>
      </div>
    </form>
  );
}
