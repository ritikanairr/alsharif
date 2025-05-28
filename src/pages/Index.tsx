
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import ServiceCTA from "../pages/contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ServiceCTA />
    </div>
  );
};

export default Index;
