import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 py-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left space-y-5 max-w-xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-blue-300"
        >
          Nice to meet you!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {showName && (
              <Typewriter
                words={["Mohamadreza Vahidifar"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            )}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7 }}
          className="text-gray-400 leading-relaxed"
        >
          I'm a Front-End Developer with hands-on experience in building modern,
          responsive web applications using React, Next.js, Tailwind CSS, and
          JavaScript. I love crafting clean UI, delivering smooth UX, and
          writing scalable, maintainable code. Always learning, always building
          💻
        </motion.p>

        <motion.a
          href="https://t.me/mohamadreza_vahidifar"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.9,
            duration: 0.5,
            type: "spring",
            stiffness: 300,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg inline-block"
        >
          Connect with me
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-60 h-60 md:w-96 md:h-96 rounded-full  overflow-hidden shadow-2xl ring-4 ring-blue-500/30"
        >
          <img
            src="/img/man.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500/20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
