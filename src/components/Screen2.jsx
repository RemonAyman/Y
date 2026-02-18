import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const Screen2 = () => {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // START DATE: 27-12-2025 (Future date? Or past? User said "since 27-12-2025 we are together")
    // If it's a future date, it should count DOWN. If it's a past date, it counts UP.
    // User said "Start of our journey", implying it might be a past date in their context or a future milestone they are waiting for.
    // However, usually "Since" implies past. But 2025 is future relative to now (2024/2026?).
    // Wait, current time is 2026-02-18. So 27-12-2025 is in the PAST.
    // So we calculate time ELAPSED since 27-12-2025.
    
    const startDate = new Date('2025-12-27T00:00:00');

    const tick = () => {
      const now = new Date();
      let diff = now - startDate; // Elapsed time

      if (diff < 0) {
        // If date is in future (e.g. system time is wrong or user meant future), count down
        diff = startDate - now; 
      }

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

        {/* Music Player */}
        <motion.div
          className="music-player"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>نور عيني</div>
            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>الأغنية اللي بتوصفنا 🎵</div>
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
          
          {/* Audio Element Hidden */}
          <audio ref={audioRef} loop>
            {/* Will need to update this src with actual file */}
            <source src="/song.mp3" type="audio/mp3" />
          </audio>
        </motion.div>
      </div>
    </div>
  );
};

export default Screen2;
