'use client';

import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Button, Card, CardBody, Badge } from "@heroui/react";
import {
  BarChart3,
  Video,
  MapPin,
  CheckCircle2,
  Quote,
  Users,
  ShieldCheck,
  Camera,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  ShieldAlert,
  Award
} from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#005162] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#008ba8] opacity-[0.02] rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6f7f9] text-[#005162] text-xs font-black tracking-widest uppercase mb-8 shadow-sm">
            <Award className="w-4 h-4" /> Trusted by 500+ Property Owners
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-900">
            Pricing that <br />
            <span className="text-[#005162] italic relative inline-block">
              Works for You
              <span className="absolute bottom-4 left-0 w-full h-3 bg-[#e6f7f9] -z-10 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Transparent, performance-based, and built for the modern Dhaka property market.
          </p>
        </div>
      </header>

      {/* Primary Solutions: Performance & Trust */}
      <section className="max-w-6xl mx-auto px-6 mb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Quality Leads */}
          <Card className="bg-[#005162] text-white shadow-2xl border-none overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700 blur-2xl"></div>
            <CardBody className="p-10 relative">
              <div className="flex justify-between items-center mb-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-[#008ba8] text-white text-[10px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-widest">
                    PERFORMANCE BASED
                  </span>
                  <span className="text-[10px] opacity-60 font-bold">Results-Driven</span>
                </div>
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight">
                Quality Leads
              </h2>
              <p className="opacity-80 leading-relaxed text-base mb-10 font-medium max-w-sm">
                Stop paying for empty promises. Only pay for <span className="underline decoration-[#008ba8] decoration-4 underline-offset-4 font-bold">genuine, verified interest</span> from buyers ready to talk.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter">300 TK</span>
                  <span className="text-sm font-bold opacity-40 uppercase tracking-widest">/ Per Lead</span>
                </div>
                <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
                <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest hidden sm:block">
                  Verified <br /> Intent
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Property Validation */}
          <Card className="bg-white border border-slate-100 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e6f7f9] rounded-full -ml-20 -mb-20 transition-transform group-hover:scale-110 duration-700 blur-2xl opacity-50"></div>
            <CardBody className="p-10 relative">
              <div className="flex justify-between items-center mb-10">
                <div className="w-14 h-14 bg-[#e6f7f9] rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#005162]" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-slate-100 text-[#005162] text-[10px] font-black px-3 py-1 rounded shadow-sm uppercase tracking-widest">
                    TRUST & SECURITY
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">In-Person Check</span>
                </div>
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight text-slate-900">
                Property Validation
              </h2>
              <p className="text-slate-500 leading-relaxed text-base mb-10 font-medium max-w-sm">
                Our team visits in person, meets the owner, and verifies all legal documents to ensure a <span className="text-[#005162] font-bold">100% safe transaction</span> for both parties.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-slate-50">
                <div className="flex items-baseline gap-2 text-slate-900">
                  <span className="text-5xl font-black tracking-tighter">1,500 TK</span>
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">/ One-time</span>
                </div>
                <div className="h-10 w-px bg-slate-100 hidden sm:block"></div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hidden sm:block">
                  Legal <br /> Check
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Marketing Packages */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Professional Representation</h2>
            <p className="text-slate-500 font-bold text-lg max-w-xl mx-auto opacity-70">
              High-end marketing packages to make your property stand out from the crowd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary */}
            <Card className="bg-white shadow-xl border-t-8 border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardBody className="p-10">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Primary Listing</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-black text-slate-900">5,000</span>
                  <span className="text-xl font-bold text-slate-300">TK</span>
                </div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-4 text-slate-600 font-semibold text-sm">
                    <Camera className="w-5 h-5 text-[#005162]" /> Professional Photography
                  </li>
                  <li className="flex items-center gap-4 text-slate-600 font-semibold text-sm">
                    <Users className="w-5 h-5 text-[#005162]" /> Social Media Publishing
                  </li>
                  <li className="flex items-center gap-4 text-slate-600 font-semibold text-sm">
                    <BarChart3 className="w-5 h-5 text-[#005162]" /> Basic Ad Targeting
                  </li>
                </ul>
                <Button fullWidth variant="bordered" className="font-bold border-2 h-14 rounded-2xl hover:bg-slate-50">Choose Primary</Button>
              </CardBody>
            </Card>

            {/* Standard */}
            <Card className="bg-white shadow-[0_30px_60px_rgba(0,81,98,0.1)] border-t-8 border-[#005162] relative scale-105 z-20 hover:-translate-y-3 transition-all duration-500 overflow-visible">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#005162] text-white text-[10px] font-black px-6 py-2 rounded-full shadow-2xl tracking-[0.2em] uppercase whitespace-nowrap z-30">
                Most Popular
              </div>
              <CardBody className="p-10">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#005162] mb-8">Standard Package</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-6xl font-black text-[#005162]">10,000</span>
                  <span className="text-xl font-bold text-[#005162]/40">TK</span>
                </div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-4 text-slate-700 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#005162]" /> All Primary Features
                  </li>
                  <li className="flex items-center gap-4 text-[#005162] font-black italic text-base">
                    <Sparkles className="w-6 h-6 animate-pulse" /> Professional Video Tour
                  </li>
                  <li className="flex items-center gap-4 text-slate-700 font-bold text-sm">
                    <TrendingUp className="w-5 h-5 text-[#005162]" /> Meta Ads (Paid Marketing)
                  </li>
                  <li className="flex items-center gap-4 text-slate-700 font-bold text-sm">
                    <Zap className="w-5 h-5 text-[#005162]" /> Featured Site Listing
                  </li>
                </ul>
                <Button fullWidth className="bg-[#005162] text-white font-black h-16 rounded-2xl shadow-2xl shadow-[#005162]/30 text-lg">Choose Standard</Button>
              </CardBody>
            </Card>

            {/* Premier */}
            <Card className="bg-slate-900 text-white shadow-xl border-t-8 border-[#008ba8] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardBody className="p-10">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#008ba8] mb-8">Premier Plan</h3>
                <div className="flex items-baseline gap-1 mb-10 text-[#008ba8]">
                  <span className="text-5xl font-black">15,000</span>
                  <span className="text-xl font-bold opacity-40">TK</span>
                </div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-4 opacity-90 font-bold text-sm">
                    <Rocket className="w-5 h-5 text-[#008ba8]" /> All Standard Features
                  </li>
                  <li className="flex items-center gap-4 text-[#008ba8] font-black italic text-base">
                    <Video className="w-6 h-6" /> Cinematic Video Tour
                  </li>
                  <li className="flex items-center gap-4 opacity-90 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#008ba8]" /> High-Spend Campaigns
                  </li>
                  <li className="flex items-center gap-4 opacity-90 font-bold text-sm">
                    <Target className="w-5 h-5 text-[#008ba8]" /> Cross-Platform Ads
                  </li>
                </ul>
                <Button fullWidth variant="solid" className="bg-[#008ba8] text-white font-bold h-14 rounded-2xl">Choose Premier</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Commission Structure - Minimalist & Sleek */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Prefer a Results-Based Commission?</h2>
            <div className="w-20 h-1.5 bg-[#005162] mx-auto rounded-full"></div>
          </div>

          <Card className="border-none bg-[#f8faff] shadow-sm rounded-[3rem] p-4">
            <CardBody className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-12 border-b md:border-b-0 md:border-r border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#e6f7f9] rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#005162]" />
                    </div>
                    <h4 className="font-black uppercase tracking-widest text-sm text-slate-400">Our Strategy</h4>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">
                    We only earn when you succeed. Our "No Sale, No Fee" policy ensures we are fully aligned with your goals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#005162]" /> Expert Negotiation
                    </li>
                    <li className="flex items-center gap-2 text-sm font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#005162]" /> Legal Documentation
                    </li>
                  </ul>
                </div>
                <div className="p-12 flex flex-col justify-center items-center text-center">
                  <h4 className="font-black text-slate-400 uppercase tracking-widest text-sm mb-4">Starting Commission</h4>
                  <div className="text-7xl font-black text-[#005162] tracking-tighter mb-2">1.5%</div>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">Of Final Sale Value</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-t-[5rem]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-20 italic text-white/40 tracking-tight">
            "Verified property, <span className="text-[#008ba8]">verified buyers.</span>"
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
              <Quote className="absolute -top-6 -left-6 w-16 h-16 text-[#008ba8] opacity-20" />
              <p className="text-xl italic leading-relaxed text-white/90 relative z-10 mb-8 font-medium">
                "I paid for the 1500TK Validation first. Knowing NestVibe actually checked the documents made me feel so much safer as a buyer. <span className="text-[#008ba8] font-bold">Worth every penny.</span>"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#008ba8] rounded-full flex items-center justify-center font-black text-white">R</div>
                <div>
                  <p className="font-black text-sm tracking-widest uppercase text-white">— R. Karim</p>
                  <p className="text-xs text-white/40">Apartment Buyer</p>
                </div>
              </div>
            </div>

            <div className="relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
              <Quote className="absolute -top-6 -right-6 w-16 h-16 text-[#008ba8] opacity-20" />
              <p className="text-xl italic leading-relaxed text-white/90 relative z-10 mb-8 font-medium">
                "The Lead Gen model is genius. I only pay the 300TK when they actually find someone who wants to visit. <span className="text-[#008ba8] font-bold">Much better</span> than traditional agencies."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#005162] rounded-full flex items-center justify-center font-black text-white">T</div>
                <div>
                  <p className="font-black text-sm tracking-widest uppercase text-white">— T. Ahmed</p>
                  <p className="text-xs text-white/40">Property Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-[#005162] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
            Ready to maximize <br /> your value?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-[#005162] font-black h-20 px-14 text-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform">
              Book a Free Valuation
            </Button>
            <Button size="lg" variant="bordered" className="border-white/50 text-white font-bold h-20 px-14 text-xl rounded-2xl hover:bg-white/10">
              Contact Our Agents
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
