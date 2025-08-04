import React from "react";
import { motion } from "framer-motion";

export default function Project() {
  const pictures = [
    { src: "/img/FoodUi.png", title: "FoodUI" },
    { src: "/img/dashi.png", title: "Dashboard" },
    { src: "/img/phoneShop.png", title: "Phone Shop UI" },
    { src: "/img/todoList.png", title: "To Do List" },
    { src: "/img/digit.png", title: "menuUi" },
    { src: "/img/compa.png", title: "companyUI" },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-white text-center text-4xl font-bold mb-12 underline decoration-blue-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pictures.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition duration-300"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-white text-center font-semibold text-lg">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
