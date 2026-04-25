import React from 'react';
import { Scale, FileText, AlertCircle, Home, Gavel, DollarSign, UserCheck } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

const TermsOfUse = () => {
  const lastUpdated = "April 2026";

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-800 px-8 py-14 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4">
            <Scale className="text-white w-7 h-7" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            By accessing NestVibe, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <p className="text-sm text-slate-400 mt-6 uppercase tracking-widest font-semibold">Effective Date: {lastUpdated}</p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* 1. Scope of Services */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Home className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800">1. Scope of Services</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NestVibe operates as a professional real estate intermediary. We provide platform-based property listings, marketing, and lead generation services. Unless explicitly stated, NestVibe does not own, develop, or directly sell the properties listed on our platform.
            </p>
          </section>

          {/* 2. Information Accuracy */}
          <section className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="text-amber-600 w-6 h-6" />
              <h2 className="text-xl font-bold text-gray-800">2. Accuracy of Listings</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Property data (price, size, availability) is gathered from owners and developers. While we strive for accuracy, we do not guarantee that all information is error-free. Visual representations such as floor plans and images are for <strong>illustrative purposes only</strong>.
            </p>
          </section>

          {/* 3. Fees & Commissions */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <DollarSign className="text-blue-600 w-5 h-5" />
                <h3 className="text-lg font-bold text-gray-800">Fees & Commissions</h3>
              </div>
              <p className="text-sm text-gray-600">
                Any service charges or commissions will be communicated prior to engagement. NestVibe reserves the right to claim commission upon the successful completion of a transaction facilitated by our platform.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <UserCheck className="text-blue-600 w-5 h-5" />
                <h3 className="text-lg font-bold text-gray-800">Client Responsibility</h3>
              </div>
              <p className="text-sm text-gray-600">
                Clients are responsible for conducting their own due diligence, including legal, financial, and physical verification of properties before signing any contracts.
              </p>
            </div>
          </section>

          {/* 4. No Legal Advice */}
          <section className="border-t border-gray-100 pt-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800">4. Professional Advice Disclaimer</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NestVibe does <strong>not</strong> provide legal, tax, or financial advisory services. All content provided is for general guidance. We strongly recommend consulting with qualified professionals before finalizing any real estate transaction.
            </p>
          </section>

          {/* 5. Governing Law */}
          <section className="border-t border-gray-100 pt-10">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800">5. Governing Law</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of <strong>Bangladesh</strong>. Any disputes arising from the use of our services shall fall under the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
            </p>
          </section>

          {/* Footer/Contact */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="text-xl font-semibold mb-2">Questions regarding our Terms?</h3>
            <p className="text-gray-400 mb-6 text-sm">Our legal team is here to clarify any concerns you may have.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:legal@nestvibe.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors font-medium">
                Email Legal
              </a>
              <button className="border border-gray-600 hover:bg-gray-800 px-6 py-2 rounded-lg transition-colors font-medium">
                Print Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsOfUse;