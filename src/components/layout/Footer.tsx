import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  // Refs for each section to detect when they enter viewport
  const companyRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const companyInView = useInView(companyRef, { once: true, margin: '-100px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const contactInView = useInView(contactRef, { once: true, margin: '-100px' });

  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <footer className="relative text-white pt-12 pb-6 overflow-hidden font-Futura">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#172323] font-Futura"
        aria-hidden="true"
      ></div>

      {/* Content Layer */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <motion.div
            ref={companyRef}
            initial="hidden"
            animate={companyInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="space-y-4"
          >
            <h3 className="text-gray-50 text-2xl font-bold mb-4">Al Sharif Group</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <span className="mr-2">Phone:</span>
                <span>+973 17515050</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">Fax:</span>
                <span>+973 17911321</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">Mail:</span>
                <a href="mailto:sales@shippingbahrain.com" className="hover:text-sharif-red transition-colors">
                  sales@shippingbahrain.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services/shipping-agency" className="hover:text-sharif-red transition-colors">
                  Shipping Agency
                </Link>
              </li>
              <li>
                <Link to="/services/freight-forwarding" className="hover:text-sharif-red transition-colors">
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <Link to="/services/ship-chandling" className="hover:text-sharif-red transition-colors">
                  Ship Chandling
                </Link>
              </li>
              <li>
                <Link to="/services/ships-support" className="hover:text-sharif-red transition-colors">
                  Ship's Support Services
                </Link>
              </li>
              <li>
                <Link to="/services/stevedoring" className="hover:text-sharif-red transition-colors">
                  Stevedoring Services
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Contact us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Al Sharif Group W.L.L.</p>
              <p>Al Sharif Holdings Building,</p>
              <p>Bldg No. 1315A, Road 114,</p>
              <p>Block 101, Hidd,</p>
              <p>Bahrain Investment Gateway Island,</p>
              <p>Kingdom of Bahrain.</p>
            </address>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">© {new Date().getFullYear()} Al Sharif Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
