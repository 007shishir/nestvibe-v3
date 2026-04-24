'use client';

import React, { useState, useEffect } from 'react';
import { Button, Link, Image } from "@heroui/react";
import { Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setUser(data.user);
        }
      })
      .catch(err => console.error("Session check failed"));
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    window.location.reload();
  };

  return (
    <>
      {/* Top Header */}
      <div className="bg-slate-900 text-white text-[12px] py-2 px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span>Valuation Tool</span>
            <span>Home Loans</span>
            <span>Blog</span>
          </div>
          <div className="flex gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-[#00f0c0] font-bold">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-white text-[12px] hover:text-slate-300">Logout</button>
              </div>
            ) : (
              <Link href="/auth" className="text-white text-[12px] hover:text-[#00f0c0] transition-colors">Sign In / Sign Up</Link>
            )}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-slate-900">
              <Image src="/logo.png" alt="NestVibe Logo" width={200} />
            </Link>
            <div className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-slate-600">
              <Link href="/buy" className="hover:text-[#005162]">BUY</Link>
              <Link href="/rent" className="hover:text-[#005162]">RENT</Link>
              <Link href="/commercial" className="hover:text-[#005162]">COMMERCIAL</Link>
              <Link href="/pricing" className="hover:text-[#005162]">PRICING</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button color="primary" variant="solid" className="hidden md:flex bg-[#005162] text-white font-semibold rounded-full">
              SELL YOUR PROPERTY
            </Button>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            <Link href="/buy" className="block text-slate-600 font-medium">BUY</Link>
            <Link href="/rent" className="block text-slate-600 font-medium">RENT</Link>
            <Link href="/commercial" className="block text-slate-600 font-medium">COMMERCIAL</Link>
            <Link href="/pricing" className="block text-slate-600 font-medium">PRICING</Link>
            <Button color="primary" className="w-full bg-[#005162] text-white">SELL YOUR PROPERTY</Button>
          </div>
        )}
      </nav>
    </>
  );
}
