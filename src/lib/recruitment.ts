import { z } from "zod";

export const GUILD_NAME = "LATAM";
export const GUILD_TAGLINE = "Foco total na partida sem ter medo de perder";

export const FUNCOES = [
  { value: "rush", label: "Rush" },
  { value: "suporte", label: "Suporte" },
  { value: "fuzileiro", label: "Fuzileiro" },
  { value: "granadeiro", label: "Granadeiro" },
  { value: "full_gas", label: "Full Gás" },
  { value: "cura", label: "Cura" },
  { value: "flexivel", label: "Flexível" },
] as const;

export const PATENTES_LATAM = [
  { value: "ouro_platina", label: "Ouro-Platina" },
  { value: "platina_diamente", label: "Platina-Diamante" },
  { value: "diamente_mestre", label: "Diamante-Mestre de Honra" },
  { value: "elite", label: "Elite+" },
  { value: "outra", label: "Outra" },
] as const;

export const SIM_NAO = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
] as const;

export const HORAS_DISPONIBILIDADE = [
  { value: "1-2h", label: "1–2 horas" },
  { value: "2-4h", label: "2–4 horas" },
  { value: "4+h", label: "4+ horas" },
] as const;

const required = (message: string) =>
  z
    .string()
    .trim()
    .min(1, message);

export const recruitmentSchema = z.object({
  nome: required("Informe seu nome").min(2, "Informe seu nome completo"),
  idade: required("Informe sua idade").regex(/^\d{1,3}$/, "Informe uma idade válida").refine(
    (value) => {
      const age = Number(value);
      return age >= 12 && age <= 80;
    },
    "A idade deve ser entre 12 e 80 anos",
  ),
  nick: required("Informe seu nickname no jogo").min(2, "Informe seu nickname"),
  idConta: required("Informe o ID da sua conta")
    .regex(/^\d{6,15}$/, "O ID da conta deve ter de 6 a 15 dígitos"),
  cidadeEstado: required("Informe sua cidade/estado").min(3, "Informe cidade e estado"),
  funcao: required("Selecione sua principal função"),
  patenteAtual: required("Selecione sua patente atual"),
  experienciaCompetitiva: required("Responda sobre experiência competitiva"),
  experienciaDescricao: z.string().optional(),
  tempoDisponivel: required("Selecione quanto tempo fica disponível por dia"),
  horarioDisponivel: required("Informe seu horário disponível para jogar"),
});

export type RecruitmentInput = z.input<typeof recruitmentSchema>;
export type RecruitmentValues = z.output<typeof recruitmentSchema>;

export const defaultValues: RecruitmentInput = {
  nome: "",
  idade: "",
  nick: "",
  idConta: "",
  cidadeEstado: "",
  funcao: "",
  patenteAtual: "",
  experienciaCompetitiva: "",
  experienciaDescricao: "",
  tempoDisponivel: "",
  horarioDisponivel: "",
};

export function labelOf(
  options: readonly { value: string; label: string }[],
  value: string,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function formatApplicationMessage(values: RecruitmentValues): string {
  return [
    `*${GUILD_NAME} — Candidatura*`,
    "",
    "*Dados do jogador*",
    `Nome: ${values.nome}`,
    `Idade: ${values.idade}`,
    `Cidade/Estado: ${values.cidadeEstado}`,
    `Nickname: ${values.nick}`,
    `ID da conta: ${values.idConta}`,
    "",
    "*Perfil no jogo*",
    `Função: ${labelOf(FUNCOES, values.funcao)}`,
    `Patente atual: ${labelOf(PATENTES_LATAM, values.patenteAtual)}`,
    `Experiência competitiva: ${labelOf(SIM_NAO, values.experienciaCompetitiva)}`,
    values.experienciaDescricao ? `Descrição: ${values.experienciaDescricao}` : "",
    "",
    "*Disponibilidade*",
    `Tempo por dia: ${labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel)}`,
    `Horário: ${values.horarioDisponivel}`,
  ].filter(Boolean).join("\n");
}

export const FIELD_LABELS: Record<keyof RecruitmentValues, string> = {
  nome: "Nome",
  idade: "Idade",
  nick: "Nickname do jogo",
  idConta: "ID da conta",
  cidadeEstado: "Cidade/Estado",
  funcao: "Principal função",
  patenteAtual: "Patente atual",
  experienciaCompetitiva: "Experiência em competitivo",
  experienciaDescricao: "Descrição da experiência",
  tempoDisponivel: "Tempo disponível por dia",
  horarioDisponivel: "Horário disponível",
};

export function displayValue(
  key: keyof RecruitmentValues,
  values: RecruitmentValues,
): string {
  switch (key) {
    case "funcao":
      return labelOf(FUNCOES, values.funcao);
    case "patenteAtual":
      return labelOf(PATENTES_LATAM, values.patenteAtual);
    case "experienciaCompetitiva":
      return labelOf(SIM_NAO, values.experienciaCompetitiva);
    case "tempoDisponivel":
      return labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel);
    default:
      return values[key] ?? "";
  }
}
