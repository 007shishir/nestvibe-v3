'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import BuyHeader from '@/components/buy-page/BuyHeader';
import FilterBar from '@/components/buy-page/FilterBar';
import PropertyGrid from '@/components/buy-page/PropertyGrid';

function BuyPageContent() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const beds = searchParams.get('beds');
  const baths = searchParams.get('baths');
  const category = searchParams.get('category');

  useEffect(() => {
const fetchProperties = async () => {
  setLoading(true);
  try {
    const params = new URLSearchParams();
    params.set('type', 'buy'); // Hardcoded for this page
    
    if (search) params.set('search', search);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (beds) params.set('beds', beds);
    if (baths) params.set('baths', baths);
    if (category) params.set('category', category);

    const res = await fetch(`/api/properties?${params.toString()}`);
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
  }, [search, minPrice, maxPrice, beds, baths, category]);

  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">

        {/* Page Title & Stats */}
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
            Find your dream home in Dhaka
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">{properties.length} Homes</span>
              <span className="text-slate-400">Sort by Relevant listings</span>
            </div>
          </div>
        </div>

        <BuyHeader 
          residentialCount={properties.filter(p => p.category?.toLowerCase() === 'residential').length}
          commercialCount={properties.filter(p => p.category?.toLowerCase() === 'commercial').length}
        />
        <FilterBar />
        <PropertyGrid properties={properties} loading={loading} />

      </div>

      <Footer />
    </main>
  );
}

export default function BuyPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white" />}>
      <BuyPageContent />
    </Suspense>
  );
}
