import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/pp/pp1.jpg',
  '/images/pp/pp2.jpg',
  '/images/pp/pp3.jpg',
  '/images/pp/pp4.jpg',
  '/images/pp/pp5.jpg',
  '/images/pp/pp6.jpg',
  '/images/pp/pp7.jpg',
  '/images/pp/pp8.jpg',
];

const captions = [
  'Grey Mackenzie’s staff photo – Early 1930’s. (Moh’d Taher Al Sharif –second from left, front row)',
  'Grey Mackenzie’s staff photo – Early 1940’s. (Moh’d Taher Al Sharif – third from left, front row)',
  'Al Sharif House New Section North-West Built early 1940’s',
  'Mirza Al Sharif Greets the ruler of Bahrain H.H.SH. Salman - July 1953',
  'Moh’d Taher Al Sharif with H.H.SH. Isa bin Salman Al Khalifa – early 1960’s',
  'Al Sharif Family Photo – early 1930’s',
  'Manama Seaport 1940’s',
  'Office of Grey Mackenzie at Mirza Ismail’s House – Late 1890/s',
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
    <div className="bg-gray-200 rounded-3xl h-[300px] w-[500px] overflow-hidden relative shadow-lg">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="h-full w-full object-cover absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Caption Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 py-3">
        <p className="text-white text-lg font-medium">{captions[current]}</p>
      </div>
      </div>
    </div>
  );
};

export default Slideshow;
