'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const ShipModel = () => {
  const ship = useGLTF('/container_ship/scene.gltf');
  const ref = useRef<THREE.Group>(null);

  return (
    <primitive
      ref={ref}
      object={ship.scene}
      scale={0.4}
      position={[17, -4, 3]}
      rotation={[0, 11.05, 0]}
    />
  );
};

const CameraController = ({ scrollY }: { scrollY: number }) => {
  const controlsRef = useRef<any>(null);

  useFrame(() => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    const target = controlsRef.current.target;

    const panX = scrollY * 0.01;

    camera.position.x = panX;
    target.x = panX;

    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enableDamping={false}
      enableRotate={false}
      enablePan={false}
      minDistance={10}
      maxDistance={50}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const ShipCanvas = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const handleLearnMore = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
        duration: 0.6
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6
      }
    },
  };

  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="h-[160vh] bg-[#E0F7FA]">
      <div className="sticky top-0 h-[160vh] w-full overflow-hidden touch-none">
        <div className="relative w-full h-full">
          <Canvas camera={{ position: [0, 5, 30], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />
            <ShipModel />
            <CameraController scrollY={scrollY} />
          </Canvas>

          <motion.div
            ref={containerRef}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="absolute top-[10%] left-[3%] md:left-[5%] z-10 p-4 md:p-6 rounded-lg max-w-[90%] md:max-w-[600px]"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-Futura leading-tight mb-3 text-black whitespace-nowrap"
            >
              Our Services
            </motion.h1>

            <motion.hr
              variants={itemVariants}
              className="w-[200%] sm:w-[250%] md:w-[280%] text-left ml-0 mt-2 mb-6 md:mb-8 border-none h-[3px] md:h-[5px] bg-black"
            />

            <div className="relative">
              {/* Line and Dots aligned in same space */}
              <div className="absolute left-2.5 md:left-[24.3px] top-0 bottom-0 w-0.5 bg-black z-0"></div>

              <div className="space-y-6 md:space-y-8">
                {serviceData.map((service) => {
                  const [itemRef, itemInView] = useInView({
                    triggerOnce: true,
                    threshold: 0.2,
                  });

                  return (
                    <motion.div
                      key={service.id}
                      ref={itemRef}
                      variants={itemVariants}
                      initial="hidden"
                      animate={itemInView ? "visible" : "hidden"}
                      className="relative flex items-start"
                    >
                      {/* Dot */}
                      <div className="z-10 w-4 h-4 bg-black rounded-full flex-shrink-0 relative left-2.5 md:left-[18px]"></div>

                      {/* Content */}
                      <div className="ml-6 md:ml-8 flex-grow">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-md max-w-xs md:max-w-md">
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{service.title}</h3>
                          <p className="text-gray-600 mb-3 text-xs md:text-sm leading-relaxed">{service.description}</p>
                          <Button
                            variant="ghost"
                            className="text-red-600 p-0 hover:bg-transparent group text-xs md:text-sm"
                            onClick={() => handleLearnMore(service.path)}
                          >
                            <span className="group-hover:underline">Learn More</span>
                            <ArrowRight className="ml-1 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShipCanvas;
