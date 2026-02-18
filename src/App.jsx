import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import VideoSection from './components/VideoSection';

// Floating hearts background
const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 6,
    size: 10 + Math.random() * 8,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {hearts.map(h => (
        <motion.div
          key={h.id}
          style={{
            position: 'absolute',
            left: h.left,
            bottom: '-20px',
            fontSize: `${h.size}px`,
            opacity: 0,
          }}
          animate={{ y: [0, -window.innerHeight - 40], opacity: [0, 0.25, 0] }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: 'linear' }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

import { AudioProvider } from './context/AudioContext';

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <AudioProvider>
      <div style={{ position: 'relative', minHeight: '100vh', background: '#050505' }}>
        <FloatingHearts />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            {screen === 1 ? (
              <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Screen1 onNext={() => setScreen(2)} />
              </motion.div>
            ) : (
              <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Screen2 />
                <Screen3 />
                <VideoSection />
                <Screen4 onReset={() => setScreen(1)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
