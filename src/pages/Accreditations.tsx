
const Accreditations = () => {
  // Array of accreditation objects
  const accreditations = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      logo: '/images/iso.png',
      description: 'Al Sharif Group is an ISO 9001:2015 accredited company, demonstrating our commitment to quality management systems and continuous improvement.'
    },
    {
      id: 2,
      name: 'International Transport Intermediaries Club Ltd.',
      logo: '/images/itic-logo.png',
      description: 'We are proud members of the International Transport Intermediaries Club Ltd. (ITIC), ensuring the highest standards of professional indemnity insurance.'
    },
    {
      id: 3,
      name: 'Bahrain Shipping Agents Association',
      logo: '/images/bsaa-logo.png',
      description: 'Al Sharif Group is an active member of the Bahrain Shipping Agents Association, collaborating with industry peers to improve shipping standards in Bahrain.'
    },
    {
      id: 4,
      name: 'International Air Transport Association',
      logo: '/images/iata-logo.png',
      description: 'Our membership with IATA allows us to provide reliable air freight services and stay updated with international air transport regulations.'
    },
    {
      id: 5,
      name: 'World Cargo Alliance',
      logo: '/images/wca-logo.png',
      description: 'As members of the World Cargo Alliance, we have access to a global network of logistics professionals, enabling us to offer worldwide services.'
    },
    {
      id: 6,
      name: 'WCA Projects Network',
      logo: '/images/wca-projects-logo.png',
      description: 'Our membership in the WCA Projects Network enhances our capability to handle complex project cargo with specialized expertise.'
    }
  ];

  return (
    <div className="container  mx-auto pt-[90px] px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Accreditations & Memberships</h1>
      <div className="h-1 w-20 bg-sharif-red mb-8"></div>
      
      <p className="text-gray-700 mb-8 max-w-4xl">
        As a company whose leaders strongly believe in quality and well laid out principles, we are an ISO 9001:2015 accredited company. The company is a member of leading transport and freight bodies like the International Transport Intermediaries Club Ltd., UK and Bahrain Shipping Agents Association.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {accreditations.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
            <div className="h-48 bg-gray-100 flex items-center justify-center p-6">
              <img 
                src={item.logo} 
                alt={`${item.name} Logo`} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accreditations;
