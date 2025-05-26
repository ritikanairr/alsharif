
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Services = () => {
  const { service } = useParams<{ service: string }>();
  
  // Set default service if none is specified
  useEffect(() => {
    if (!service) {
      window.history.replaceState({}, '', '/services/shipping-agency');
    }
  }, [service]);

  // Sidebar navigation links
  const sidebarLinks = [
    { id: 'shipping-agency', label: 'Shipping Agency' },
    { id: 'freight-forwarding', label: 'Freight Forwarding' },
    { id: 'ship-chandling', label: 'Ship Chandling' },
    { id: 'ships-support', label: 'Ship\'s Support Services' },
    { id: 'stevedoring', label: 'Stevedoring Services' },
  ];

  // Content based on service
  const renderContent = () => {
    switch (service) {
      case 'shipping-agency':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 ">Shipping Agency</h2>
            <div className="mb-6">
              <img 
                src="/images/shipping-agency-large.jpg" 
                alt="Shipping Agency Services" 
                className="w-full rounded-lg mb-6"
              />
            </div>
            <p className="mb-4">
              Our vast experience has taught and prepared our teams to offer the best agency services to our principals, offering complete solution a ship may need while she is calling Bahrain.
            </p>
            <p className="mb-4">
              AG has a strong network of partners within the region which makes it a truly seamless experience for customers who are looking for a ONE STOP solution beyond Bahrain.
            </p>
            <p className="mb-4">
              The scope of our services includes comprehensive assistance to a wide range of vessels such as pure container vessels, PCC & PCTC ships, Break bulk, Bulk carriers, Cruise Lines, Naval Vessels, Tankers, Heavy lift carriers, livestock vessels and General cargo vessels which are owned and operated by world renowned international shipping lines.
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6">Our services:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Container Vessels</li>
              <li>General Cargo Vessels</li>
              <li>Break Bulk Carriers</li>
              <li>Bulk Carriers</li>
              <li>Tankers</li>
              <li>Cruise Ships</li>
              <li>Naval Vessels</li>
              <li>PCC & PCTC Ships</li>
            </ul>
          </div>
        );
      case 'freight-forwarding':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Freight Forwarding</h2>
            <div className="mb-6">
              <img 
                src="/images/freight-forwarding-large.jpg" 
                alt="Freight Forwarding Services" 
                className="w-full rounded-lg mb-6"
              />
            </div>
            <p className="mb-4">
              Our services include total door-to-door logistics solutions for all our customers across the globe. Today, Al Sharif Group has become an icon in the shipping industry for providing reliable freight forwarding services.
            </p>
            <p className="mb-4">
              We offer comprehensive freight forwarding solutions including air freight, sea freight, and land transportation. Our experienced team coordinates every aspect of your shipment, ensuring smooth and efficient delivery from origin to destination.
            </p>
            <p className="mb-4">
              Whether you're shipping standard containers or specialized cargo, our network of global partners allows us to provide seamless service worldwide.
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
        );
      // Add other service sections as needed
      default:
        return (
          <div className="text-center py-10">
            <p>Please select a service from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[90px]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4 text-sharif-red">Services</h3>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.id}
                to={`/services/${link.id}`}
                className={`block py-2 px-3 rounded-md transition-colors ${
                  service === link.id
                    ? 'bg-sharif-red text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 bg-white rounded-lg p-6 shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Services;
