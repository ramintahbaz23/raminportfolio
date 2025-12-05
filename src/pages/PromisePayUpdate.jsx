import React from 'react';
import { Helmet } from 'react-helmet-async';

const PromisePayUpdate = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Helmet>
        <title>PromisePay Program Update</title>
        <meta
          name="description"
          content="PromisePay Program Update - Applications Now Closed"
        />
      </Helmet>
      
      {/* Main Container */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header Section with Logo */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Blue W Logo */}
            <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-3xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>W</span>
            </div>
            <div className="text-left">
              <p className="text-blue-600 text-xs uppercase leading-tight mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                A Service of The City of Cincinnati
              </p>
              <p className="text-blue-600 text-sm uppercase font-semibold leading-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Greater Cincinnati Water Works
              </p>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-10" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            PromisePay Program Update
          </h1>
        </header>

        {/* Main Content Section */}
        <main className="space-y-8 mb-16">
          {/* Status Banner */}
          <div className="rounded-2xl px-8 py-5 text-center" style={{ backgroundColor: '#FFA500' }}>
            <p className="text-black font-bold text-xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Applications Now Closed
            </p>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-black text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            We are no longer accepting new payment plans.
          </p>

          {/* Instructional Block 1 */}
          <div className="space-y-3">
            <h2 className="text-black font-bold text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              If you already have a plan:
            </h2>
            <p className="text-black text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              You're all set. Continue using PromisePay as normal.
            </p>
          </div>

          {/* Instructional Block 2 */}
          <div className="space-y-3">
            <h2 className="text-black font-bold text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              If you didn't enroll:
            </h2>
            <p className="text-black text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              This enrollment period has ended.
            </p>
          </div>
        </main>

        {/* Separator Line */}
        <hr className="border-gray-300 my-12" />

        {/* Footer Section */}
        <footer className="space-y-8">
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <p className="text-black text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Customer Service</p>
              <p className="text-black text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Email</p>
            </div>
            <div className="space-y-4 text-right">
              <p className="text-black text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>(513)-586-5917</p>
              <p className="text-black text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>support@promise-pay.com</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <a 
              href="#" 
              className="block text-black text-base underline hover:text-blue-600 transition-colors"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Frequently Asked Questions
            </a>
            <a 
              href="#" 
              className="block text-black text-base underline hover:text-blue-600 transition-colors"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Terms of Use
            </a>
            <a 
              href="#" 
              className="block text-black text-base underline hover:text-blue-600 transition-colors"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Privacy Policy
            </a>
          </div>

          {/* Powered by Section */}
          <div className="flex justify-center mt-10">
            <div className="border border-black rounded-lg px-8 py-4 bg-white">
              <p className="text-black text-base text-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span>Powered by </span>
                <span className="font-bold">PromisePay</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PromisePayUpdate;


