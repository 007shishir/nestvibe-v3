"use client";

import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Card,
  CardBody,
  Slider,
  Divider,
  Accordion,
  AccordionItem,
} from "@heroui/react";
import {
  Calculator,
  ShieldCheck,
  FileSearch,
  TrendingDown,
  Building2,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function HomeLoan() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTerm, setLoanTerm] = useState(20);
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  // Logic for EMI Calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  useEffect(() => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTerm * 12;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyEMI(Math.round(emi));
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Secure Your Future with{" "}
              <span className="text-cyan-400">Smart Financing</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Navigating the home loan process in Bangladesh doesn't have to be
              complicated. NestVibe connects you with the best banking partners.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 -mt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Loan Calculator */}
            <Card className="lg:col-span-7 shadow-xl border-none">
              <CardBody className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8 mt-8">
                  <Calculator className="text-[#005162] w-6 h-6" />
                  <h2 className="text-2xl font-bold text-slate-800">
                    Home Loan EMI Calculator
                  </h2>
                </div>

                <div className="space-y-10">
                  {/* Loan Amount Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <label className="font-semibold text-slate-700">
                        Loan Amount (BDT)
                      </label>
                      <span className="text-[#005162] font-bold">
                        ৳ {loanAmount.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      step={100000}
                      maxValue={20000000}
                      minValue={500000}
                      value={loanAmount}
                      onChange={(v) => setLoanAmount(v)}
                      className="max-w-full"
                      color="primary"
                    />
                  </div>

                  {/* Interest Rate Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <label className="font-semibold text-slate-700">
                        Interest Rate (%)
                      </label>
                      <span className="text-[#005162] font-bold">
                        {interestRate}%
                      </span>
                    </div>
                    <Slider
                      step={0.1}
                      maxValue={15}
                      minValue={5}
                      value={interestRate}
                      onChange={(v) => setInterestRate(v)}
                      color="primary"
                    />
                  </div>

                  {/* Loan Term Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <label className="font-semibold text-slate-700">
                        Loan Term (Years)
                      </label>
                      <span className="text-[#005162] font-bold">
                        {loanTerm} Years
                      </span>
                    </div>
                    <Slider
                      step={1}
                      maxValue={30}
                      minValue={1}
                      value={loanTerm}
                      onChange={(v) => setLoanTerm(v)}
                      color="primary"
                    />
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-8 text-center mt-12 shadow-inner">
                    <p className="text-slate-400 text-sm uppercase tracking-widest mb-2 font-medium">
                      Estimated Monthly EMI
                    </p>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                      ৳ {monthlyEMI.toLocaleString()}
                    </h3>
                    <p className="text-cyan-400 text-xs mt-4">
                      Calculated based on selected parameters.*
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Right Column: Why Take a Loan? */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="bg-[#005162] text-white border-none shadow-xl">
                <CardBody className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                    The Wisdom of Bank Financing
                  </h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <FileSearch className="w-8 h-8 text-cyan-300 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">
                          The Ultimate Verification:
                        </strong>{" "}
                        Even if you have the cash, taking a small loan is a
                        masterstroke. The bank’s legal team will verify every
                        single document, CS/SA/RS porcha, and mutation, ensuring
                        the property is 100% dispute-free.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <TrendingDown className="w-8 h-8 text-cyan-300 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Tax Benefits:</strong>{" "}
                        Under Bangladesh law, the interest paid on a home loan
                        can provide significant tax rebates, reducing your
                        overall yearly tax liability.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Wallet className="w-8 h-8 text-cyan-300 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">
                          Liquidity Management:
                        </strong>{" "}
                        Keep your savings for interior design or emergencies.
                        Use the bank's money to build your asset while your own
                        cash stays liquid.
                      </p>
                    </div>
                  </div>

                  <Divider className="my-8 bg-white/10" />

                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <p className="text-xs italic text-cyan-100">
                      "A bank loan is not just debt; it is a seal of
                      authenticity for your property."
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-none shadow-md">
                <CardBody className="p-8">
                  <h3 className="font-bold text-slate-800 mb-4 text-lg">
                    Partner Banks
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "DBH",
                      "IDLC",
                      "Brac Bank",
                      "City Bank",
                      "MTB",
                      "EBL",
                    ].map((bank) => (
                      <div
                        key={bank}
                        className="flex items-center gap-2 text-slate-600 text-sm font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#005162]" />
                        {bank}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200">
                    Speak to a Loan Expert
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Bottom Section: Steps to Apply */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">
                How It Works
              </h2>
              <p className="text-slate-500">
                From application to disbursement in 4 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Discuss your budget and eligibility with our experts.",
                },
                {
                  step: "02",
                  title: "Documentation",
                  desc: "We help you gather property and personal documents.",
                },
                {
                  step: "03",
                  title: "Legal Check",
                  desc: "Our partner banks conduct a rigorous title verification.",
                },
                {
                  step: "04",
                  title: "Approval",
                  desc: "Funds are disbursed and you become a proud homeowner.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
                >
                  <span className="text-5xl font-black text-slate-50 absolute -top-4 -left-2 z-0">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h4 className="font-bold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
