import { motion } from 'framer-motion';
import React from 'react';

const Screen1 = ({ onNext }) => {
  return (
    <div className="screen">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="card" style={{ textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}
          >
            ريمون & بنوتى
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#888', marginBottom: '40px' }}
          >
            ✨ OUR ETERNAL LOVE STORY
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="btn-secondary"
            disabled
          >
            انتي لسه هتفكري انجزي
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: 'spring' }}
            whileTap={{ scale: 0.96 }}
            onClick={onNext}
            className="btn-primary"
          >
            دوسي هنا 😂
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Screen1;
