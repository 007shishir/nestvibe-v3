'use client';

import React from 'react';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import AuthCTA from '@/components/home/AuthCTA';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import SellPropertyCTA from '@/components/home/SellPropertyCTA';
import TrendingProperties from '@/components/home/TrendingProperties';
import LatestProperties from '@/components/home/LatestProperties';
import CommercialProperties from '@/components/home/CommercialProperties';
import PopularAreas from '@/components/home/PopularAreas';
import Footer from '@/components/home/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AuthCTA />
      <FeaturedProperties />
      <SellPropertyCTA />
      <TrendingProperties />
      <LatestProperties />
      <CommercialProperties />
      <PopularAreas />
      <Footer />
    </main>
  );
}
