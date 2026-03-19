import { motion } from 'framer-motion';
import React from 'react';
import videoSrc from '../assets/video.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const videos = [videoSrc, video2, video3];

const VideoSection = () => {
  return (
    <div className="video-section" style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>
          فيديوهات عشانك يا بنوتى 🎬
        </h3>
        <p style={{ fontSize: '14px', color: '#999' }}>كل تفصيلة فيكي بتمثل لي دنيا</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', maxWidth: '600px' }}>
        {videos.map((vid, i) => (
          <motion.div
            key={i}
            className="video-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            style={{ width: '100%' }}
          >
            <video 
              controls 
              playsInline 
              style={{ width: '100%', borderRadius: '16px', border: '2px solid rgba(255,107,138,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            >
              <source src={vid} type="video/mp4" />
            </video>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
