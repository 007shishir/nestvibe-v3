import React from 'react';
import Image from 'next/image';
import { Target, Users, Video, MousePointer2, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Redefining Real Estate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Through Digital Innovation
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            NestVibe isn't just a marketing agency. We are the bridge between Dhaka's premier properties and the modern homebuyer, powered by data-driven strategies and creative storytelling.
          </p>
        </div>
      </section>

      {/* Our Mission & Edge */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
             {/* Replace with an actual photo of your Banani office or a Dhaka skyline */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
               <Image 
                src="/office-preview.jpg" 
                alt="NestVibe Office" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Why NestVibe?</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              In a crowded market, visibility is everything. Based in the heart of Dhaka, NestVibe specializes in high-impact digital promotion for real estate. We don't just list properties; we create an ecosystem where buyers and sellers connect directly and transparently.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <ShieldCheck className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <p className="text-sm text-slate-700"><strong>Transparency First:</strong> We eliminate the guesswork by facilitating direct connections between buyers and developers.</p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                <TrendingUp className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                <p className="text-sm text-slate-700"><strong>Result Oriented:</strong> Our campaigns focus on high-quality lead generation, not just vanity metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - The Digital Ecosystem */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Our Digital Toolkit</h2>
            <p className="text-slate-500 mt-2">Comprehensive solutions for the modern real estate landscape</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Lead Generation", desc: "Advanced Meta and Google Ad funnels designed to find serious buyers." },
              { icon: Video, title: "Cinematic Tours", desc: "Punchy, high-end video production that brings properties to life." },
              { icon: MousePointer2, title: "Social Campaigns", desc: "Strategic presence across TikTok, Instagram, and Facebook." },
              { icon: Users, title: "Strategic Branding", desc: "Positioning your development as the most desirable address in Dhaka." }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <skill.icon className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">{skill.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-800 mb-12">Built on Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-extrabold text-blue-600">7+</p>
            <p className="text-slate-500 text-sm mt-1 uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">4th</p>
            <p className="text-slate-500 text-sm mt-1 uppercase tracking-wider">Year Anniversary</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-4xl font-extrabold text-blue-600">Dhaka</p>
            <p className="text-slate-500 text-sm mt-1 uppercase tracking-wider">Based in Banani</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Transform Your Property Marketing</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              Ready to see the difference between a listing and a lifestyle brand? Partner with NestVibe today.
            </p>
            <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
              Get Started
            </button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;