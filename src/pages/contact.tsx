import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const ServiceCTA: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: 'url(/images/footer.jpg)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl font-bold font-Futura mb-6"
      >
        Want our services?
      </motion.h2>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        onClick={() => navigate('/contact-us')}
        className="bg-white text-black text-lg font-medium py-2 px-6 font-Futura rounded-full hover:bg-gray-200 transition"
      >
        Contact us
      </motion.button>
    </div>
  );
};

export default ServiceCTA;
