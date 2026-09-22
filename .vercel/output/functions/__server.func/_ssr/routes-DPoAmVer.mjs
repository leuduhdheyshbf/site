import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as Gamepad2, i as Send, l as Copy, o as Phone, r as Shield, s as MessageCircle, t as User, u as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DPoAmVer.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative flex flex-col items-center px-5 pt-6 text-center sm:pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/latam-logo.png",
				alt: "Brasão da guilda LATAM 友",
				className: "hero-logo",
				width: 640,
				height: 640
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "live-badge",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), "Recrutamento aberto"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 max-w-xl text-4xl leading-none tracking-wide text-silver text-balance sm:text-5xl",
				children: "Formulário de recrutamento"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-base leading-normal text-muted-foreground text-pretty",
				children: "Quer fazer parte da LATAM 友? Preencha com informações verdadeiras. A liderança analisa o perfil e entra em contato pelo WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#formulario",
				className: "cta-jump mt-5",
				children: "Preencher candidatura"
			})
		]
	});
}
var GUILD_NAME = "LATAM 友";
var GUILD_TAGLINE = "Respeito · União · Atividade · Evolução";
var ESTADOS = [
	{
		uf: "AC",
		nome: "Acre"
	},
	{
		uf: "AL",
		nome: "Alagoas"
	},
	{
		uf: "AP",
		nome: "Amapá"
	},
	{
		uf: "AM",
		nome: "Amazonas"
	},
	{
		uf: "BA",
		nome: "Bahia"
	},
	{
		uf: "CE",
		nome: "Ceará"
	},
	{
		uf: "DF",
		nome: "Distrito Federal"
	},
	{
		uf: "ES",
		nome: "Espírito Santo"
	},
	{
		uf: "GO",
		nome: "Goiás"
	},
	{
		uf: "MA",
		nome: "Maranhão"
	},
	{
		uf: "MT",
		nome: "Mato Grosso"
	},
	{
		uf: "MS",
		nome: "Mato Grosso do Sul"
	},
	{
		uf: "MG",
		nome: "Minas Gerais"
	},
	{
		uf: "PA",
		nome: "Pará"
	},
	{
		uf: "PB",
		nome: "Paraíba"
	},
	{
		uf: "PR",
		nome: "Paraná"
	},
	{
		uf: "PE",
		nome: "Pernambuco"
	},
	{
		uf: "PI",
		nome: "Piauí"
	},
	{
		uf: "RJ",
		nome: "Rio de Janeiro"
	},
	{
		uf: "RN",
		nome: "Rio Grande do Norte"
	},
	{
		uf: "RS",
		nome: "Rio Grande do Sul"
	},
	{
		uf: "RO",
		nome: "Rondônia"
	},
	{
		uf: "RR",
		nome: "Roraima"
	},
	{
		uf: "SC",
		nome: "Santa Catarina"
	},
	{
		uf: "SP",
		nome: "São Paulo"
	},
	{
		uf: "SE",
		nome: "Sergipe"
	},
	{
		uf: "TO",
		nome: "Tocantins"
	}
];
var PATENTES = [
	"Bronze I",
	"Bronze II",
	"Bronze III",
	"Prata I",
	"Prata II",
	"Prata III",
	"Ouro I",
	"Ouro II",
	"Ouro III",
	"Ouro IV",
	"Platina I",
	"Platina II",
	"Platina III",
	"Platina IV",
	"Diamante I",
	"Diamante II",
	"Diamante III",
	"Diamante IV",
	"Heroico",
	"Grão Mestre"
];
var ESTILOS = [
	{
		value: "rush",
		label: "Rush"
	},
	{
		value: "suporte",
		label: "Suporte"
	},
	{
		value: "estrategico",
		label: "Estratégico"
	},
	{
		value: "misto",
		label: "Misto"
	}
];
var HORAS = [
	{
		value: "1-2h",
		label: "1–2 horas"
	},
	{
		value: "2-4h",
		label: "2–4 horas"
	},
	{
		value: "4h+",
		label: "4 horas ou mais"
	}
];
var FREQUENCIAS = [
	{
		value: "todos-os-dias",
		label: "Todos os dias"
	},
	{
		value: "quase-todos-os-dias",
		label: "Quase todos os dias"
	},
	{
		value: "alguns-dias",
		label: "Alguns dias"
	}
];
var SIM_NAO = [{
	value: "sim",
	label: "Sim"
}, {
	value: "nao",
	label: "Não"
}];
var HORARIOS = [
	{
		value: "manha",
		label: "Manhã"
	},
	{
		value: "tarde",
		label: "Tarde"
	},
	{
		value: "noite",
		label: "Noite"
	},
	{
		value: "qualquer",
		label: "Qualquer horário"
	}
];
var PILLARS = [
	{
		title: "Respeito",
		body: "Cada membro é tratado com consideração. Sem toxicidade, sem humilhação."
	},
	{
		title: "União",
		body: "A gente joga junto. Comunica, cobre e não abandona o time."
	},
	{
		title: "Atividade",
		body: "Presença nas partidas, nos treinos e nos eventos da guilda."
	},
	{
		title: "Evolução",
		body: "Treina, escuta a liderança e sobe de patente com o grupo."
	}
];
var required = (message) => string().trim().min(1, message);
var recruitmentSchema = object({
	nome: required("Informe seu nome").min(2, "Informe seu nome"),
	idade: required("Informe sua idade").regex(/^\d{1,2}$/, "Informe uma idade válida").refine((value) => {
		const age = Number(value);
		return age >= 12 && age <= 80;
	}, "A idade deve ser entre 12 e 80 anos"),
	estado: required("Selecione seu estado"),
	nick: required("Informe seu nick no Free Fire").min(2, "Informe seu nick no Free Fire"),
	idFreeFire: required("Informe seu ID").regex(/^\d{8,12}$/, "O ID do Free Fire deve ter de 8 a 12 dígitos"),
	patenteAtual: required("Selecione sua patente atual"),
	patenteMaxima: required("Selecione sua patente máxima"),
	estilo: required("Selecione seu estilo de jogo"),
	horas: required("Selecione quantas horas você joga"),
	frequencia: required("Selecione sua frequência"),
	motivo: required("Conte por que quer entrar na guilda").min(20, "Escreva pelo menos 20 caracteres"),
	outraGuilda: required("Responda se já participou de outra guilda"),
	atividades: required("Responda se vai participar das atividades"),
	regras: string().trim().min(1, "Confirme se aceita as regras").refine((value) => value === "sim", "É necessário aceitar as regras da guilda"),
	whatsapp: required("Informe seu WhatsApp").transform((value) => value.replace(/\D/g, "")).pipe(string().regex(/^\d{10,11}$/, "Informe um WhatsApp válido com DDD")),
	horario: required("Selecione o melhor horário")
});
var defaultValues = {
	nome: "",
	idade: "",
	estado: "",
	nick: "",
	idFreeFire: "",
	patenteAtual: "",
	patenteMaxima: "",
	estilo: "",
	horas: "",
	frequencia: "",
	motivo: "",
	outraGuilda: "",
	atividades: "",
	regras: "",
	whatsapp: "",
	horario: ""
};
function formatWhatsApp(value) {
	const digits = value.replace(/\D/g, "").slice(0, 11);
	if (digits.length === 0) return "";
	if (digits.length <= 2) return `(${digits}`;
	if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
	if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
	return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
function displayWhatsApp(digits) {
	return formatWhatsApp(digits);
}
function labelOf(options, value) {
	return options.find((option) => option.value === value)?.label ?? value;
}
function estadoLabel(uf) {
	const match = ESTADOS.find((estado) => estado.uf === uf);
	return match ? `${match.nome} (${match.uf})` : uf;
}
function formatApplicationMessage(values) {
	return [
		`*${GUILD_NAME} — Candidatura*`,
		"",
		"*Dados do jogador*",
		`Nome: ${values.nome}`,
		`Idade: ${values.idade}`,
		`Estado: ${estadoLabel(values.estado)}`,
		`Nick: ${values.nick}`,
		`ID: ${values.idFreeFire}`,
		"",
		"*Perfil*",
		`Patente atual: ${values.patenteAtual}`,
		`Patente máxima: ${values.patenteMaxima}`,
		`Estilo: ${labelOf(ESTILOS, values.estilo)}`,
		`Horas por dia: ${labelOf(HORAS, values.horas)}`,
		`Frequência: ${labelOf(FREQUENCIAS, values.frequencia)}`,
		"",
		"*Sobre a guilda*",
		`Por que quer entrar: ${values.motivo}`,
		`Já participou de outra guilda: ${labelOf(SIM_NAO, values.outraGuilda)}`,
		`Participa das atividades: ${labelOf(SIM_NAO, values.atividades)}`,
		`Aceita as regras: ${labelOf(SIM_NAO, values.regras)}`,
		"",
		"*Contato*",
		`WhatsApp: ${displayWhatsApp(values.whatsapp)}`,
		`Melhor horário: ${labelOf(HORARIOS, values.horario)}`
	].join("\n");
}
function whatsappShareUrl(message) {
	return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
var FIELD_LABELS = {
	nome: "Nome",
	idade: "Idade",
	estado: "Estado",
	nick: "Nick no Free Fire",
	idFreeFire: "ID do Free Fire",
	patenteAtual: "Patente atual",
	patenteMaxima: "Patente máxima",
	estilo: "Estilo de jogo",
	horas: "Horas por dia",
	frequencia: "Frequência",
	motivo: "Por que quer entrar",
	outraGuilda: "Já participou de outra guilda",
	atividades: "Disposto a participar das atividades",
	regras: "Aceita as regras da guilda",
	whatsapp: "WhatsApp",
	horario: "Melhor horário para contato"
};
function displayValue(key, values) {
	switch (key) {
		case "estado": return estadoLabel(values.estado);
		case "estilo": return labelOf(ESTILOS, values.estilo);
		case "horas": return labelOf(HORAS, values.horas);
		case "frequencia": return labelOf(FREQUENCIAS, values.frequencia);
		case "outraGuilda":
		case "atividades":
		case "regras": return labelOf(SIM_NAO, values[key]);
		case "horario": return labelOf(HORARIOS, values.horario);
		case "whatsapp": return displayWhatsApp(values.whatsapp);
		default: return values[key];
	}
}
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto mt-12 grid max-w-3xl gap-3 px-5 sm:grid-cols-2",
		children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "pillar-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl tracking-wide text-silver",
				children: pillar.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-muted-foreground",
				children: pillar.body
			})]
		}, pillar.title))
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("flex items-baseline gap-3 text-sm font-medium text-foreground", className),
		...props
	});
}
function Field({ number, label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", error && "field-has-error"),
		"data-error": error ? "true" : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg leading-none tracking-wide text-accent",
					children: String(number).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function SectionCard({ id, eyebrow, title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "section-card scroll-mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6 flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "section-icon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					strokeWidth: 1.75
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-accent uppercase",
				children: eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-1 text-3xl tracking-wide text-silver text-balance",
				children: title
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-5",
			children
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium select-none transition-[transform,background-color,box-shadow,color,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-foreground shadow-accent hover:bg-accent-hover",
			secondary: "bg-card text-foreground shadow-border hover:shadow-border-hover",
			ghost: "bg-transparent text-muted-foreground hover:text-foreground"
		},
		size: {
			default: "min-h-11 rounded-md px-5 text-sm",
			lg: "min-h-12 rounded-lg px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		suppressHydrationWarning: true,
		className: cn("field-control", className),
		...props
	});
}
function OptionCards({ name, value, options, onChange, columns = "two" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": name,
		className: cn("grid gap-2", columns === "stack" ? "grid-cols-1" : "grid-cols-2"),
		children: options.map((option) => {
			const selected = value === option.value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": selected,
				className: cn("option-card", selected && "option-card-selected"),
				onClick: () => onChange(option.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("option-dot", selected && "option-dot-selected") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option.label })]
			}, option.value);
		})
	});
}
function SelectField({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			suppressHydrationWarning: true,
			className: cn("field-control field-select", className),
			...props,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "field-chevron",
			"aria-hidden": "true"
		})]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn("field-control field-textarea", className),
		...props
	});
}
function RecruitmentForm({ onSubmitted }) {
	const { register, control, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
		resolver: u(recruitmentSchema),
		defaultValues,
		mode: "onSubmit"
	});
	function onInvalid() {
		requestAnimationFrame(() => {
			document.querySelector("[data-error='true']")?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "formulario",
		className: "mx-auto flex w-full max-w-xl flex-col gap-5 px-5 pb-20 pt-10",
		onSubmit: handleSubmit(onSubmitted, onInvalid),
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "dados",
				eyebrow: "01",
				title: "Dados do jogador",
				icon: User,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 1,
						label: "Nome",
						htmlFor: "nome",
						error: errors.nome?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "nome",
							autoComplete: "name",
							placeholder: "Seu nome",
							...register("nome")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 2,
						label: "Idade",
						htmlFor: "idade",
						error: errors.idade?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "idade",
							inputMode: "numeric",
							maxLength: 2,
							placeholder: "Ex: 18",
							...register("idade")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 3,
						label: "Estado",
						htmlFor: "estado",
						error: errors.estado?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
							id: "estado",
							defaultValue: "",
							...register("estado"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Selecione seu estado"
							}), ESTADOS.map((estado) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: estado.uf,
								children: estado.nome
							}, estado.uf))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 4,
						label: "Nick no Free Fire",
						htmlFor: "nick",
						error: errors.nick?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "nick",
							placeholder: "Seu nick",
							...register("nick")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 5,
						label: "ID do Free Fire",
						htmlFor: "idFreeFire",
						error: errors.idFreeFire?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "idFreeFire",
							inputMode: "numeric",
							maxLength: 12,
							placeholder: "Somente números",
							...register("idFreeFire", { onChange: (event) => {
								const digits = event.target.value.replace(/\D/g, "").slice(0, 12);
								setValue("idFreeFire", digits, { shouldValidate: false });
							} })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "perfil",
				eyebrow: "02",
				title: "Perfil",
				icon: Gamepad2,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 6,
						label: "Patente atual",
						htmlFor: "patenteAtual",
						error: errors.patenteAtual?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
							id: "patenteAtual",
							defaultValue: "",
							...register("patenteAtual"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Selecione a patente"
							}), PATENTES.map((patente) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: patente,
								children: patente
							}, patente))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 7,
						label: "Patente máxima",
						htmlFor: "patenteMaxima",
						error: errors.patenteMaxima?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
							id: "patenteMaxima",
							defaultValue: "",
							...register("patenteMaxima"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Selecione a patente"
							}), PATENTES.map((patente) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: patente,
								children: patente
							}, `max-${patente}`))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 8,
						label: "Estilo de jogo",
						error: errors.estilo?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "estilo",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: ESTILOS
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 9,
						label: "Quantas horas por dia você joga?",
						error: errors.horas?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "horas",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: HORAS,
								columns: "stack"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 10,
						label: "Você joga com frequência?",
						error: errors.frequencia?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "frequencia",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: FREQUENCIAS,
								columns: "stack"
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "guilda",
				eyebrow: "03",
				title: "Sobre a guilda",
				icon: Shield,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 11,
						label: `Por que você quer entrar na ${GUILD_NAME}?`,
						htmlFor: "motivo",
						error: errors.motivo?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "motivo",
							rows: 4,
							maxLength: 600,
							placeholder: "Conte por que a guilda combina com você.",
							...register("motivo")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 12,
						label: "Já participou de outra guilda?",
						error: errors.outraGuilda?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "outraGuilda",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: SIM_NAO
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 13,
						label: "Está disposto a participar das atividades da guilda?",
						error: errors.atividades?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "atividades",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: SIM_NAO
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 14,
						label: "Aceita respeitar os membros e seguir as regras da guilda?",
						error: errors.regras?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "regras",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: SIM_NAO
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "contato",
				eyebrow: "04",
				title: "Contato",
				icon: Phone,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					number: 15,
					label: "WhatsApp para contato",
					htmlFor: "whatsapp",
					error: errors.whatsapp?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "whatsapp",
						type: "tel",
						inputMode: "tel",
						autoComplete: "tel",
						placeholder: "(11) 99999-9999",
						...register("whatsapp", { onChange: (event) => {
							setValue("whatsapp", formatWhatsApp(event.target.value), { shouldValidate: false });
						} })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					number: 16,
					label: "Melhor horário para contato",
					error: errors.horario?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
						name: "horario",
						control,
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
							name: field.name,
							value: field.value,
							onChange: field.onChange,
							options: HORARIOS
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "submit-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "w-full",
					disabled: isSubmitting,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Enviar candidatura"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm leading-normal text-muted-foreground text-pretty",
					children: "Após o envio, aguarde o contato da liderança pelo WhatsApp."
				})]
			})
		]
	});
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
var SUMMARY_KEYS = [
	"nome",
	"idade",
	"estado",
	"nick",
	"idFreeFire",
	"patenteAtual",
	"patenteMaxima",
	"estilo",
	"horas",
	"frequencia",
	"motivo",
	"outraGuilda",
	"atividades",
	"regras",
	"whatsapp",
	"horario"
];
function SuccessView({ values, onReset }) {
	const message = formatApplicationMessage(values);
	async function copyMessage() {
		try {
			await navigator.clipboard.writeText(message);
			toast.success("Candidatura copiada");
		} catch {
			toast.error("Não foi possível copiar. Selecione o texto e copie.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "formulario",
		className: "mx-auto w-full max-w-xl px-5 pb-20 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-card text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "success-mark mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-7",
							strokeWidth: 2.25
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-5 text-4xl tracking-wide text-silver text-balance",
						children: "Candidatura registrada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-3 max-w-md text-base leading-normal text-muted-foreground text-pretty",
						children: [
							"A liderança da ",
							GUILD_NAME,
							" vai analisar seu perfil e falar com você no WhatsApp informado. Enquanto isso, envie a candidatura pelo WhatsApp para agilizar."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "w-full sm:w-auto",
							onClick: () => {
								window.open(whatsappShareUrl(message), "_blank", "noopener,noreferrer");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Enviar no WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "lg",
							className: "w-full sm:w-auto",
							onClick: copyMessage,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copiar texto"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "summary-list mt-5",
				children: SUMMARY_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "summary-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: FIELD_LABELS[key] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: displayValue(key, values) })]
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: onReset,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Enviar outra candidatura"]
				})
			})
		]
	});
}
function Home() {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			submitted ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
			submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessView, {
				values: submitted,
				onReset: () => setSubmitted(null)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecruitmentForm, { onSubmitted: setSubmitted }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
