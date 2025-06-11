import { motion } from "framer-motion";

const Accreditations = () => {
  const accreditations = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      logo: '/images/iso.png',
      description: 'Al Sharif Group is ISO 9001:2015 accredited, demonstrating our commitment to quality management systems and continuous improvement.'
    },
    {
      id: 2,
      name: 'International Transport Intermediaries Club Ltd.',
      logo: '/images/itic.jpg',
      description: 'We are proud members of the International Transport Intermediaries Club Ltd. (ITIC), ensuring the highest standards of professional indemnity insurance.'
    },
    {
      id: 3,
      name: 'Bahrain Shipping Agents Association',
      logo: '/images/bsa.jpg',
      description: 'Al Sharif Group is an active member of the Bahrain Shipping Agents Association, collaborating with industry peers to improve shipping standards in Bahrain.'
    },
    {
      id: 4,
      name: 'International Air Transport Association',
      logo: '/images/iata.png',
      description: 'Our membership with IATA allows us to provide reliable air freight services and stay updated with international air transport regulations.'
    },
    {
      id: 5,
      name: 'World Cargo Alliance',
      logo: '/images/wca.png',
      description: 'As members of the World Cargo Alliance, we have access to a global network of logistics professionals, enabling us to offer worldwide services.'
    },
    {
      id: 6,
      name: 'WCA Projects Network',
      logo: '/images/wcap.png',
      description: 'Our membership in the WCA Projects Network enhances our capability to handle complex project cargo with specialized expertise.'
    }
  ];

  return (
    <div className="container mx-auto pt-24 px-4 py-12 font-Futura">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-slate-800 font-Futura">Accreditations & Memberships</span>
      </h2>
      <div className="h-[4px] w-[80%] bg-black mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {accreditations.map((item, index) => (
          <motion.div
            key={item.id}
            className="perspective w-full h-64"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="card w-full h-full rounded-lg shadow-lg bg-white">
              <div className="card-inner">
                {/* Front */}
                <div className="card-front bg-gray-100 flex items-center justify-center rounded-lg p-4">
                  <img src={item.logo} alt={item.name} className="object-contain max-h-full max-w-full" />
                </div>

                {/* Back */}
                <div className="card-back bg-white rounded-lg p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Accreditations;
