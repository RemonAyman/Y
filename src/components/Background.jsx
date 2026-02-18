import { motion } from 'framer-motion';
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-900/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-red-900/10 blur-[100px] rounded-full"></div>

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: '100vh', x: Math.random() * 100 + 'vw' }}
          animate={{ opacity: [0, 0.3, 0], y: '-10vh' }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity,
            delay: Math.random() * 10 
          }}
          className="absolute text-red-500/20 text-xl"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default Background;
