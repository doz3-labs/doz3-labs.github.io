import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // <--- Import the icon
import DozWordmark from "./DozWordmark.jsx";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[85%_center] md:bg-center"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      />

      {/* White gradient overlay */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[85%] md:w-[60%] bg-gradient-to-r from-white via-white/80 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 flex items-center h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl space-y-8 text-left text-slate-900"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500"
          >
            <DozWordmark className="text-xs text-doz-blue" /> • PRE SORTED DOSAGE
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900"
          >
            The complete
            <span className="block text-doz-blue">healthcare ecosystem.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-slate-700 leading-relaxed max-w-md"
          >
            Doctors prescribe. We sort. You heal. The pre sorted dosage
            delivery system for India.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-md md:text-xl font-bold text-slate-600 pt-6"
          >
            Launching Soon in Bengaluru.
          </motion.p>
        </motion.div>
      </div>

      {/* --- SCROLL DOWN ARROW --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }} // The Bounce Animation
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-10 h-10 text-slate-400/80 drop-shadow-sm" />
        </motion.div>
      </motion.div>
      {/* ------------------------- */}

    </section>
  );
}

export default Hero;