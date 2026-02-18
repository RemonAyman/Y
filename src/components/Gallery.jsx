import { motion } from 'framer-motion';
import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';

const Gallery = () => {
  const images = [
    { src: photo1, title: "بنوتى أشطر بنوتة", desc: "كل مجهود بتعمليه بكون فخور بيه." },
    { src: photo2, title: "ضحكتك بتطمن قلبي", desc: "الحياة جنبك طعمها مختلف يا روحي." }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="handwritten text-4xl block mb-4"
          >
            ذكرياتنا سوا..
          </motion.span>
          <h2 className="text-4xl md:text-6xl text-text-dark font-black">أحلى لحظات حياتنا</h2>
        </div>

        <div className="space-y-32">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <motion.div 
                whileHover={{ rotate: index % 2 === 0 ? -2 : 2, scale: 1.02 }}
                className="flex-1 w-full max-w-lg"
              >
                <div className="organic-card overflow-hidden p-3 bg-white/50 backdrop-blur-sm">
                  <div className="rounded-[inherit] overflow-hidden aspect-[4/5]">
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-right space-y-6">
                <h3 className="text-3xl md:text-5xl text-rose-pink font-black">{img.title}</h3>
                <p className="text-xl md:text-2xl text-text-soft leading-relaxed max-w-md mx-auto md:mx-0">
                  {img.desc}
                </p>
                <div className="pt-4 flex justify-center md:justify-start gap-2">
                  <span className="text-rose-pink">❤️</span>
                  <span className="text-warm-peach">✨</span>
                  <span className="text-champagne">💖</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
