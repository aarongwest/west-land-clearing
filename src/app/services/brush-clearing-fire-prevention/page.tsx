import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export const metadata = {
  title: "Brush Clearing & Fire Prevention | West Land Clearing",
  description: "Professional brush clearing and fire prevention services for property protection. Our specialized services include defensible space creation, fire break installation, and brush management throughout Greater Houston.",
  keywords: "brush clearing, fire prevention, defensible space, fire break installation, Greater Houston brush management, wildfire protection, vegetation management",
};

export default function BrushClearingFirePreventionPage() {
  // Main content column
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Construction Services
        </span>
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Brush Clearing & Fire Prevention <br />
        <span className="text-zinc-400">Property Protection Solutions</span>
      </h1>
      
      <p className="text-lg text-zinc-400 mb-12">
        West Land Clearing provides specialized brush clearing and fire prevention services designed to 
        protect properties from wildfire risk. Our comprehensive approach includes defensible space 
        creation, fire break installation, and vegetation management tailored to the Greater Houston landscape.
      </p>

      {/* Service Description */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Fire Prevention Services</h2>
        
        <div className="space-y-6">
          <p className="text-zinc-400">
            In Greater Houston's humid climate, brush management and defensible space 
            creation is essential for property protection. Our specialized services help reduce fire hazards 
            while maintaining the natural beauty of your landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Defensible Space Creation</h3>
              <p className="text-zinc-400">
                We create defensible zones around structures by selectively clearing vegetation, 
                implementing proper spacing, and establishing fire-resistant landscaping to reduce fire risk.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Fire Break Installation</h3>
              <p className="text-zinc-400">
                Our team designs and implements strategic fire breaks that can slow or stop the spread 
                of wildfires, providing critical protection for your property.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Brush Management</h3>
              <p className="text-zinc-400">
                We provide selective clearing of hazardous brush and vegetation while preserving 
                desirable plants and trees, reducing fuel loads that contribute to fire spread.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Property Risk Assessment</h3>
              <p className="text-zinc-400">
                Our experts evaluate your property's specific wildfire vulnerabilities and recommend 
                customized fire prevention strategies based on topography, vegetation, and local fire history.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">The West Land Clearing Advantage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Fire Prevention Expertise</h3>
            <p className="text-zinc-400">
              Our team understands vegetation management and prevention strategies specific to Greater Houston's
              diverse ecosystems and suburban-rural interface areas.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Environmental Responsibility</h3>
            <p className="text-zinc-400">
              We implement brush clearing techniques that protect against fire while minimizing 
              environmental impact and preserving habitat where appropriate.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Specialized Equipment</h3>
            <p className="text-zinc-400">
              Our brush clearing operations utilize specialized equipment designed for efficient 
              vegetation management even on challenging terrain.
            </p>
          </div>
        </div>
      </div>
      
      {/* Applications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Fire Prevention Applications</h2>
        
        <div className="p-6 bg-zinc-800/50 rounded-lg mb-6">
          <h3 className="font-semibold mb-3">Residential Fire Protection</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
            <li>Home defensible space creation</li>
            <li>Property boundary fire breaks</li>
            <li>Access road clearing for emergency vehicles</li>
            <li>Strategic vegetation management</li>
            <li>Fire-resistant landscaping preparation</li>
            <li>Brush removal from structures and utilities</li>
          </ul>
        </div>
        
        <div className="p-6 bg-zinc-800/50 rounded-lg">
          <h3 className="font-semibold mb-3">Commercial & Agricultural Applications</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
            <li>Commercial property fire protection</li>
            <li>Large-scale fire break implementation</li>
            <li>Agricultural land fire prevention</li>
            <li>Forest management and fuel reduction</li>
            <li>Ranch and farm protection strategies</li>
            <li>Community wildfire protection implementation</li>
          </ul>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Protect your property from wildfire risks</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today to discuss your fire prevention needs and get a free property assessment. 
          Our team of specialists is ready to help safeguard your property with effective brush clearing 
          and fire prevention strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );

  // Side content column with quick contact form
  const sideContent = (
    <div className="mt-8 lg:mt-0 lg:sticky lg:top-8">
      <QuickContactForm />
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <TwoColumnLayout 
        mainContent={mainContent}
        sideContent={sideContent}
      />
    </div>
  );
}
