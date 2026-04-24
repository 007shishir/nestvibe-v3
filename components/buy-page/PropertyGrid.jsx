'use client';

import React from 'react';
import { Card } from "@heroui/react";
import PropertyCard from './PropertyCard';

export default function PropertyGrid({ properties, loading }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        [1, 2, 3].map((n) => (
          <Card key={n} className="h-[500px] animate-pulse bg-slate-100 border-none shadow-none" />
        ))
      ) : properties.length > 0 ? (
        properties.map((prop) => (
          <PropertyCard key={prop._id} prop={prop} />
        ))
      ) : (
        <div className="col-span-full py-20 text-center text-slate-500 font-medium text-lg">
          No properties found matching your search.
        </div>
      )}
    </div>
  );
}
