import { motion } from 'framer-motion';
import React from 'react';
import videoSource from '../assets/video.mp4';
import video2 from '../assets/WhatsApp Video 2026-03-19 at 19.08.58.mp4';
import video3 from '../assets/WhatsApp Video 2026-03-19 at 19.07.58.mp4';

const videos = [videoSource, video2, video3];

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
            <span className="handwritten text-4xl text-warm-peach mb-4 block">فيديوهات عشانك..</span>
            <h3 className="text-3xl md:text-5xl font-black text-text-dark">كل تفصيلة فيكي بتمثل لي دنيا</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {videos.map((vid, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] organic-card p-3 bg-white/40"
                style={{ borderRadius: '24px' }}
              >
                <div className="rounded-[inherit] overflow-hidden border-4 border-white/80 shadow-2xl bg-neutral-900">
                  <video controls className="w-full h-[60vh] md:h-[500px] object-contain">
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-text-soft italic max-w-md">
            "الفيديوهات دي بتفكرني دايماً بضحكتك اللي بتديني أمل في كل يوم جديد."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
