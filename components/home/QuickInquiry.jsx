'use client';

import React from 'react';
import { Input } from "@heroui/react";
import { Phone } from "lucide-react";

export default function QuickInquiry({ compact = false }) {
  return (
    <div className={`${compact ? 'mt-4 p-3 rounded-xl' : 'mt-5 p-4 rounded-2xl'} bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors duration-300`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <span className={`${compact ? 'text-[9px] tracking-widest' : 'text-[10px] tracking-wider'} font-bold text-slate-400 uppercase`}>
          {compact ? 'Instant Inquiry' : 'Quick Inquiry'}
        </span>
      </div>
      <Input
        type="tel"
        placeholder={compact ? "Your mobile" : "Enter mobile number"}
        variant="flat"
        size={compact ? "sm" : "md"}
        radius="full"
        startContent={<Phone className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-slate-400`} />}
        classNames={{
          inputWrapper: `bg-white shadow-sm border border-slate-200 ${compact ? 'h-9 px-2.5' : 'h-11 px-3'} group-data-[focus=true]:border-primary transition-all`,
          innerWrapper: "flex flex-row items-center gap-2",
          input: `${compact ? 'text-xs' : 'text-sm'} font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-medium`,
        }}
      />
    </div>
  );
}
