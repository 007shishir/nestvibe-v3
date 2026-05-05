"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Divider,
  Textarea,
} from "@heroui/react";

export default function ProfessionalAgreement() {
  const [isEditing, setIsEditing] = useState(false);
  const [ownerType, setOwnerType] = useState("company"); // 'company' or 'individual'
  const [showFinishing, setShowFinishing] = useState(true); // ৬ নম্বর শর্তের টগল

  const [doc, setDoc] = useState({
    date: "২৯ এপ্রিল, ২০২৬",
    ownerName: "মোরশেদ আলম",
    repName: "ব্যবস্থাপনা পরিচালক",
    address: "মোহাম্মদপুর, ঢাকা",
    projectName: "স্বর্ণকুঞ্জ",
    propertyAddress: "রোড নং ১, মোহাম্মদী হাউজিং লিমিটেড, মোহাম্মদপুর, ঢাকা।",
    flatDetails: "৫ম তলা, ১৪৫০ বর্গফুট, গ্যারেজসহ",
    commissionRate: "৩% - ৫%",
    penaltyValue: "৫%",
    finishingDays: "৬০",
    validityMonths: "৬"
  });

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 py-10 print:bg-white print:py-0">

      {/* কন্ট্রোল প্যানেল (প্রিন্টে আসবে না) */}
      <div className="max-w-4xl mx-auto mb-6 px-6 print:hidden flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-6">
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#005B6E] mb-4">মালিকানার ধরন</span>
                <div className="flex flex-row gap-10">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="ownerType"
                      className="radio radio-primary radio-sm"
                      checked={ownerType === "company"}
                      onChange={() => setOwnerType("company")}
                    />
                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#005B6E] transition-colors">কোম্পানি</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="ownerType"
                      className="radio radio-primary radio-sm"
                      checked={ownerType === "individual"}
                      onChange={() => setOwnerType("individual")}
                    />
                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#005B6E] transition-colors">ব্যক্তি (Individual)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="toggle toggle-primary toggle-sm"
                  checked={showFinishing}
                  onChange={(e) => setShowFinishing(e.target.checked)}
                />
                <span className="text-xs font-bold text-slate-600">৬ নম্বর শর্ত (ফিনিশিং)</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-6">
            <Button variant="flat" className="bg-[#005B6E]/10 text-[#005B6E] font-bold" onPress={handlePrint}>Print to PDF</Button>
            <Button className="bg-[#005B6E] text-white font-bold" onPress={() => setIsEditing(!isEditing)}>
              {isEditing ? "চুক্তি প্রিভিউ দেখুন" : "তথ্য পরিবর্তন করুন"}
            </Button>
          </div>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto shadow-2xl border-none rounded-none print:shadow-none print:max-w-full">
        <CardBody className="p-12 sm:p-20 relative overflow-hidden bg-white">

          {/* লোগো ওয়াটারমার্ক (latest logo v1.png স্টাইল) */}
          <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none print:opacity-[0.04]">
            <span className="text-[600px] font-serif font-bold text-[#005B6E] leading-none -mr-32 -mt-32">N</span>
          </div>

          {/* হেডার */}
          <div className="flex justify-between items-start mb-16 relative z-10">
            <div className="space-y-1">
              <h1 className="text-4xl font-black text-[#005B6E] tracking-tighter leading-none">NESTVIBE</h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Real Estate Solutions</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">তারিখ:
                {isEditing ? <Input size="sm" variant="bordered" className="w-40 inline-block ml-2" value={doc.date} onChange={(e) => setDoc({ ...doc, date: e.target.value })} /> : ` ${doc.date}`}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-slate-800 mb-12 underline underline-offset-8 decoration-[#005B6E]/20">
            বিশেষ বিক্রয় ও বিপণন প্রতিনিধিত্ব চুক্তি
          </h2>

          <div className="space-y-8 text-slate-700 leading-[1.8] text-[15px] relative z-10 text-justify">

            {/* পক্ষগণ (Fixing image_7cffda.png overlap) */}
            <section className="space-y-4">
              <h3 className="text-[#005B6E] font-bold text-lg border-b border-[#005B6E]/10 pb-1">পক্ষগণ:</h3>
              <p>
                <span className="font-bold text-slate-900">নেস্টভাইব (NestVibe)</span>, একটি রিয়েল এস্টেট কনসালটেন্সি এবং ব্রোকারেজ ফার্ম, যার পক্ষে এর অনুমোদিত প্রতিনিধি, যাদেরকে পরবর্তীতে <span className="italic">"এজেন্সি"</span> (প্রথম পক্ষ) হিসেবে অভিহিত করা হবে।
              </p>

              <div className="flex items-center gap-4 py-2">
                <Divider className="flex-1" /> <span className="font-bold text-slate-400">এবং</span> <Divider className="flex-1" />
              </div>

              {isEditing ? (
                <div className="bg-slate-50 p-8 rounded-lg border-2 border-dashed border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <Input label="মালিকের নাম" labelPlacement="outside" placeholder="মালিকের নাম লিখুন" variant="bordered" value={doc.ownerName} onChange={(e) => setDoc({ ...doc, ownerName: e.target.value })} />
                  {ownerType === "company" && (
                    <Input label="প্রতিনিধির নাম / পদবী" labelPlacement="outside" placeholder="পদবী লিখুন" variant="bordered" value={doc.repName} onChange={(e) => setDoc({ ...doc, repName: e.target.value })} />
                  )}
                  <Input label={ownerType === "company" ? "কার্যালয়ের ঠিকানা" : "বাসার ঠিকানা"} labelPlacement="outside" placeholder="ঠিকানা লিখুন" className="md:col-span-2" variant="bordered" value={doc.address} onChange={(e) => setDoc({ ...doc, address: e.target.value })} />
                </div>
              ) : (
                <p>
                  {ownerType === "company" ? (
                    <span>
                      <span className="font-bold text-slate-900">{doc.ownerName}</span>, যার পক্ষে এর ব্যবস্থাপনা পরিচালক/অনুমোদিত স্বাক্ষরকারী <span className="font-bold text-slate-900">{doc.repName}</span>, যার প্রধান কার্যালয় <span className="font-bold text-slate-900">{doc.address}</span>-তে অবস্থিত, যাদেরকে পরবর্তীতে <span className="italic">"মালিক"</span> (দ্বিতীয় পক্ষ) হিসেবে অভিহিত করা হবে।
                    </span>
                  ) : (
                    <span>
                      <span className="font-bold text-slate-900">{doc.ownerName}</span>, যার বর্তমান ঠিকানা <span className="font-bold text-slate-900">{doc.address}</span>, যাদেরকে পরবর্তীতে <span className="italic">"মালিক"</span> (দ্বিতীয় পক্ষ) হিসেবে অভিহিত করা হবে।
                    </span>
                  )}
                </p>
              )}
            </section>

            {/* ১. চুক্তির বিষয়বস্তু */}
            <section className="space-y-3">
              <h3 className="font-bold text-slate-800">১. চুক্তির বিষয়বস্তু</h3>
              <p>মালিক নিম্নোক্ত সম্পত্তির বিপণন এবং বিক্রয়ের জন্য নেস্টভাইবকে একমাত্র বা বিশেষ এজেন্সি হিসেবে নিযুক্ত করছেন:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">প্রকল্পের নাম</span>
                  {isEditing ? <Input size="sm" variant="bordered" placeholder="প্রকল্পের নাম" value={doc.projectName} onChange={(e) => setDoc({ ...doc, projectName: e.target.value })} /> : <span className="font-semibold">{doc.projectName}</span>}
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">ঠিকানা</span>
                  {isEditing ? <Input size="sm" variant="bordered" placeholder="সম্পত্তির ঠিকানা" value={doc.propertyAddress} onChange={(e) => setDoc({ ...doc, propertyAddress: e.target.value })} /> : <span className="font-semibold">{doc.propertyAddress}</span>}
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">ফ্ল্যাটের বিবরণ</span>
                  {isEditing ? <Input size="sm" variant="bordered" placeholder="ফ্ল্যাটের বিবরণ" value={doc.flatDetails} onChange={(e) => setDoc({ ...doc, flatDetails: e.target.value })} /> : <span className="font-semibold">{doc.flatDetails}</span>}
                </div>
              </div>
            </section>

            {/* ২. কমিশন */}
            <section className="space-y-2">
              <h3 className="font-bold text-slate-800">২. কমিশন ও পরিশোধের শর্তাবলী</h3>
              <p><strong>২.১ হার:</strong> মালিক মোট বিক্রয়মূল্যের ওপর {isEditing ? <Input size="sm" variant="bordered" className="w-24 inline-block mx-2 translate-y-1" value={doc.commissionRate} onChange={(e) => setDoc({ ...doc, commissionRate: e.target.value })} /> : <span className="font-bold"> {doc.commissionRate} </span>} হারে কমিশন প্রদান করতে সম্মত হয়েছেন।</p>
              <p><strong>২.২ কমিশনের অধিকার:</strong> ফ্ল্যাট বুকিং বা বায়না দলিল সম্পন্ন হওয়া মাত্রই এজেন্সি কমিশনের অধিকারী হবে।</p>
              <p><strong>২.৩ পরিশোধ:</strong> ক্রেতার নিকট থেকে ফ্ল্যাটের মূল্যের ২৫% আদায় হলে কমিশনের ৫০% এবং বাকি ৫০% রেজিস্ট্রেশনের আগে পরিশোধযোগ্য।</p>
            </section>

            {/* ৩ ও ৪ নং শর্ত (দলিলাদি) */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 print:block print:space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800">৩. ঘোষণা ও আইনি অবস্থান</h3>
                <p className="text-xs text-slate-500">সম্পত্তিটি নিষ্কণ্টক এবং ব্যাংক ঋণমুক্ত হতে হবে (ঋণ থাকলে তার অনাপত্তিপত্র দিতে হবে)। পূর্ববর্তী ক্রেতার কোনো বুকিং থাকলে তা বাতিলকৃত হতে হবে।</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800">৪. প্রয়োজনীয় দলিলাদি</h3>
                <p className="text-xs text-slate-500">মালিককে ৭ দিনের মধ্যে মূল দলিল, ভায়া দলিল, খতিয়ান (CS, SA, RS, BS), মিউটেশন এবং রাজউক অনুমোদিত নকশার কপি প্রদান করতে হবে।</p>
              </div>
            </section>

            {/* ৫ ও ৬ নং শর্ত */}
            <section className="space-y-4">
              <p><strong>৫. দণ্ড:</strong> ভুল তথ্য প্রদান করলে মালিক মোট মূল্যের {isEditing ? <Input size="sm" variant="bordered" className="w-24 inline-block mx-2 translate-y-1" value={doc.penaltyValue} onChange={(e) => setDoc({ ...doc, penaltyValue: e.target.value })} /> : <span className="font-bold"> {doc.penaltyValue} </span>} টাকা ক্ষতিপূরণ দিতে বাধ্য থাকবেন।</p>

              {showFinishing && (
                <div className="p-4 bg-slate-50 border-l-4 border-[#005B6E] print:bg-white print:border-l-0 print:p-0">
                  <p><strong>৬. ফিনিশিং কাজ ও হস্তান্তর:</strong> মালিক গ্যারান্টি দিচ্ছেন যে অবশিষ্ট কাজ {isEditing ? <Input size="sm" variant="bordered" className="w-16 inline-block mx-2 translate-y-1" value={doc.finishingDays} onChange={(e) => setDoc({ ...doc, finishingDays: e.target.value })} /> : <span className="font-bold"> {doc.finishingDays} </span>} দিনের মধ্যে শেষ হবে।</p>
                </div>
              )}
            </section>

            <section className="text-center italic text-slate-400 pt-4 border-t border-slate-100">
              চুক্তির মেয়াদ: {isEditing ? <Input size="sm" variant="bordered" className="w-16 inline-block mx-2 translate-y-1" value={doc.validityMonths} onChange={(e) => setDoc({ ...doc, validityMonths: e.target.value })} /> : doc.validityMonths} মাস।
            </section>

            {/* স্বাক্ষর */}
            <div className="mt-32 grid grid-cols-2 gap-24 pt-20">
              <div className="text-center">
                <Divider className="mb-3" />
                <p className="font-bold text-[#005B6E]">নেস্টভাইব (এজেন্সি)</p>
              </div>
              <div className="text-center">
                <Divider className="mb-3" />
                <p className="font-bold text-slate-800">মালিক (দ্বিতীয় পক্ষ)</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}