'use client';

import React from 'react';
import { Search, Heart } from "lucide-react";
import { Button } from "@heroui/react";

export default function BuyHeader({ residentialCount = 0, commercialCount = 0 }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-4">
      <div className="flex-1 w-full max-w-3xl flex items-center gap-3">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder='Try "300k-600k condo with l...'
            className="w-full h-12 pl-4 pr-12 rounded-full border border-slate-300 focus:outline-none focus:border-[#005162] focus:ring-1 focus:ring-[#005162] text-slate-700 shadow-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-slate-700">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <Button radius="full" className="bg-slate-700 text-white font-medium px-6 h-12 hidden sm:flex items-center gap-2">
          <Heart className="w-4 h-4" /> Save search
        </Button>
      </div>
      
      <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <Button radius="full" variant="bordered" className="border-[#005162] text-[#005162] font-bold h-10 px-4 min-w-fit bg-[#005162]/5">
          Residential ({residentialCount.toLocaleString()})
        </Button>
        <Button radius="full" variant="bordered" className="border-slate-300 text-slate-500 h-10 px-4 min-w-fit">
          Commercial ({commercialCount.toLocaleString()})
        </Button>
      </div>
    </div>
  );
}
