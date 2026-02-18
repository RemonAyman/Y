import { motion } from 'framer-motion';
import React from 'react';
import videoSrc from '../assets/video.mp4';

const VideoSection = () => {
  return (
    <div className="video-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>
          فيديو عشانك يا بنوتى 🎬
        </h3>
        <p style={{ fontSize: '12px', color: '#666' }}>كل تفصيلة فيكي بتمثل لي دنيا</p>
      </motion.div>

      <motion.div
        className="video-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <video controls playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default VideoSection;
