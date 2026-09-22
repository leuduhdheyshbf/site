import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PATENTES_LATAM, c as SiteFooter, d as formatApplicationMessage, f as recruitmentSchema, i as HORAS_DISPONIBILIDADE, l as defaultValues, n as FUNCOES, r as GUILD_NAME, s as SIM_NAO, t as FIELD_LABELS, u as displayValue } from "./site-footer-C1uUQ6Ao.mjs";
import { i as require_react, n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as RotateCcw, c as Check, i as Send, n as Trophy, o as Copy, s as Clock, t as Users } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/candidatura-BubYi0u5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-wide text-silver",
						children: "FORMULÁRIO DE RECRUTAMENTO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground text-pretty",
						children: [
							"A ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "LATAM" }),
							" está iniciando um processo de recrutamento para novos jogadores.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Buscamos pessoas ativas, comprometidas e com vontade de evoluir junto com à equipe."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-semibold uppercase tracking-wider text-accent",
						children: "Foco total na partida sem ter medo de perder."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "dados",
				eyebrow: "01",
				title: "INFORMAÇÕES DO JOGADOR",
				icon: Users,
				className: "latam-card latam-card-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 1,
						label: "Nome",
						htmlFor: "nome",
						error: errors.nome?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "nome",
							autoComplete: "name",
							placeholder: "Seu nome completo",
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
							maxLength: 3,
							placeholder: "Sua idade",
							...register("idade")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 3,
						label: "Nickname do jogo",
						htmlFor: "nick",
						error: errors.nick?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "nick",
							placeholder: "Seu nickname no jogo",
							...register("nick")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 4,
						label: "ID da conta",
						htmlFor: "idConta",
						error: errors.idConta?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "idConta",
							inputMode: "numeric",
							maxLength: 15,
							placeholder: "ID da sua conta",
							...register("idConta", { onChange: (event) => {
								const digits = event.target.value.replace(/\D/g, "").slice(0, 15);
								setValue("idConta", digits, { shouldValidate: false });
							} })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 5,
						label: "Cidade/Estado",
						htmlFor: "cidadeEstado",
						error: errors.cidadeEstado?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "cidadeEstado",
							placeholder: "Ex: São Paulo - SP",
							...register("cidadeEstado")
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "perfil",
				eyebrow: "02",
				title: "PERFIL NO JOGO",
				icon: Trophy,
				className: "latam-card latam-card-fade-in",
				style: { animationDelay: "100ms" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 6,
						label: "Qual sua principal função?",
						htmlFor: "funcao",
						error: errors.funcao?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "funcao",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: FUNCOES
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 7,
						label: "Qual sua patente atual?",
						htmlFor: "patenteAtual",
						error: errors.patenteAtual?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "patenteAtual",
							control,
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
								name: field.name,
								value: field.value,
								onChange: field.onChange,
								options: PATENTES_LATAM
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						number: 8,
						label: "Já teve experiência em competitivo, guildas ou campeonatos?",
						error: errors.experienciaCompetitiva?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							name: "experienciaCompetitiva",
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
						number: 9,
						label: "Se sim, conte brevemente sua experiência.",
						htmlFor: "experienciaDescricao",
						error: errors.experienciaDescricao?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "experienciaDescricao",
							rows: 4,
							maxLength: 800,
							placeholder: "Conte sobre suas experiências em competições, guildas ou campeonatos...",
							...register("experienciaDescricao")
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				id: "disponibilidade",
				eyebrow: "03",
				title: "DISPONIBILIDADE",
				icon: Clock,
				className: "latam-card latam-card-fade-in",
				style: { animationDelay: "200ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					number: 10,
					label: "Quanto tempo você costuma ficar disponível para jogar por dia?",
					error: errors.tempoDisponivel?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
						name: "tempoDisponivel",
						control,
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionCards, {
							name: field.name,
							value: field.value,
							onChange: field.onChange,
							options: HORAS_DISPONIBILIDADE,
							columns: "stack"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					number: 11,
					label: "Qual seu horário normalmente disponível para jogar?",
					htmlFor: "horarioDisponivel",
					error: errors.horarioDisponivel?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "horarioDisponivel",
						placeholder: "Ex: 19h às 23h",
						...register("horarioDisponivel")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "submit-panel latam-submit-panel latam-card-fade-in",
				style: { animationDelay: "300ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "w-full latam-btn-3d",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Enviar candidatura"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm leading-normal text-muted-foreground text-pretty",
					children: "Após o envio, aguarde o contato da liderança."
				})]
			})
		]
	});
}
var SUMMARY_KEYS = [
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
	"horarioDisponivel"
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
				className: "section-card text-center latam-card-fade-in",
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
							" vai analisar seu perfil e entrar em contato."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "lg",
							className: "w-full sm:w-auto",
							onClick: copyMessage,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copiar texto"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "summary-list mt-5 latam-card-fade-in",
				style: { animationDelay: "100ms" },
				children: SUMMARY_KEYS.filter((key) => key !== "experienciaDescricao" || values.experienciaDescricao).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "summary-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: FIELD_LABELS[key] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: displayValue(key, values) })]
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center latam-card-fade-in",
				style: { animationDelay: "200ms" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: onReset,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Enviar outra candidatura"]
				})
			})
		]
	});
}
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxYBWoUGq8DVoJdl3CW43O9rOx1f9g73BSbmmKmpM2gIusMF2hDjgUvjG9OSc8KL45/exec";
function Candidatura() {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(null);
	async function handleSubmit(values) {
		setIsSubmitting(true);
		setSubmitError(null);
		try {
			await fetch(GOOGLE_SCRIPT_URL, {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values)
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-bg min-h-screen",
		children: [
			submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessView, {
				values: submitted,
				onReset: () => setSubmitted(null)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecruitmentForm, { onSubmitted: handleSubmit })
			}),
			submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50",
				children: submitError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Candidatura as component };
