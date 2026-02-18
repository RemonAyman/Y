import { motion } from 'framer-motion';
import React from 'react';
import videoSource from '../assets/video.mp4';

const VideoPlayer = () => {
  return (
    <section className="section-padding bg-rose-pink/5">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="handwritten text-4xl text-warm-peach mb-4 block">فيديو عشانك..</span>
            <h3 className="text-3xl md:text-5xl font-black text-text-dark">كل تفصيلة فيكي بتمثل لي دنيا</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl organic-card p-4 bg-white/40"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          >
            <div className="rounded-[inherit] overflow-hidden aspect-video border-8 border-white/80 shadow-2xl">
              <video controls className="w-full h-full object-cover">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <p className="text-xl text-text-soft italic max-w-md">
            "الفيديو ده بيفكرني دايماً بضحكتك اللي بتديني أمل في كل يوم جديد."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
