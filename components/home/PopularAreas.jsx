'use client';

import React from 'react';
import { motion } from "framer-motion";

const popularAreas = [
  { name: "Gulshan", count: 120, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80" },
  { name: "Banani", count: 85, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80" },
  { name: "Dhanmondi", count: 95, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80" },
  { name: "Uttara", count: 150, image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&q=80" }
];

export default function PopularAreas() {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Popular Search Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularAreas.map((area, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="relative h-60 rounded-3xl overflow-hidden cursor-pointer group"
            >
              <img 
                src={area.image} 
                alt={area.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold">{area.name}</h4>
                <p className="text-slate-200 text-sm">{area.count} Listings</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
