"use client";

import React from "react";
import { motion } from "framer-motion";

const RelatedInfo = () => {
  const infoSections = [
    {
      id: 1,
      title: 'The Kingdom of Bahrain',
      text: 'The Kingdom of Bahrain is an island nation situated near the western shores of the Arabian Gulf. It is an archipelago of 33 Islands. Saudi Arabia lies to its west and is connected to Bahrain by the King Fahd causeway. Bahrain is home to one of the most diversified economies in the Arabian Gulf. Numerous multinational firms with businesses in the Gulf have chosen Bahrain as their hub due to its highly developed communication and transport facilities. Bahrain offers the shortest transit time in the Gulf between its seaport, airport and the logistics processing zone to enable more efficient and faster processing of trade goods.',
      link: 'https://bahrain.com/',
      linkText: 'For more information',
      images: ['/images/bahrain.jpg']
    },
    {
      id: 2,
      title: 'Khalifa bin Salman Port',
      text: 'Khalifa bin Salman Port is located in the Hidd Industrial Area. The port is only 13 kms away from the Bahrain International Airport and is linked to Mina Salman, the old port, by a 5 km purpose-built causeway.',
      link: 'https://www.mtt.gov.bh/khalifa-bin-salman-port',
      linkText: 'For more information',
      images: ['/images/port.avif']
    },
    {
      id: 3,
      title: 'APM Terminals Bahrain',
      text: 'APM Terminals Bahrain operates the Khalifa Bin Salman Port. It is a multi-purpose facility for domestic cargo, cruise traffic, and a transshipment hub for the ever-growing shipping market in the Gulf.',
      link: 'http://www.apmterminals.com/operations/africa-middle-east/bahrain',
      linkText: 'For more information',
      images: ['/images/apm.png']
    },
    {
      id: 4,
      title: 'Ministry of Transportation',
      text: 'The Ministry of Transportation is responsible for the development, and regulation of the Kingdom\'s transportation, and telecommunications infrastructure as well as systems.',
      link: 'https://www.mtt.gov.bh',
      linkText: 'For more information',
      images: ['/images/mtt.png']
    },
    {
      id: 5,
      title: 'Ports and Maritime Affairs',
      text: 'Ports and Maritime Affairs focuses its efforts on ensuring that the national industry\'s legal framework, facilities, services and operations meet all international standards.',
      link: 'https://www.mtt.gov.bh/ports-and-maritime',
      linkText: 'For more information',
      images: ['/images/pma.jpg']
    }
  ];

  const firstTwo = infoSections.slice(0, 2);
  const rest = infoSections.slice(2);

  // Animation variants: start below with opacity 0, end at position with opacity 1
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
   const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 mt-6 font-Futura">
      <div className="container mx-auto px-4">
        {/* Animate heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800 font-Futura">Related Info</span>
          </h2>
          <div className="h-[4px] w-[80%] bg-black from-primary to-accent mb-8"></div>
        </motion.div>

        
<div className="space-y-12">
          {/* Full-width cards for first two */}
          {firstTwo.map((section) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.text}</p>
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sharif-red hover:underline"
                >
                  {section.linkText}
                </a>
              </div>

              {section.images && section.images.length > 0 && (
                <div
                  className={`grid grid-cols-1 ${
                    section.images.length > 1 ? "md:grid-cols-2" : ""
                  } ${section.images.length >= 4 ? "lg:grid-cols-4" : ""} gap-4 p-6 pt-0`}
                >
                  {section.images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden shadow-sm">
                      <img
                        src={img}
                        alt={`${section.title} - Image ${idx + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Grid layout for smaller side-by-side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rest.map((section) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.text}</p>
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sharif-red hover:underline"
                >
                  {section.linkText}
                </a>
              </div>

              {section.images && section.images.length > 0 && (
                <div className="p-6 pt-0">
                  <img
                    src={section.images[0]}
                    alt={`${section.title} - Image`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInfo;
