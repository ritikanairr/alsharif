'use client';

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Services from "./pages/Services"; // ✅ Services will handle its own <Canvas> internally
import Accreditations from "./pages/Accreditations";
import RelatedInfo from "./pages/RelatedInfo";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ServiceCTA from "./pages/contact";

import LoadingScreen from "./components/home/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
         <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:section" element={<Profile />} />
                <Route path="/services" element={<Services />} /> 
                <Route path="/services/:service" element={<Services />} />
                <Route path="/contact:" element={<ServiceCTA />} />
                <Route path="/accreditations" element={<Accreditations />} />
                <Route path="/related-info" element={<RelatedInfo />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
