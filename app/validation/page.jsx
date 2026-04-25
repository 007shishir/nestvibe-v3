'use client';

import React from 'react';
import { 
  Input, 
  Button, 
  Card, 
  CardBody, 
  Divider, 
  Breadcrumbs, 
  BreadcrumbItem 
} from "@heroui/react";
import { 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  UserCheck, 
  BadgeCheck, 
  Link as LinkIcon,
  Send
} from "lucide-react";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export default function ValidationTool() {
  return (
    <>
    <Navbar/>
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-2xl mb-6">
            <ShieldCheck className="text-blue-400 w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Validation</h1>
          <p className="text-slate-400 text-lg">
            Boost buyer trust by getting the "Verified by NestVibe" badge for your property.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-12">
        {/* Process Flow Card */}
        <Card className="border-none shadow-xl mb-12">
          <CardBody className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-10 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">1. Submit Form</h4>
                  <p className="text-xs text-slate-500 mt-1">Provide property and ownership details below.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">2. Payment</h4>
                  <p className="text-xs text-slate-500 mt-1">One-time fee of 1500 TK for verification.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">3. Legal Audit</h4>
                  <p className="text-xs text-slate-500 mt-1">Our agent will contact you to check documents.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">4. Badge Live</h4>
                  <p className="text-xs text-slate-500 mt-1">Validation badge visible on your listing.</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Validation Form */}
        <Card className="border-none shadow-2xl overflow-hidden">
          <div className="bg-[#005162] p-8 text-white">
            <h3 className="text-2xl font-bold">Ownership Validation Form</h3>
            <p className="text-cyan-100 text-sm mt-1">Please fill out the information exactly as it appears on your legal documents.</p>
          </div>
          
          <CardBody className="p-8 md:p-12">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Personal Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Owner Full Name</label>
                  <Input 
                    placeholder="Enter legal name" 
                    variant="bordered" 
                    radius="sm"
                    classNames={{ inputWrapper: "h-12 border-slate-200 focus-within:!border-[#005162]" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                  <Input 
                    placeholder="+8801xxxxxxxxx" 
                    variant="bordered" 
                    radius="sm"
                    classNames={{ inputWrapper: "h-12 border-slate-200 focus-within:!border-[#005162]" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <Input 
                  type="email"
                  placeholder="owner@example.com" 
                  variant="bordered" 
                  radius="sm"
                  classNames={{ inputWrapper: "h-12 border-slate-200 focus-within:!border-[#005162]" }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Current Residential Address</label>
                <Input 
                  placeholder="Street, Area, Dhaka" 
                  variant="bordered" 
                  radius="sm"
                  classNames={{ inputWrapper: "h-12 border-slate-200 focus-within:!border-[#005162]" }}
                />
              </div>

              <Divider className="my-2" />

              {/* Property Section */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" /> Property Listing Link (from NestVibe)
                </label>
                <Input 
                  placeholder="https://nestvibe.com/properties/..." 
                  variant="bordered" 
                  radius="sm"
                  classNames={{ inputWrapper: "h-12 border-slate-200 focus-within:!border-[#005162]" }}
                />
                <p className="text-[10px] text-slate-400 ml-1 italic">The property must already be listed on our platform before validation.</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-start gap-4">
                <CreditCard className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Verification Fee: 1,500 TK</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Upon clicking submit, you will be redirected to our secure payment gateway to complete the one-time validation fee. Our legal agent will reach out within 24-48 hours of payment.
                  </p>
                </div>
              </div>

              <Button 
                type="submit"
                className="bg-[#005162] text-white font-bold h-14 w-full text-lg shadow-lg hover:shadow-xl transition-all"
                endContent={<Send className="w-4 h-4" />}
              >
                Submit and Proceed to Payment
              </Button>

            </form>
          </CardBody>
        </Card>

        {/* Support Note */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Need help with the validation process? <span className="text-blue-600 font-semibold cursor-pointer">Contact Support</span>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}