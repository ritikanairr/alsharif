
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    title: "Shipping Agency",
    description: "Comprehensive shipping agency services including vessel clearance, cargo operations, and crew management.",
    image: "/images/shipping-agency.jpg",
    path: "/services/shipping-agency"
  },
  {
    id: 2,
    title: "Ship Chandling",
    description: "Supply of provisions, stores, spare parts, and other necessities required by ships and their crew.",
    image: "/images/ship-chandling.jpg",
    path: "/services/ship-chandling"
  },
  {
    id: 3,
    title: "Stevedoring",
    description: "Professional loading and unloading of cargo to and from vessels with efficiency and safety.",
    image: "/images/stevedoring.jpg",
    path: "/services/stevedoring"
  },
  {
    id: 4,
    title: "Ship Support",
    description: "Complete support services for vessels including maintenance, repairs, and technical assistance.",
    image: "/images/ship-support.jpg",
    path: "/services/ships-support"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-sharif-red/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sharif-darkgray">Our Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide a wide range of maritime services tailored to meet the specific needs of our clients, ensuring efficiency, reliability, and excellence in every aspect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map(service => (
            <div key={service.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-sharif-blue">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-sharif-red p-0 hover:bg-transparent group"
                  onClick={() => handleLearnMore(service.path)}
                >
                  <span className="group-hover:underline">Learn More</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-sharif-red hover:bg-red-700"
            onClick={() => navigate('/services')}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
