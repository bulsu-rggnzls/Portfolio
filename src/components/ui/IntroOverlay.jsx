import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Innovating,", "Empowering,", "Delivering."];

export default function IntroOverlay() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0e1015]"
        >
          <div className="flex flex-wrap justify-center gap-3 overflow-hidden px-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 4,
                  delay: 0.7 + index * 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-sans text-2xl md:text-3xl font-extrabold tracking-tight text-white"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
