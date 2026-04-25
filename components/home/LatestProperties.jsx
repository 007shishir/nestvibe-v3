'use client';

import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Link, Input } from "@heroui/react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import QuickInquiry from './QuickInquiry';
import PropertyCard from './propertyCard/PropertyCard';

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
    <section className="py-10 px-6 max-w-7xl mx-auto border-t border-slate-50">
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
            <PropertyCard key={prop._id} prop={prop} />

          ))
        )}
      </div>
    </section>
  );
}
