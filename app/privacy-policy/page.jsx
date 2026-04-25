import React from 'react';
import { Shield, Lock, Eye, Globe, Smartphone, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "October 26, 2023"; // Update as needed

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-900 px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300">
            At NestVibe, we are committed to protecting your personal information and your right to privacy.
          </p>
          <p className="text-sm text-slate-400 mt-6 italic">Last Updated: {lastUpdated}</p>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NestVibe ("we," "us," or "our") understands the importance of safeguarding the personal information you provide when using our website and services. This policy explains how we collect, use, and protect your information to ensure a transparent and secure experience.
            </p>
          </section>

          {/* Collection of Information */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="text-blue-600 w-6 h-6" />
                <h3 className="text-xl font-medium text-gray-800">Personal Data</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We collect information you voluntarily provide, such as your name, phone number, email address, and property preferences, primarily through contact forms and account registrations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="text-blue-600 w-6 h-6" />
                <h3 className="text-xl font-medium text-gray-800">Usage Logs & Cookies</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our servers automatically record information like your IP address, browser type, and device identifiers. We use cookies to personalize your experience and track site performance.
              </p>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span> To improve customer service and support.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span> To personalize your property search experience.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span> To send periodic updates and newsletters.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span> To process transactions and manage inquiries.
              </li>
            </ul>
          </section>

          {/* Device & Mobile */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">Mobile Devices</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              When accessing NestVibe via mobile, we may receive data about your location and device model. You can manage these permissions through your device's privacy settings at any time.
            </p>
          </section>

          {/* Security & Changes */}
          <section className="border-t border-gray-100 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">Updates & Consent</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NestVibe reserves the right to update this policy. Your continued use of our services constitutes acceptance of these terms. We do not knowingly collect data from children under the age of 13.
            </p>
          </section>

          {/* Contact Footer */}
          <div className="text-center pt-8">
            <p className="text-gray-500 mb-4">Have questions about your data?</p>
            <a 
              href="mailto:info@nestvibe.com" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;