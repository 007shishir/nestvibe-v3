'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardBody, Link, Input, Button } from "@heroui/react";
import { MapPin, Bed, Bath, Maximize, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import QuickInquiry from './QuickInquiry';

export default function FeaturedProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties?featured=true');
        const data = await res.json();
        if (data.success) {
          setProperties(data.properties);
        }
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
          <p className="text-slate-500">Pick from our curated selection of premium listings</p>
        </div>
        <Link href="/listings" className="text-[#005162] font-bold flex items-center gap-1 group">
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading ? (
          [1, 2, 3].map((n) => (
            <Card key={n} className="h-96 animate-pulse bg-slate-100 border-none shadow-none" />
          ))
        ) : (
          properties.map((prop) => (
            <Card key={prop._id} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <Link href={`/properties/${prop._id}`} className="block">
                  <div className="relative h-64">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      <div className="bg-[#005162] text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm">
                        {prop.type.toUpperCase()}
                      </div>
                      <div className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm">
                        {prop.category.toUpperCase()}
                      </div>
                    </div>
                    {prop.verified && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg border border-green-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50" />
                      </div>
                    )}
                  </div>
                </Link>
                <CardBody className="p-5">
                  <p className="text-[#E81123] font-bold text-xl mb-1">{prop.price}</p>
                  <Link href={`/properties/${prop._id}`} className="block">
                    <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1 hover:text-[#005162] transition-colors">{prop.title}</h3>
                  </Link>
                <div className="flex items-center gap-1 text-slate-500 mb-4 text-sm">
                  <MapPin className="w-4 h-4" />
                  {prop.location}
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Bed className="w-4 h-4 text-slate-400" /> {prop.beds}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Bath className="w-4 h-4 text-slate-400" /> {prop.baths}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Maximize className="w-4 h-4 text-slate-400" /> {prop.size}
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <Link href={`/properties/${prop._id}`} className="flex-grow">
                    <Button 
                      className="w-full bg-[#005162] text-white font-bold h-11 rounded-xl shadow-lg shadow-[#005162]/20"
                    >
                      View Details
                    </Button>
                  </Link>
                  <a 
                    href={`https://wa.me/8801749045892?text=${encodeURIComponent(`Hi NestVibe! I'm interested in "${prop.title}" priced at ${prop.price} located in ${prop.location}.\n\nProperty Link: ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop._id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      isIconOnly
                      className="bg-green-50 text-green-500 h-11 w-11 rounded-xl shadow-sm border border-green-100"
                    >
                      <MessageCircle className="w-5 h-5 fill-green-500/10" />
                    </Button>
                  </a>
                </div>

                <QuickInquiry />
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}
