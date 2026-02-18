import { motion } from 'framer-motion';
import React from 'react';

const Poetry = () => {
  const lines = [
    "يا من سرقتى القلب بنظره",
    "وصرتى لى الدنيا وما فيها",
    "بنوتى، انتى النفس اللى بتنفسه",
    "وقلبي وعينى اللى بشوف بيها",
  ];

  return (
    <section className="section-padding text-center bg-white/30 backdrop-blur-sm">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
              className="text-3xl md:text-5xl font-bold text-text-soft"
            >
              {line}
            </motion.p>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="pt-20"
          >
            <span className="handwritten text-6xl md:text-8xl text-love-red block mb-6">بكل عشق،</span>
            <h2 className="text-6xl md:text-9xl font-black text-rose-pink tracking-tight animate-pulse">
              قلب بابا انتى
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Poetry;
