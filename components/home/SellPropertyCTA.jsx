'use client';

import React from 'react';
import { Button, Card, CardBody, Link, Image } from "@heroui/react";

export default function SellPropertyCTA() {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* Added overflow-hidden to Card and removed potential layout shifts */}
      <Card className="border-none shadow-sm bg-white overflow-hidden py-10 px-8 md:px-16 relative">
        <CardBody className="p-0 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          
          {/* Left Content */}
          <div className="flex-1 space-y-4 text-center md:text-left z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Want to sell your property?
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-lg">
              If you have any property for sale you can post it on our site for free with few easy steps.
            </p>
            <Button 
              size="lg" 
              className="bg-[#005162] text-white font-bold px-8 rounded-lg mt-4 uppercase tracking-wide"
            >
              <Link href="/sell-your-property" className="text-white">
                POST PROPERTY
              </Link>
            </Button>
          </div>

          {/* Right Illustration - Cleaned up to prevent edge-lines */}
          <div className="relative w-full md:w-[400px] h-[250px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Background Decoration */}
              <div className="absolute w-64 h-64 bg-slate-50 rounded-full opacity-50 flex items-center justify-center">
                <div className="w-48 h-48 bg-[#005162]/10 rounded-2xl rotate-45" />
              </div>
              
              {/* Image with object-cover and forced no-border */}
              <img 
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80" 
                alt="Post Property Illustration" 
                className="relative z-10 w-[300px] h-[200px] object-cover rounded-2xl shadow-lg border-none"
                style={{ border: 'none', outline: 'none' }} 
              />

              {/* "SALE" Badge */}
              <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-[#005162] text-white font-black text-2xl md:text-3xl px-6 py-2 rounded-lg shadow-xl uppercase z-20">
                SALE
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
    </section>
  );
}