import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Services = () => {
  const { service } = useParams<{ service: string }>();
  const navigate = useNavigate();

  // Redirect to default service if none is selected
  useEffect(() => {
    if (!service) {
      navigate('/services/shipping-agency', { replace: true });
    }
  }, [service, navigate]);

  const sidebarSections = [
    { id: 'shipping-agency', label: 'Shipping Agency', page: '/services/shipping-agency', image: '/images/agency.png' },
    { id: 'freight-forwarding', label: 'Freight Forwarding', page: '/services/freight-forwarding', image: '/images/freightt.png' },
    { id: 'ship-chandling', label: 'Ship Chandling', page: '/services/ship-chandling', image: '/images/chandling.png' },
    { id: 'ships-support', label: "Ship's Support", page: '/services/ships-support', image: '/images/support.png' },
    { id: 'stevedoring', label: 'Stevedoring', page: '/services/stevedoring', image: '/images/stevedoring.png' },
  ];

  const navigateToSection = (page: string) => navigate(page);

  const contentMap: Record<string, JSX.Element> = {
    'shipping-agency': (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 font-Futura">Shipping Agency</h2>
        <div className="mb-6">
          <img src="/images/age.jpg" alt="Shipping Agency Services" className="w-full h-auto rounded-2xl mb-6" />
        </div>
        <p className="mb-4 text-gray-700">
          Our vast experience has taught and prepared our teams to offer the best agency services to our principals, offering a complete solution a ship may need while she is calling Bahrain.
        </p>
        <p className="mb-4 text-gray-700">
          AG has a strong network of partners within the region which makes it a truly seamless experience for customers who are looking for a ONE STOP solution beyond Bahrain.
        </p>
        <p className="mb-4 text-gray-700">
          The scope of our services includes comprehensive assistance to a wide range of vessels such as pure container vessels, PCC & PCTC ships , Break bulk, Bulk carriers, Cruise Lines, Naval Vessels, Tankers, Heavy lift carriers, livestock vessels and General cargo vessels which are owned and operated by world renowned international shipping lines.
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-6">Our services:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Container Vessels</li>
          <li>General Cargo Vessels</li>
          <li>NVOCC / ISO Tanks</li>
          <li>Feeder Operations</li>
          <li>PCC & PCTC</li>
          <li>Cruise Liners</li>
          <li>Tanker Vessels</li>
          <li>Bulk/Break-Bulk</li>
          <li>Livestock Vessels</li>
          <li>Tugs & Barges</li>
          <li>Off Shore Vessels</li>
          <li>JU Rigs & Heavy Lift Carriers</li>
          <li>Naval Services</li>
          <li>Dry Docking</li>
        </ul>
      </div>
    ),
    'freight-forwarding': (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 font-Futura">Freight Forwarding</h2>
        <div className="mb-6">
          <img src="/images/freight.png" alt="Freight Forwarding Services" className="w-full rounded-lg mb-6" />
        </div>
        <p className="mb-4 text-gray-700">
          Our services include total door-to-door logistics solutions for all our customers...
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-6">Our freight forwarding services include:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Air Freight Services</li>
          <li>Sea Freight Services</li>
          <li>Land Transportation</li>
          <li>Multimodal Transportation</li>
          <li>Project Cargo Handling</li>
          <li>Customs Clearance</li>
          <li>Warehousing and Distribution</li>
          <li>Cargo Insurance</li>
        </ul>
      </div>
    ),
    'ship-chandling': (
      <div className="animate-fade-in text-center py-10 text-gray-600">Content for Ship Chandling coming soon.</div>
    ),
    'ships-support': (
      <div className="animate-fade-in text-center py-10 text-gray-600">Content for Ship's Support Services coming soon.</div>
    ),
    'stevedoring': (
      <div className="animate-fade-in text-center py-10 text-gray-600">Content for Stevedoring Services coming soon.</div>
    ),
  };

  const currentContent = contentMap[service || ''] || (
    <div className="animate-fade-in text-center py-10 text-gray-600">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <p>Please select a service from the sidebar.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Main container with responsive flex direction and scaling */}
      <div className="container mx-auto px-4 md:px-9 py-8 flex flex-col md:flex-row gap-7 scale-[0.94] md:scale-100">
        
        {/* Sidebar: horizontal scroll on mobile, vertical sticky on desktop */}
        <aside className="md:w-50 flex-shrink-0 md:sticky md:top-[calc(64px+1rem)] md:self-start md:h-[calc(100vh-20px)] bg-white border-2 border-black rounded-2xl p-4 md:p-6 shadow-lg font-Futura ml-0 md:ml-9 overflow-x-auto md:overflow-visible flex md:flex-col gap-4 md:gap-6">
          {/* The map is now a DIRECT child of the flex container */}
          {sidebarSections.map((item) => (
            <div key={item.id} className="flex flex-col items-center min-w-[80px] md:min-w-0">
              <div
                onClick={() => navigateToSection(item.page)}
                className={`cursor-pointer w-[80px] h-[80px] md:w-[93px] md:h-[93px] rounded-2xl flex flex-col items-center justify-center mb-1 md:mb-2 transition-colors duration-200 ${
                  service === item.id ? 'bg-black' : 'bg-transparent hover:bg-gray-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mb-1"
                />
                <span
                  className={`text-[10px] md:text-xs font-semibold text-center select-none ${
                    service === item.id ? 'text-gray-50' : 'text-gray-900'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content with responsive font-size */}
        <main className="flex-1 min-w-0 font-roboto font-normal text-[15px] md:text-[17px] leading-[120%] tracking-[0] align-middle">
          {/* Responsive padding */}
          <div className="bg-white rounded-lg p-4 md:p-6">{currentContent}</div>
        </main>
      </div>
    </div>
  );
};

export default Services;