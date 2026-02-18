import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [daysElapsed, setDaysElapsed] = useState(0);
  const startDate = new Date('2025-12-27');

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now - startDate;
      setDaysElapsed(Math.floor(diff / (1000 * 60 * 60 * 24)));
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="love-letter-paper max-w-3xl w-full"
      >
        <div className="text-right mb-12">
          <span className="serif-italic text-text-soft">بكل الحب،</span>
          <h2 className="text-4xl md:text-6xl text-text-dark font-black mt-2">إلى بنوتى الغالية</h2>
        </div>

        <div className="space-y-8 text-2xl md:text-3xl text-text-dark leading-relaxed">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            من يوم <span className="text-rose-pink font-black border-b-2 border-warm-peach">27-12-2025</span> وحياتي اتغيرت.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            بقالنا <span className="text-rose-pink font-bold">{daysElapsed} يوم</span> بنرسم فيهم أحلى ذكرى، وكل يوم بيمحي تعب اليوم اللي قبله بضحكتك.
          </motion.p>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3, type: "spring" }}
            className="text-5xl md:text-8xl text-love-red handwritten py-6"
          >
            أنا بحبك أوى يا بنوتى
          </motion.h1>
        </div>

        <div className="mt-16 flex justify-between items-center opacity-40">
          <div className="w-16 h-16 rounded-full border-4 border-warm-peach/30 flex items-center justify-center rotate-12">
            <span className="text-[10px] font-bold text-center">SEAL OF<br/>LOVE</span>
          </div>
          <span className="text-sm italic">يا أحلى بنوتة في الدنيا..</span>
        </div>
      </motion.div>

      {/* Decorative Floating Heart */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] text-7xl text-rose-pink/20"
      >
        ❤️
      </motion.div>
    </section>
  );
};

export default Hero;
