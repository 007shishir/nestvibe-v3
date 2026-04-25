'use client';

import React from 'react';
import { 
  Input, 
  Button, 
  Card, 
  CardBody, 
  Textarea, 
  Checkbox, 
  Accordion, 
  AccordionItem,
  Divider
} from "@heroui/react";
import { 
  CheckCircle2, 
  Camera, 
  Share2, 
  ShieldCheck, 
  TrendingUp, 
  HelpCircle, 
  Upload,
  Send
} from "lucide-react";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export default function SellProperty() {
  return (
    <>
    <Navbar/>    
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-slate-900 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sell Your Property <span className="text-cyan-400 italic">Faster.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Stop waiting for buyers to find you. Use NestVibe’s advanced digital ecosystem to put your property in front of thousands of verified leads in Dhaka.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: The "Why NestVibe" Pitch */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Why Partner with Us?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 rounded-lg h-fit">
                  <TrendingUp className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Precision Targeting</h3>
                  <p className="text-sm text-slate-500">We don't just post; we boost. Your property reaches specific demographics in Gulshan, Banani, and Bashundhara via Meta and Google Ads.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-cyan-100 p-2 rounded-lg h-fit">
                  <Camera className="text-cyan-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Cinematic Production</h3>
                  <p className="text-sm text-slate-500">We produce high-end video tours and professional photography that make your property stand out from the crowd.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg h-fit">
                  <ShieldCheck className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Direct-to-Owner</h3>
                  <p className="text-sm text-slate-500">We value transparency. We facilitate direct buyer-owner communication while providing professional brokerage support at just 1.5% commission.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="text-[#005162] w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-800">FAQs</h2>
            </div>
            
            <Accordion variant="light" className="px-0">
              <AccordionItem key="1" aria-label="Advance payment" title="Advance payment required for Lead?">
                <p className="text-sm text-slate-600">Yes, per quality lead 300 TK is required in advance to initiate the conversation between potential buyers and sellers.</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Verification badge" title="Cost for Verification Badge?">
                <p className="text-sm text-slate-600">The verification badge costs 1,500 TK. This badge builds high trust with buyers as it confirms property details have been physically verified by our team.</p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Business Nature" title="Are you a brokerage company?">
                <p className="text-sm text-slate-600">We are primarily a Marketing Agency. However, we offer brokerage services with as low as 1.5% commission (depending on the deal). <strong>Note: We exclusively work with property owners.</strong></p>
              </AccordionItem>
              <AccordionItem key="4" aria-label="Onboarding" title="Is there an onboarding charge?">
                <p className="text-sm text-slate-600">Onboarding to our website is free of charge, though we strictly verify all provided data for accuracy before it goes live.</p>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Hidden charges" title="Any hidden charges?">
                <p className="text-sm text-slate-600">No hidden charges. You may optionally opt for our premium marketing packages which include professional video production and social media boosting.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Right Side: Property Information Form */}
        <Card className="lg:col-span-8 shadow-xl border-none">
          <CardBody className="p-8 md:p-12">
            <div className="mb-10 mt-10">
              <h2 className="text-3xl font-bold text-slate-800">Property Details</h2>
              <p className="text-slate-500">Provide accurate information to receive a verified status faster.</p>
            </div>

            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Personal Info Group */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#005162] flex items-center gap-2">
                   Owner Information
                </h3>
                <Divider />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <Input placeholder="Your Name" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
                    <Input placeholder="+8801xxxxxxxxx" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <Input type="email" placeholder="email@example.com" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                </div>
              </div>

              {/* Property Details Group */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-[#005162] flex items-center gap-2">
                   Property Specifications
                </h3>
                <Divider />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Property Location</label>
                    <Input placeholder="e.g. Road 11, Banani" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Property Size (sqft)</label>
                    <Input placeholder="e.g. 1800" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Bedrooms</label>
                    <Input type="number" placeholder="0" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Bathrooms</label>
                    <Input type="number" placeholder="0" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Veranda</label>
                    <Input type="number" placeholder="0" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Asking Price</label>
                    <Input placeholder="BDT" variant="bordered" radius="sm" classNames={{inputWrapper: "h-12 border-slate-200"}} />
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-4 mt-2">
                  <Checkbox color="primary">Parking Space Available</Checkbox>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Additional Description</label>
                <Textarea 
                  placeholder="Tell us more about the features of your property..." 
                  variant="bordered" 
                  radius="sm" 
                  minRows={4}
                  classNames={{inputWrapper: "border-slate-200 p-4"}}
                />
              </div>

              <div className="pt-6">
                <Button 
                  className="bg-[#005162] text-white font-bold mt-5 h-16 w-full text-lg shadow-xl"
                  endContent={<Send className="w-5 h-5" />}
                >
                  List My Property
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4 italic">
                  By clicking "List My Property", you agree to our Terms of Use and acknowledge the 300TK processing fee.
                </p>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
    <Footer/>
    </>
  );
}