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
    { id: 'shipping-agency', label: 'Shipping Agency', image: '/images/agency.png' },
    { id: 'freight-forwarding', label: 'Freight Forwarding', image: '/images/freightt.png' },
    { id: 'ship-chandling', label: 'Ship Chandling', image: '/images/chandling.png' },
    { id: 'ships-support', label: "Ship's Support Services", image: '/images/support.png' },
    { id: 'stevedoring', label: 'Stevedoring Services', image: '/images/stevedoring.png' },
  ];

  const contentMap: Record<string, JSX.Element> = {
    'shipping-agency': (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 font-Futura">Shipping Agency</h2>
        <div className="mb-6">
          <img src="/images/age.jpg" alt="Shipping Agency Services" className="w-[700px] h-[400px] rounded-2xl mb-6" />
        </div>
        <p className="mb-4">
Our vast experience has taught and prepared our teams to offer the best agency services to our principals, offering complete solution a ship may need while she is calling Bahrain.
        </p>
        <p className="mb-4">
AG has a strong network of partners within the region which makes it a truly seamless experience for customers who are looking for a ONE STOP solution beyond Bahrain.
        </p>
        <p className="mb-4">
The scope of our services includes comprehensive assistance to a wide range of vessels such as pure container vessels, PCC & PCTC ships , Break bulk, Bulk carriers, Cruise Lines, Naval Vessels, Tankers, Heavy lift carriers, livestock vessels  and General cargo vessels which are owned and operated by world renowned international shipping lines.        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Our services:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Container Vessels</li>
          <li>General Cargo Vessels</li>
          <li>NVOCC / ISO Tanks</li>
          <li>Feeder Operations</li>
          <li>PCC & PCTC</li>
          <li>Cruise Liners</li>
          <li>Tanker Vessels</li>
          <li>Bulk/Break-Bulk </li>
          <li>Livestock Vessels </li>
          <li>Tugs & Barges </li>
          <li>Off Shore Vessels </li>
          <li>JU Rigs & Heavy Lift Carriers </li>
          <li>Naval Services </li>
           <li>Dry Docking</li>
        </ul>
      </div>
    ),
    'freight-forwarding': (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold mb-6">Freight Forwarding</h2>
        <div className="mb-6">
          <img src="/images/freight.png" alt="Freight Forwarding Services" className="w-full rounded-lg mb-6" />
        </div>
        <p className="mb-4">
          Our services include total door-to-door logistics solutions for all our customers...
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-6">Our freight forwarding services include:</h3>
        <ul className="list-disc pl-5 space-y-2">
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
    // Add remaining pages as needed
  };

  const currentContent = contentMap[service || ''] || (
    <div className="text-center py-10 text-gray-600">Service not found.</div>
  );

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-9 py-8 flex gap-7">
        <aside className="w-50 flex-shrink-0 sticky top-[calc(64px+1rem)] self-start h-[calc(100vh-20px)] bg-white border-2 border-black rounded-2xl p-6 shadow-lg font-Futura ml-9">
          <div className="space-y-6">
            {sidebarSections.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div
                  onClick={() => navigate(`/services/${item.id}`)}
                  className={`cursor-pointer w-[93px] h-[93px] rounded-2xl flex flex-col items-center justify-center mb-2 ${
                    service === item.id ? 'bg-black' : 'bg-transparent'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-12 h-12 rounded-full object-cover mb-1"
                  />
                  <span
                    className={`text-xs font-semibold text-center select-none ${
                      service === item.id ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 min-w-0 font-roboto font-normal text-[17px] leading-[120%] tracking-[0] align-middle weight-400">
          <div className="bg-white rounded-lg p-6">{currentContent}</div>
        </main>
      </div>
    </div>
  );
};

export default Services;
