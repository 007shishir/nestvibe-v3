import React from 'react';
import { Cookie, ShieldCheck, Settings, Info, MousePointerClick, ToggleRight } from 'lucide-react';

const CookiesPolicy = () => {
  const lastUpdated = "April 2026";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Cookie className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookies Policy</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            This policy explains how NestVibe uses cookies and similar technologies to recognize you when you visit our website.
          </p>
          <p className="text-sm text-blue-200 mt-6 italic">Last Updated: {lastUpdated}</p>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* What are Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">What are Cookies?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          {/* Types of Cookies We Use */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Them</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                <h3 className="font-bold text-gray-800 mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-600">
                  Strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                </p>
              </div>
              
              <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                <h3 className="font-bold text-gray-800 mb-2">Performance & Analytics</h3>
                <p className="text-sm text-gray-600">
                  These cookies collect information that is used either in aggregate form to help us understand how our Website is being used (e.g., Google Analytics).
                </p>
              </div>

              <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                <h3 className="font-bold text-gray-800 mb-2">Functionality Cookies</h3>
                <p className="text-sm text-gray-600">
                  Used to enhance the performance and functionality of our Website but are non-essential to its use (e.g., remembering your language preference).
                </p>
              </div>

              <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                <h3 className="font-bold text-gray-800 mb-2">Advertising Cookies</h3>
                <p className="text-sm text-gray-600">
                  Used to make advertising messages more relevant to you and your interests based on your browsing habits.
                </p>
              </div>
            </div>
          </section>

          {/* User Control */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-slate-700 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">How Can I Control Cookies?</h2>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-gray-700">
                <MousePointerClick className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Most browsers allow you to block cookies via the <strong>Settings</strong> or <strong>Privacy</strong> menu.</span>
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <ToggleRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Note that if you choose to reject cookies, your access to some functionality and areas of our Website may be restricted.</span>
              </div>
            </div>
          </section>

          {/* Consent Statement */}
          <section className="text-center pt-8 border-t border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Updates to This Policy</h3>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          {/* Contact Action */}
          <div className="text-center">
            <button className="text-blue-600 font-semibold hover:underline">
              Manage Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;