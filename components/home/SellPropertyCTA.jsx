'use client';

import React from 'react';
import { Button, Card, CardBody } from "@heroui/react";
import { Megaphone } from "lucide-react";

export default function SellPropertyCTA() {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <Card className="border-none shadow-sm bg-white overflow-hidden py-10 px-8 md:px-16">
        <CardBody className="p-0 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-grow space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Want to sell your property?
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-lg">
              If you have any property for sale you can post it on our site for free with few easy steps.
            </p>
            <Button 
              size="lg" 
              className="bg-[#1B5E20] text-white font-bold px-8 rounded-lg mt-4 uppercase tracking-wide"
            >
              POST PROPERTY
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative w-full md:w-[450px] h-[250px] flex items-center justify-center">
            {/* Simple SVG/Illustration Mockup since I cannot generate a specific multi-element illustration perfectly here */}
            <div className="relative">
              {/* House background icon/shape */}
              <div className="w-64 h-64 bg-slate-50 rounded-full flex items-center justify-center opacity-50">
                <div className="w-48 h-48 bg-[#4CAF50]/10 rounded-2xl rotate-45" />
              </div>
              
              {/* Person & Megaphone Illustration Mockup using an image */}
              <img 
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80" 
                alt="Post Property Illustration" 
                className="absolute inset-0 w-full h-full object-contain rounded-2xl"
              />

              {/* Floating "SALE" Badge */}
              <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-[#4CAF50] text-white font-black text-3xl px-6 py-2 rounded-lg shadow-xl uppercase">
                SALE
              </div>

              {/* Megaphone Icon */}
              <div className="absolute top-10 right-0 bg-white p-3 rounded-full shadow-lg border border-slate-100">
                <Megaphone className="w-8 h-8 text-[#1B5E20]" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
