import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  return (
    <header className="relative flex flex-col items-center px-5 pt-6 text-center sm:pt-8">
      <motion.img
        src="/latam-logo.png"
        alt="Brasão da guilda LATAM 友"
        className="hero-logo"
        width={640}
        height={640}
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.p 
        className="live-badge"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <span className="live-dot" />
        Recrutamento aberto
      </motion.p>

      <motion.h1 
        className="font-display mt-4 max-w-xl text-4xl leading-none tracking-wide text-silver text-balance sm:text-5xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Formulário de recrutamento
      </motion.h1>

      <motion.p 
        className="mt-3 max-w-md text-base leading-normal text-muted-foreground text-pretty"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        Quer fazer parte da LATAM 友? Preencha com informações verdadeiras. A
        liderança analisa o perfil e entra em contato pelo WhatsApp.
      </motion.p>

      <motion.a 
        href="#formulario" 
        className="cta-jump mt-5"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Preencher candidatura
      </motion.a>
    </header>
  );
}
