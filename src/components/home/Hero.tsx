import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/images/heroship.jpg')" }}
  />

  {/* Content above background */}
  <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 pt-[330px]">
    <h1 className="text-white text-6xl font-Futura  leading-tight">
     <b> LEADERS IN MARITIME <br /> SOLUTIONS AND SERVICES </b>
    </h1>
    <div className="absolute bottom-10 text-white text-center animate-bounce">
      <p className="text-sm font-light">Learn More</p>
      <p className="text-2xl">↓</p>
    </div>
  </div>
</section>

  );
};

export default Hero;
