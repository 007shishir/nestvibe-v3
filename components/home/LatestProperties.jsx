'use client';

import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Link, Input } from "@heroui/react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import QuickInquiry from './QuickInquiry';

export default function LatestProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Rent');

  useEffect(() => {
    const fetchLatest = async () => {
      setLoading(true);
      try {
        // Fetching with limit 9 to match the 3x3 grid look in the image
        const res = await fetch(`/api/properties?type=${activeTab}&limit=9`);
        const data = await res.json();
        if (data.success) {
          setProperties(data.properties);
        }
      } catch (error) {
        console.error('Failed to fetch latest properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, [activeTab]);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Latest Property Listing in Bangladesh
        </h2>
        <Link href="/listings" className="text-slate-900 text-sm font-bold flex items-center gap-1 hover:opacity-70">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex gap-4 mb-10">
        <Button 
          size="md" 
          variant={activeTab === 'Rent' ? 'solid' : 'bordered'}
          className={activeTab === 'Rent' ? 'bg-slate-900 text-white font-bold px-8' : 'border-slate-200 text-slate-600 px-8'}
          onClick={() => setActiveTab('Rent')}
        >
          For Rent
        </Button>
        <Button 
          size="md" 
          variant={activeTab === 'Buy' ? 'solid' : 'bordered'}
          className={activeTab === 'Buy' ? 'bg-slate-900 text-white font-bold px-8' : 'border-slate-200 text-slate-600 px-8'}
          onClick={() => setActiveTab('Buy')}
        >
          For Sale
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [1, 2, 3, 4, 5, 6].map((n) => (
            <Card key={n} className="h-40 animate-pulse bg-slate-50 border-none shadow-sm" />
          ))
        ) : (
          properties.map((prop) => (
            <Card key={prop._id} className="border border-slate-100 shadow-none hover:shadow-md transition-shadow overflow-hidden">
              <CardBody className="p-0 flex flex-row">
                <div className="w-1/3 min-w-[120px] relative h-full min-h-[160px]">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-1 z-10">
                    <div className="bg-[#005162] text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-sm">
                      {prop.type.toUpperCase()}
                    </div>
                    <div className="bg-slate-900/80 backdrop-blur-sm text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-sm">
                      {prop.category.toUpperCase()}
                    </div>
                  </div>
                  {prop.verified && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-lg border border-green-100 z-10">
                      <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-50" />
                    </div>
                  )}
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-[15px]">
                      {prop.price}
                    </p>
                    <h3 className="text-[13px] text-slate-600 line-clamp-1 mt-1 font-medium">
                      {prop.title}
                    </h3>
                    <p className="text-[12px] text-slate-400 mt-1">
                      {prop.location}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      size="sm" 
                      variant="bordered" 
                      className="border-slate-200 text-slate-900 font-bold flex-grow text-[11px] h-9"
                    >
                      VIEW DETAILS
                    </Button>
                    <a 
                      href={`https://wa.me/8801749045892?text=${encodeURIComponent(`Hi NestVibe! I'm interested in "${prop.title}" priced at ${prop.price} located in ${prop.location}.\n\nProperty Link: ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop._id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        size="sm" 
                        variant="flat" 
                        isIconOnly
                        className="bg-green-50 text-green-500 min-w-[36px] h-9"
                      >
                        <MessageCircle className="w-4 h-4 fill-green-500/10" />
                      </Button>
                    </a>
                  </div>

                  <QuickInquiry compact={true} />
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}
