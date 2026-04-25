"use client";

import React from "react";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function ContactUs() {
  return (
    <>
    <Navbar/>
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you are looking to buy your dream home or list your property
            for a digital-first audience, our team is here to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form Container */}

          <Card className="lg:col-span-2 shadow-xl border-none">
            <CardBody className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 mt-8">
                Send us a Message
              </h2>
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 1. Full Name Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="e.g., Alif Rahman"
                      variant="bordered"
                      radius="sm"
                      classNames={{
                        inputWrapper:
                          "border-slate-200 hover:border-[#005162] focus-within:!border-[#005162] h-12",
                      }}
                    />
                  </div>

                  {/* 2. Email Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g., alif@example.com"
                      variant="bordered"
                      radius="sm"
                      classNames={{
                        inputWrapper:
                          "border-slate-200 hover:border-[#005162] focus-within:!border-[#005162] h-12",
                      }}
                    />
                  </div>
                </div>

                {/* 3. Subject Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-700 ml-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    variant="bordered"
                    radius="sm"
                    classNames={{
                      inputWrapper:
                        "border-slate-200 hover:border-[#005162] focus-within:!border-[#005162] h-12",
                    }}
                  />
                </div>

                {/* 4. Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700 ml-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    variant="bordered"
                    radius="sm"
                    minRows={5}
                    classNames={{
                      inputWrapper:
                        "border-slate-200 hover:border-[#005162] focus-within:!border-[#005162] p-4",
                    }}
                  />
                </div>

                {/* Button Container - Ensures button is centered and has proper top spacing */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    className="bg-[#005162] text-white font-bold h-14 px-12 mt-20 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                    endContent={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="bg-[#005162] text-white border-none shadow-xl">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <p className="font-bold">Our Office</p>
                      <p className="text-sm text-cyan-100">
                        Gulshan, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <p className="font-bold">Phone Number</p>
                      <p className="text-sm text-cyan-100">+8801749045892</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <p className="font-bold">Email Support</p>
                      <p className="text-sm text-cyan-100">info@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <p className="font-bold">Working Hours</p>
                      <p className="text-sm text-cyan-100">
                        Sat - Thu: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-cyan-800" />

                <div className="flex gap-4">
                  <Facebook className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
                  <Youtube className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
                </div>
              </CardBody>
            </Card>

            {/* Quick Map Placeholder Card */}
            <Card className="border-none shadow-md h-48 bg-slate-200 overflow-hidden">
              {/* In a real scenario, you'd embed a Google Maps iframe here */}
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                <MapPin className="w-8 h-8 mb-2 opacity-20" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Map View Coming Soon
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
