import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-950 text-white py-12 px-6 mt-32"
    >
      <motion.div
        variants={itemVariants}
        className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg font-medium text-white relative after:content-[''] after:block after:h-[2px] after:w-16 after:bg-blue-600 after:mx-auto after:mt-2"
        >
          Made with 💙 by Mohamdreza Vahidifar
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-8 text-2xl text-gray-400"
        >
          <motion.a
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://github.com/Poison021"
            target="_blank"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#0088cc" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://t.me/mohamadreza_vahidifar"
            target="_blank"
          >
            <FaTelegram />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#C5221F" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="mailto:mohamdrezavahidifar82@gmail.com"
            target="_blank"
          >
            <BiLogoGmail />
          </motion.a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-500 tracking-wide"
        >
          &copy; 2025 All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
