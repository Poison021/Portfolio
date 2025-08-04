import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Git & GitHub",
    "Responsive Design",
    "RESTful APIs",
    "Figma to Code",
    "Framer Motion",
    "WordPress",
  ];

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-8">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white underline decoration-blue-500">
        My Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={skillVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2563eb",
              boxShadow: "0 0 15px #3b82f6",
            }}
            className="bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md cursor-pointer font-semibold text-base sm:text-lg transition-colors"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
