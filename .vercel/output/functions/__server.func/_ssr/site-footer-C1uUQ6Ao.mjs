import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-C1uUQ6Ao.js
var import_jsx_runtime = require_jsx_runtime();
var GUILD_NAME = "LATAM";
var GUILD_TAGLINE = "Foco total na partida sem ter medo de perder";
var PILLARS = [
	{
		title: "Disciplina",
		body: "Foco total na partida sem ter medo de perder."
	},
	{
		title: "Equipe",
		body: "Jogamos juntos, vencemos juntos."
	},
	{
		title: "Evolução",
		body: "Melhoramos a cada rodada."
	},
	{
		title: "Respeito",
		body: "Tratamento justo e direto com todos."
	}
];
var FUNCOES = [
	{
		value: "rush",
		label: "Rush"
	},
	{
		value: "suporte",
		label: "Suporte"
	},
	{
		value: "fuzileiro",
		label: "Fuzileiro"
	},
	{
		value: "granadeiro",
		label: "Granadeiro"
	},
	{
		value: "full_gas",
		label: "Full Gás"
	},
	{
		value: "cura",
		label: "Cura"
	},
	{
		value: "flexivel",
		label: "Flexível"
	}
];
var PATENTES_LATAM = [
	{
		value: "ouro_platina",
		label: "Ouro-Platina"
	},
	{
		value: "platina_diamente",
		label: "Platina-Diamante"
	},
	{
		value: "diamente_mestre",
		label: "Diamante-Mestre de Honra"
	},
	{
		value: "elite",
		label: "Elite+"
	},
	{
		value: "outra",
		label: "Outra"
	}
];
var SIM_NAO = [{
	value: "sim",
	label: "Sim"
}, {
	value: "nao",
	label: "Não"
}];
var HORAS_DISPONIBILIDADE = [
	{
		value: "1-2h",
		label: "1–2 horas"
	},
	{
		value: "2-4h",
		label: "2–4 horas"
	},
	{
		value: "4+h",
		label: "4+ horas"
	}
];
var required = (message) => string().trim().min(1, message);
var recruitmentSchema = object({
	nome: required("Informe seu nome").min(2, "Informe seu nome completo"),
	idade: required("Informe sua idade").regex(/^\d{1,3}$/, "Informe uma idade válida").refine((value) => {
		const age = Number(value);
		return age >= 12 && age <= 80;
	}, "A idade deve ser entre 12 e 80 anos"),
	nick: required("Informe seu nickname no jogo").min(2, "Informe seu nickname"),
	idConta: required("Informe o ID da sua conta").regex(/^\d{6,15}$/, "O ID da conta deve ter de 6 a 15 dígitos"),
	cidadeEstado: required("Informe sua cidade/estado").min(3, "Informe cidade e estado"),
	funcao: required("Selecione sua principal função"),
	patenteAtual: required("Selecione sua patente atual"),
	experienciaCompetitiva: required("Responda sobre experiência competitiva"),
	experienciaDescricao: string().optional(),
	tempoDisponivel: required("Selecione quanto tempo fica disponível por dia"),
	horarioDisponivel: required("Informe seu horário disponível para jogar")
});
var defaultValues = {
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
	horarioDisponivel: ""
};
function labelOf(options, value) {
	return options.find((option) => option.value === value)?.label ?? value;
}
function formatApplicationMessage(values) {
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
		`Horário: ${values.horarioDisponivel}`
	].filter(Boolean).join("\n");
}
var FIELD_LABELS = {
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
	horarioDisponivel: "Horário disponível"
};
function displayValue(key, values) {
	switch (key) {
		case "funcao": return labelOf(FUNCOES, values.funcao);
		case "patenteAtual": return labelOf(PATENTES_LATAM, values.patenteAtual);
		case "experienciaCompetitiva": return labelOf(SIM_NAO, values.experienciaCompetitiva);
		case "tempoDisponivel": return labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel);
		default: return values[key] ?? "";
	}
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "px-5 pb-16 pt-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-brand mx-auto mb-6 max-w-xs" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-2xl tracking-[0.16em] text-silver",
				children: ["LATAM ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-normal text-accent",
					children: "友"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: GUILD_TAGLINE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-subtle",
				children: [GUILD_NAME, " · Recrutamento Free Fire"]
			})
		]
	});
}
//#endregion
export { PATENTES_LATAM as a, SiteFooter as c, formatApplicationMessage as d, recruitmentSchema as f, HORAS_DISPONIBILIDADE as i, defaultValues as l, FUNCOES as n, PILLARS as o, GUILD_NAME as r, SIM_NAO as s, FIELD_LABELS as t, displayValue as u };
