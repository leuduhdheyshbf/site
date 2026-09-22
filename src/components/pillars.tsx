import { motion } from "framer-motion";
import { PILLARS } from "@/lib/recruitment";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Pillars() {
  return (
    <motion.section 
      className="mx-auto mt-12 grid max-w-3xl gap-3 px-5 sm:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {PILLARS.map((pillar) => (
        <motion.article 
          key={pillar.title} 
          className="pillar-card"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <h2 className="font-display text-xl tracking-wide text-silver">{pillar.title}</h2>
          <p className="mt-1 text-sm leading-normal text-muted-foreground">{pillar.body}</p>
        </motion.article>
      ))}
    </motion.section>
  );
}
