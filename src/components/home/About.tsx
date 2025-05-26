'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="bg-[#F3787B] py-20 px-6 md:px-20 text-white font-bold font-Futura">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">
        
        {/* Left Text Section */}
        <motion.div
          className="flex-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-Futura leading-tight mb-3"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Us
          </motion.h1>

          <motion.hr
            style={{
              height: '5px',
              width: '190%',
              borderWidth: 0,
              color: 'white',
              backgroundColor: 'white'
            }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.p
            className="text-lg md:text-2xl leading-relaxed font-bold mt-16"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Al Sharif Group has carved a niche for itself as one of the most esteemed shipping agencies in the Kingdom of Bahrain. Our strategic partnership with the world’s leading shipping lines and forwarders enables us to deliver a wide array of quality services to our customers to meet their ever-growing needs. The group built its reputation as a most reliable customer-friendly service provider with unparalleled access to major ports and shipping hubs worldwide. Our current success is the result of over 100 years of dedication by our founders and a talented pool of employees.
          </motion.p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex-1 relative h-screen"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.img
            src="/images/about.png"
            alt="About Al Sharif Group"
            className="absolute top-[40px] left-[80px] right-[-158px] bottom-[30px] w-full h-full object-contain"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
