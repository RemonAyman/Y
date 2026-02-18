import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import photo2 from '../assets/photo2.jpg';

const Screen4 = ({ onReset }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', color: '#888', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}
        >
          عالمي الخاص بيكي
        </motion.p>

        <motion.div
          className="photo-card"
          style={{ aspectRatio: '4/5', marginBottom: '20px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src={photo2} alt="Special World" />
          <div className="photo-overlay">
            <p style={{ color: 'white', fontWeight: 700, fontSize: '18px', textAlign: 'center' }}>
              بموت فيكي يا بنوتى 💍
            </p>
          </div>
        </motion.div>

        <motion.button
          className="btn-outline-gold"
          whileTap={{ scale: 0.96 }}
          animate={{ boxShadow: ['0 0 0px rgba(255,193,7,0)', '0 0 20px rgba(255,193,7,0.2)', '0 0 0px rgba(255,193,7,0)'] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => setShowModal(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          في حاجة أخيرة ليكي.. 🎁
        </motion.button>
      </div>

      {/* FINAL MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                style={{ fontSize: '48px', marginBottom: '16px' }}
              >
                ❤️
              </motion.div>

              <h2 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '24px', color: '#fff' }}>
                ملكة قلبي..
              </h2>

              <div style={{ textAlign: 'right', lineHeight: 1.9, color: '#ccc', fontSize: '14px', marginBottom: '24px' }}>
                <p style={{ marginBottom: '16px' }}>
                  حبيبتي "بنوتى".. عايز أقولك إن كل كلمة كتبتها هنا وكل صورة حطيتها هي جزء صغير من اللي حاسه بيكي. إنتي مش بس حبيبتي، إنتي بنتي وصحبتي وأماني. هفضل دايماً جنبك، وهيفضل حبنا بيكبر كل يوم عن اللي قبله. ربنا يخليكي ليا يا أغلى من عمري.
                </p>
                <p style={{ color: '#ffc107', fontWeight: 700, fontSize: '15px', lineHeight: 2 }}>
                  انا بحبك اووى والله ي قلب بابا و عمرى ما هبعد عنك ابدا و هفضل طول العمر جنبك و هكسبك الرهان و هنتجوز و هيجى اليوم الى هتفضلى فيه جنبى و عمرنا ما هنبعد عن بعض ابدا و على الوعد انك هتفضلى جنبك و تقعدى جنبك لحد 99 سنه فاكرة 👀❤️❤️ بحبك اووى ي قلب بابا ❤️❤️
                </p>
              </div>

              <p style={{ fontSize: '18px', fontWeight: 900, color: '#ffc107', marginBottom: '20px' }}>
                بحبك يا بنوتى.. للأبد ❤️
              </p>

              <button
                onClick={() => { setShowModal(false); onReset(); }}
                style={{ background: 'none', border: 'none', color: '#ff3b5c', fontSize: '13px', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', fontFamily: 'Cairo, sans-serif' }}
              >
                العودة للبداية
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Screen4;
