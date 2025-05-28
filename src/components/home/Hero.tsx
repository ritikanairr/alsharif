'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/heroship.jpg')" }}
      />

      {/* Content above background */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 pt-[330px]">
        <motion.h1
          className="text-white text-6xl font-Futura leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <b>LEADERS IN MARITIME <br /> SOLUTIONS AND SERVICES</b>
        </motion.h1>

        {/* Clickable Learn More section */}
        <motion.div
          onClick={scrollToNextSection}
          className="absolute bottom-10 cursor-pointer text-white text-center select-none"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') scrollToNextSection();
          }}
        >
          <p className="text-sm font-light">Learn More</p>
          <ArrowDown size={32} className="mx-auto mt-1" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
