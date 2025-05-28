import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: 'url(/images/footer.jpg)' }} 
    >
      <h2 className="text-3xl font-bold font-Futura mb-6">Want our services?</h2>
      <button
        onClick={() => navigate('/contact-us')}
        className="bg-white text-black text-lg font-medium py-2 px-6 font-Futura rounded-full hover:bg-gray-200 transition"
      >
        Contact us
      </button>
    </div>
  );
};

export default ServiceCTA;
