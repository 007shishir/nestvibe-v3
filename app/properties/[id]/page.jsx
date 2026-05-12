'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Button, Input, Card, CardBody, Divider, Badge, Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import Link from 'next/link';
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Share2,
  Heart,
  ChevronRight,
  ChevronLeft,
  X,
  Calendar,
  Home,
  CheckCircle2,
  Phone,
  User,
  Info,
  Sparkles,
  Video,
  Mail,
  MessageCircle
} from "lucide-react";

export default function PropertyDetailsPage({ params }) {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inquirySent, setInquirySent] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get property images from database - use images array first, fallback to single image
  const propertyImages = property 
    ? (property.images && property.images.length > 0 
        ? property.images 
        : (property.image ? [property.image] : []))
    : [];

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/properties/${params.id}`);
        const data = await res.json();
        if (data.success) {
          setProperty(data.property);
        } else {
          console.error('API Error:', data.error);
        }
      } catch (error) {
        console.error('Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) {
      fetchProperty();
    }
  }, [params.id]);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#005162]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <Info className="w-10 h-10 text-slate-400" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Property not found.</h2>
          <p className="text-slate-500 mb-8 max-w-md">We couldn't find the property you're looking for. It might have been sold or removed.</p>
          <Link href="/buy">
            <Button className="bg-[#005162] text-white font-bold h-12 px-8 rounded-xl">
              Back to Listings
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
        <Link href="/" className="hover:text-[#005162] transition-colors">Dhaka</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/${property.type.toLowerCase()}`} className="hover:text-[#005162] transition-colors">{property.type}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#005162] truncate max-w-[200px]">{property.title}</span>
      </div>

      {/* Image Gallery Section */}
      <section className="max-w-7xl mx-auto w-full px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group bg-slate-900">
          <div 
            className="md:col-span-3 h-full relative overflow-hidden cursor-pointer bg-slate-900 flex items-center justify-center"
            onClick={() => { propertyImages.length > 0 && setSelectedImageIndex(0); onOpen(); }}
          >
            {propertyImages.length > 0 ? (
              <img
                src={propertyImages[0]}
                alt={property.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
              />
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">📷</div>
                <p className="text-slate-400 font-bold">No images available</p>
              </div>
            )}
          </div>
          <div className="hidden md:grid grid-rows-2 gap-3 h-full">
            {propertyImages.length > 1 && (
              <div 
                className="relative overflow-hidden cursor-pointer bg-slate-900 flex items-center justify-center"
                onClick={() => { setSelectedImageIndex(1); onOpen(); }}
              >
                <img
                  src={propertyImages[1]}
                  alt="Property image 2"
                  className="w-full h-full object-contain brightness-90 hover:brightness-110 transition-all"
                />
              </div>
            )}
            {propertyImages.length > 2 && (
              <div 
                className="relative overflow-hidden cursor-pointer bg-slate-900 flex items-center justify-center"
                onClick={() => { setSelectedImageIndex(2); onOpen(); }}
              >
                <img
                  src={propertyImages[2]}
                  alt="Property image 3"
                  className="w-full h-full object-contain brightness-75 hover:brightness-110 transition-all"
                />
                {propertyImages.length > 3 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                    <span className="text-white font-black text-xl tracking-tighter">
                      +{propertyImages.length - 2}
                    </span>
                  </div>
                )}
              </div>
            )}
            {propertyImages.length === 1 && (
              <div className="relative overflow-hidden cursor-pointer row-span-2 bg-slate-900 flex items-center justify-center">
                <span className="text-slate-400 font-bold">No additional images</span>
              </div>
            )}
          </div>
          <div className="absolute top-6 right-6 flex gap-3 z-10">
            <Button isIconOnly radius="full" className="bg-white/90 backdrop-blur-md text-slate-900 shadow-2xl border border-white/20">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button isIconOnly radius="full" className="bg-white/90 backdrop-blur-md text-[#E81123] shadow-2xl border border-white/20">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">

        {/* Left Content */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start mb-10 pb-10 border-b border-slate-100">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 leading-tight">{property.title}</h1>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-lg">
                <MapPin className="w-6 h-6 text-[#005162]" />
                {property.location}
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="bg-[#005162] text-white font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-lg shadow-lg shadow-[#005162]/20">
                {property.type}
              </div>
              {property.verified && (
                <div className="flex items-center gap-1.5 text-[#25D366] font-black text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Verified Listing
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0 bg-slate-50 rounded-[2.5rem] mb-16 border border-slate-100 overflow-hidden shadow-sm">
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center hover:bg-white transition-colors">
              <Bed className="w-8 h-8 text-[#005162] mb-3" />
              <span className="text-2xl font-black text-slate-900">{property.beds}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Bedrooms</span>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center border-x border-slate-100 hover:bg-white transition-colors">
              <Bath className="w-8 h-8 text-[#005162] mb-3" />
              <span className="text-2xl font-black text-slate-900">{property.baths}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Bathrooms</span>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center hover:bg-white transition-colors">
              <Maximize className="w-8 h-8 text-[#005162] mb-3" />
              <span className="text-2xl font-black text-slate-900">{property.size}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Area</span>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black mb-8 tracking-tight flex items-center gap-4 text-slate-900">
              <div className="w-2 h-10 bg-[#005162] rounded-full"></div>
              Description
            </h2>
            <p className="text-slate-600 leading-[1.8] text-lg whitespace-pre-line font-medium">
              {property.description || `This high-end ${property.category.toLowerCase()} property in ${property.location.split(',')[0]} represents the pinnacle of modern living. Every square foot has been meticulously designed to provide comfort, style, and functionality.`}
            </p>
          </div>

          <div className="mb-16 pt-16 border-t border-slate-100">
            <h2 className="text-3xl font-black mb-10 tracking-tight flex items-center gap-4 text-slate-900">
              <div className="w-2 h-10 bg-[#005162] rounded-full"></div>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
              <DetailRow label="Property Type" value={property.category} icon={<Home className="w-5 h-5" />} />
              <DetailRow label="Listing Type" value={property.type} icon={<Calendar className="w-5 h-5" />} />
              <DetailRow label="Price" value={property.price} icon={<Info className="w-5 h-5" />} />
              <DetailRow label="Broker" value={property.broker || 'NestVibe Realty'} icon={<User className="w-5 h-5" />} />
              <DetailRow label="Status" value="Available" icon={<CheckCircle2 className="w-5 h-5" />} />
              <DetailRow label="Location" value={property.location.split(',')[0]} icon={<MapPin className="w-5 h-5" />} />
            </div>
          </div>
        </div>

        {/* Right Sidebar - Sticky Contact Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <Card className="border-none shadow-[0_40px_80px_rgba(0,81,98,0.1)] overflow-hidden rounded-[2rem] bg-white">
              <div className="bg-[#005162] p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12"></div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Price Guide</p>
                <h3 className="text-3xl font-black tracking-tight leading-tight">{property.price}</h3>
              </div>
              <CardBody className="p-6">
                {inquirySent ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Request Sent!</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed px-4">Our specialist will call you shortly to arrange a viewing.</p>
                  </div>
                ) : (
                  <>
                    <h4 className="text-lg font-black text-slate-900 mb-6 tracking-tight">Interested in this property?</h4>
                    <form className="space-y-5" onSubmit={handleSubmitInquiry}>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                        <Input
                          placeholder="e.g. Samiul Haque"
                          variant="bordered"
                          className="font-bold"
                          size="md"
                          startContent={<User className="text-slate-300 w-4 h-4" />}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                        <Input
                          placeholder="e.g. +880 1..."
                          variant="bordered"
                          className="font-bold"
                          size="md"
                          startContent={<Phone className="text-slate-300 w-4 h-4" />}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                        <Input
                          placeholder="e.g. samiul@example.com"
                          variant="bordered"
                          className="font-bold"
                          size="md"
                          type="email"
                          startContent={<Mail className="text-slate-300 w-4 h-4" />}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#005162] text-white font-black h-14 rounded-xl shadow-xl shadow-[#005162]/20 mt-2 text-base"
                      >
                        Request a Visit
                      </Button>
                      <p className="text-[9px] text-slate-400 text-center leading-relaxed font-bold uppercase tracking-widest px-4">
                        Free Consultation • Secure • Verified
                      </p>
                    </form>

                    <Divider className="my-6 opacity-50" />

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                        <User className="text-[#005162] w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">{property.broker || 'NestVibe Agent'}</p>
                        <p className="text-[9px] text-[#008ba8] font-black uppercase tracking-[0.1em]">Property Consultant</p>
                      </div>
                    </div>
                  </>
                )}
              </CardBody>
            </Card>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`https://wa.me/8801749045892?text=${encodeURIComponent(`Hi NestVibe! I'm interested in "${property.title}" priced at ${property.price} located in ${property.location}.\n\nProperty Link: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="flat"
                  className="w-full bg-[#25D366]/10 text-[#25D366] font-black h-16 rounded-2xl shadow-sm flex items-center justify-center gap-3 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-6 h-6 fill-[#25D366]/10" /> Get Instant Help
                </Button>
              </a>
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-start gap-5">
                <div className="w-10 h-10 bg-[#005162] rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-[#005162]/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  Looking for something else? Our agents can help you find your dream home in Dhaka's best zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Slideshow Modal - FIXED: images no longer overflow screen */}
      {propertyImages.length > 0 && (
        <Modal 
          size="full" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          hideCloseButton
          classNames={{
            base: "bg-black/95",
            body: "p-0 overflow-hidden",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <ModalBody className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
                {/* Close Button */}
                <Button 
                  isIconOnly 
                  radius="full" 
                  variant="light" 
                  className="absolute top-6 right-6 text-white hover:bg-white/20 z-50"
                  onClick={onClose}
                >
                  <X className="w-8 h-8" />
                </Button>

                {/* Navigation Arrows */}
                {propertyImages.length > 1 && (
                  <>
                    <Button 
                      isIconOnly 
                      radius="full" 
                      variant="light" 
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50 h-16 w-16"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
                      }}
                    >
                      <ChevronLeft className="w-10 h-10" />
                    </Button>

                    <Button 
                      isIconOnly 
                      radius="full" 
                      variant="light" 
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50 h-16 w-16"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
                      }}
                    >
                      <ChevronRight className="w-10 h-10" />
                    </Button>
                  </>
                )}

                {/* Main Image Container - enforced viewport constraints */}
                <div className="flex items-center justify-center w-full h-full p-4 md:p-8">
                  <img 
                    src={propertyImages[selectedImageIndex]} 
                    alt={`Property Image ${selectedImageIndex + 1}`}
                    className="max-w-[95vw] max-h-[95vh] object-contain shadow-2xl rounded-lg select-none"
                    style={{ 
                      width: 'auto', 
                      height: 'auto', 
                      maxWidth: '95vw', 
                      maxHeight: '95vh',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Counter */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-black tracking-widest text-sm bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                  {selectedImageIndex + 1} / {propertyImages.length}
                </div>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      )}
    </main>
  );
}

function DetailRow({ label, value, icon }) {
  return (
    <div className="flex justify-between items-center py-6 border-b border-slate-50 hover:bg-slate-50 transition-colors px-2 rounded-xl group">
      <div className="flex items-center gap-4 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#005162] transition-colors">
        {icon}
        {label}
      </div>
      <div className="text-slate-900 font-black text-base tracking-tight">{value}</div>
    </div>
  );
}