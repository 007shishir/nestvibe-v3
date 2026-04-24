'use client';

import React from 'react';
import { Card, CardBody, Button } from "@heroui/react";
import { MapPin, Bed, Bath, Maximize, Eye, Share2, MessageCircle } from "lucide-react";
import QuickInquiry from '@/components/home/QuickInquiry';

export default function PropertyCard({ prop }) {
  return (
    <Card className="border border-slate-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="relative h-56">
        <div className="absolute -top-6 left-1 text-[10px] text-slate-500 truncate w-full">
          Brokered by {prop.broker || 'NestVibe Realty'}
        </div>
        <img
          src={prop.image}
          alt={prop.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-[#005162] text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm">
            {prop.type.toUpperCase()}
          </div>
          <div className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm">
            {prop.category.toUpperCase()}
          </div>
        </div>
      </div>
      <CardBody className="p-5">
        <p className="text-[#E81123] font-bold text-xl mb-1">{prop.price}</p>
        <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1">{prop.title}</h3>
        <div className="flex items-center gap-1 text-slate-500 mb-4 text-sm">
          <MapPin className="w-4 h-4" />
          {prop.location}
        </div>
        <div className="flex justify-between p-3 bg-[#f8faff] rounded-2xl mb-4 border border-slate-50">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Bed className="w-4 h-4 text-slate-400" /> {prop.beds}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Bath className="w-4 h-4 text-slate-400" /> {prop.baths}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Maximize className="w-4 h-4 text-slate-400" /> {prop.size}
          </div>
        </div>

        <QuickInquiry />

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-50">
          <a href={`/properties/${prop._id}`} className="flex-[3]">
            <Button 
              variant="flat" 
              className="w-full bg-[#e6f7f9] text-[#005162] font-bold h-12 rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <Eye className="w-5 h-5" /> View Details
            </Button>
          </a>
          
          <Button 
            isIconOnly 
            variant="flat" 
            className="flex-1 bg-[#f1f3f7] text-slate-600 hover:bg-slate-200 h-12 rounded-lg shadow-sm"
          >
            <Share2 className="w-5 h-5" />
          </Button>
          
          <a 
            href={`https://wa.me/8801749045892?text=${encodeURIComponent(`Hi NestVibe! I'm interested in "${prop.title}" priced at ${prop.price} located in ${prop.location}.\n\nProperty Link: ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop._id}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button 
              isIconOnly 
              variant="flat" 
              className="w-full bg-[#e8fbf0] text-[#25D366] hover:bg-green-100 h-12 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}
