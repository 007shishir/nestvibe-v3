import React from 'react';
import Link from 'next/link';
// Using Hero UI components
import { Card, CardBody, Button } from "@heroui/react"; 
import { CheckCircle2, MessageCircle } from "lucide-react";
import QuickInquiry from "../QuickInquiry"; 

const PropertyCard = ({ prop }) => {
  // Logic for the WhatsApp link
  const whatsappMessage = encodeURIComponent(
    `Hi NestVibe! I'm interested in "${prop.title}" priced at ${prop.price} located in ${prop.location}.\n\nProperty Link: ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop._id}`
  );

  return (
    <Card className="border border-slate-100 shadow-none hover:shadow-md transition-shadow overflow-hidden">
      <CardBody className="p-0 flex flex-row">
        
        {/* Left Side: Image & Badges */}
        <div className="w-1/3 min-w-[120px] relative h-full min-h-[160px]">
          <img 
            src={prop.image} 
            alt={prop.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 flex gap-1 z-10">
            <div className="bg-[#005162] text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-sm">
              {prop.type?.toUpperCase()}
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-sm">
              {prop.category?.toUpperCase()}
            </div>
          </div>
          
          {prop.verified && (
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-lg border border-green-100 z-10">
              <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-50" />
            </div>
          )}
        </div>

        {/* Right Side: Details & Actions */}
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
            {/* Using Next.js Link for internal routing */}
            <Link href={`/properties/${prop._id}`} className="flex-grow">
              <Button 
                size="sm" 
                variant="bordered" 
                className="w-full border-slate-200 text-slate-900 font-bold text-[11px] h-9"
              >
                VIEW DETAILS
              </Button>
            </Link>

            {/* External WhatsApp Link */}
            <a 
              href={`https://wa.me/8801749045892?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="sm" 
                variant="bordered" 
                isIconOnly
                className="border-green-500 text-green-500 min-w-[36px] h-9"
              >
                <MessageCircle className="w-4 h-4 fill-green-500/10" />
              </Button>
            </a>
          </div>

          <QuickInquiry compact={true} />
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;