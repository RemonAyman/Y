import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import photo1 from '../assets/photo1.jpg';

const Screen3 = () => {
  const [tooltip, setTooltip] = useState(null);

  const promises = [
    { text: "هفضل سندك في كل وقت", emoji: "🤝" },
    { text: "هكون دايماً أمانك وضحكتك", emoji: "🛡️" },
    { text: "حبنا ملوش نهاية.. وعد", emoji: "∞" },
  ];

  return (
    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="container">
        {/* Promises */}
        {promises.map((p, i) => (
          <motion.div
            key={i}
            className="card-item"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <span>{p.text}</span>
            <span style={{ fontSize: '20px', color: '#ffc107' }}>{p.emoji}</span>
          </motion.div>
        ))}

        {/* Icon Buttons */}
        <div className="icon-grid" style={{ marginTop: '24px' }}>
          {/* Star */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatePresence>
              {tooltip === 'star' && (
                <motion.div
                  className="icon-tooltip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                >
                  عالمي الخاص بيكي
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="icon-btn"
              whileTap={{ scale: 0.92 }}
              onClick={() => setTooltip(tooltip === 'star' ? null : 'star')}
            >
              <span style={{ fontSize: '36px' }}>⭐</span>
            </motion.div>
          </div>

          {/* Envelope */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatePresence>
              {tooltip === 'env' && (
                <motion.div
                  className="icon-tooltip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                >
                  رسالتي ليكي
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="icon-btn"
              whileTap={{ scale: 0.92 }}
              onClick={() => setTooltip(tooltip === 'env' ? null : 'env')}
            >
              <span style={{ fontSize: '36px' }}>📩</span>
            </motion.div>
          </div>
        </div>

        {/* Photo */}
        <motion.div
          className="photo-card"
          style={{ aspectRatio: '4/5', marginTop: '20px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src={photo1} alt="Memory" />
          <div className="photo-overlay"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Screen3;
