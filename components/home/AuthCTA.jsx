'use client';

import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Link } from "@heroui/react";
import { MapPin, PiggyBank } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    price: "$695,000",
    specs: "4 bd | 3 ba | 3,102 sqft | House for Sale",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80"
  },
  {
    id: 2,
    price: "$450,000",
    specs: "3 bd | 2 ba | 2,100 sqft | Apartment for Sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80"
  },
  {
    id: 3,
    price: "$820,000",
    specs: "5 bd | 4 ba | 4,500 sqft | Luxury Villa",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80"
  }
];

export default function AuthCTA() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 bg-white px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side: Text and CTA */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Get home recommendations
          </h2>
          <p className="text-slate-500 text-lg">
            Sign in for a more personalized experience.
          </p>
          <Button
            variant="bordered"
            color="primary"
            size="lg"
            className="px-10 font-bold border-2"
          >
            <Link href="/auth" className="text-inherit">
              Sign in
            </Link>
          </Button>
        </div>

        {/* Right Side: Slideshow Illustration */}
        <div className="relative h-[450px] flex items-center justify-center">
          {/* Static Stacked Cards Background */}


          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-72 h-80 z-10"
            >
              <Card className="w-full h-full shadow-2xl border-none rounded-2xl overflow-visible">
                <CardBody className="p-0">
                  <div
                    className="h-40 bg-cover bg-center rounded-t-2xl transition-all duration-500"
                    style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
                  />
                  <div className="p-4 space-y-2">
                    <p className="text-xl font-bold text-slate-900">{slides[currentSlide].price}</p>
                    <div className="flex gap-2 text-[10px] text-slate-500 font-medium">
                      {slides[currentSlide].specs}
                    </div>
                    {/* Skeleton-like bars for card details */}
                    <div className="h-2 w-full bg-slate-50 rounded-full mt-4" />
                    <div className="h-2 w-2/3 bg-slate-50 rounded-full" />
                  </div>
                </CardBody>

                {/* Floating Recommendation Labels - Kept Static for Context */}
                <div className="absolute -left-12 top-10 bg-white rounded-full shadow-xl p-2 pr-6 flex items-center gap-3 border border-slate-100 animate-bounce-slow">
                  <div className="w-10 h-10 bg-[#00695C] rounded-full flex items-center justify-center text-white">
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <p className="font-bold text-slate-900">Recommended homes</p>
                    <p className="text-slate-500">based on your monthly budget</p>
                  </div>
                </div>

                <div className="absolute -left-16 top-32 bg-white rounded-full shadow-xl p-2 pr-6 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 bg-[#FF6D00] rounded-full flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <p className="font-bold text-slate-900">Recommended homes</p>
                    <p className="text-slate-500">based on your preferred location</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary w-4' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
