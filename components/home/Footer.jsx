"use client";

import React from "react";
import { Image, Link } from "@heroui/react";
import LocationList from "@/components/home/footer/LocationList.jsx";
import {
  Home,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex gap-2 mb-2">
              <Image src="/logo.png" alt="NestVibe Logo" width={150} />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              The leading real estate marketplace in Dhaka, providing digital
              solutions for property seekers and Owners.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/bdNestVibe" target="_blank">
                <Facebook className="w-5 h-5 hover:text-[#005162] cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <Linkedin className="w-5 h-5 hover:text-[#005162] cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="w-5 h-5 hover:text-[#005162] cursor-pointer" />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank">
                <Youtube className="w-5 h-5 hover:text-[#005162] cursor-pointer" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white">Our Blog</Link></li>
              <li><Link href="/terms-of-use" className="text-slate-300 hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">POPULAR SEARCHES</h4>
            <LocationList />
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">CONTACT US</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#005162]" />
                Gulshan, Dhaka, Bangladesh
              </li>
              <li>Email: info@gmail.com</li>
              <li>Phone: +8801749045892</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2026 NestVibe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-slate-300 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-slate-300 hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
