import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useAudio } from '../context/AudioContext';

const Screen2 = () => {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  // Use Global Audio Context
  const { isPlaying, togglePlay, currentSongIndex, playSong, playlist } = useAudio();

  useEffect(() => {
    // START DATE: 27-12-2025
    const startDate = new Date('2025-12-27T00:00:00');

    const tick = () => {
      const now = new Date();
      let diff = now - startDate;
      if (diff < 0) diff = startDate - now;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      diff -= years * (1000 * 60 * 60 * 24 * 365.25);
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      diff -= months * (1000 * 60 * 60 * 24 * 30.44);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);
      
      setTime({ years, months, days, hours, minutes, seconds });
    };

    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  const items = [
    { value: time.years, label: 'سنة' },
    { value: time.months, label: 'شهر' },
    { value: time.days, label: 'يوم' },
    { value: time.hours, label: 'ساعة' },
    { value: time.minutes, label: 'دقيقة' },
    { value: time.seconds, label: 'ثانية' },
  ];

  const handleSongSelect = (index) => {
    playSong(index);
    setShowPlaylist(false);
  };

  return (
    <div className="screen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '24px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ color: '#ff6b8a', fontSize: '20px' }}
            >♥</motion.span>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#ffe0e8' }}>حكايتنا</h2>
          </div>
          <p style={{ fontSize: '13px', color: '#888' }}>كل لحظة معاكي هي عمر جديد</p>
        </motion.div>

        <p className="gold-text">منذ أن بدأت القصة (27-12-2025)</p>

        <div className="counter-grid">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="counter-box"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
            >
              <div className="counter-number">{item.value}</div>
              <div className="counter-label">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Music Player UI - Controls ONLY */}
        <motion.div
          className="music-player"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ position: 'relative' }}
        >
          <div style={{ textAlign: 'right', flex: 1, marginRight: '16px' }}>
            <div 
              onClick={() => setShowPlaylist(!showPlaylist)}
              style={{ fontWeight: 700, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' }}
            >
              {playlist[currentSongIndex].title} <span style={{ fontSize: '10px' }}>▼</span>
            </div>
            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>
              {isPlaying ? 'جاري التشغيل... 🎵' : 'اضغط للتشغيل ▶'}
            </div>
          </div>
          
          <div 
            className="music-btn" 
            onClick={togglePlay}
            style={{ cursor: 'pointer' }}
          >
            {isPlaying ? (
              <div className="music-bars">
                <div className="music-bar"></div>
                <div className="music-bar"></div>
              </div>
            ) : (
               <span style={{ fontSize: '18px', marginLeft: '2px' }}>▶</span>
            )}
          </div>

          {/* Playlist Dropdown */}
          <AnimatePresence>
            {showPlaylist && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  right: 0,
                  left: 0,
                  marginBottom: '10px',
                  background: '#222',
                  border: '1px solid #333',
                  borderRadius: '16px',
                  padding: '8px',
                  zIndex: 20,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                {playlist.map((song, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSongSelect(idx)}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      background: currentSongIndex === idx ? 'rgba(255, 59, 92, 0.1)' : 'transparent',
                      color: currentSongIndex === idx ? '#ff3b5c' : '#ccc',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{song.title}</span>
                    {currentSongIndex === idx && <span>🎵</span>}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Screen2;
