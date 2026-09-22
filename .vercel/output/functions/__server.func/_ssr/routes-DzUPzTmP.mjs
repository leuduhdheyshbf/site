import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SiteFooter, o as PILLARS } from "./site-footer-C1uUQ6Ao.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DzUPzTmP.js
var import_jsx_runtime = require_jsx_runtime();
var logoVariants = {
	hidden: {
		opacity: 0,
		scale: .8,
		rotate: -10
	},
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: .8,
			ease: "easeOut"
		}
	}
};
var textVariants = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * .15,
			duration: .6,
			ease: "easeOut"
		}
	})
};
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative flex flex-col items-center px-5 pt-6 text-center sm:pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: "/latam-logo.png",
				alt: "Brasão da guilda LATAM 友",
				className: "hero-logo",
				width: 640,
				height: 640,
				variants: logoVariants,
				initial: "hidden",
				animate: "visible"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				className: "live-badge",
				variants: textVariants,
				initial: "hidden",
				animate: "visible",
				custom: 1,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), "Recrutamento aberto"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				className: "font-display mt-4 max-w-xl text-4xl leading-none tracking-wide text-silver text-balance sm:text-5xl",
				variants: textVariants,
				initial: "hidden",
				animate: "visible",
				custom: 2,
				children: "Formulário de recrutamento"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "mt-3 max-w-md text-base leading-normal text-muted-foreground text-pretty",
				variants: textVariants,
				initial: "hidden",
				animate: "visible",
				custom: 3,
				children: "Quer fazer parte da LATAM 友? Preencha com informações verdadeiras. A liderança analisa o perfil e entra em contato pelo WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
				href: "#formulario",
				className: "cta-jump mt-5",
				variants: textVariants,
				initial: "hidden",
				animate: "visible",
				custom: 4,
				whileHover: { scale: 1.05 },
				whileTap: { scale: .95 },
				children: "Preencher candidatura"
			})
		]
	});
}
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			ease: "easeOut"
		}
	}
};
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		className: "mx-auto mt-12 grid max-w-3xl gap-3 px-5 sm:grid-cols-2",
		variants: containerVariants,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .3
		},
		children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			className: "pillar-card",
			variants: itemVariants,
			whileHover: {
				scale: 1.03,
				transition: { duration: .2 }
			},
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
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					delay: .3
				},
				className: "flex flex-col items-center justify-center px-5 pb-20 pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/candidatura",
					className: "cta-jump mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-black shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl hover:scale-105",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preencher Candidatura" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "h-5 w-5",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M13 7l5 5m0 0l-5 5m5-5H6"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-sm text-muted-foreground",
					children: "Clique acima para iniciar seu processo de recrutamento"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
