import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../components/forms/QuickContactForm";

export const metadata = {
  title: "Construction Services by Industry | West Land Clearing",
  description: "Professional excavation and land clearing services tailored to specific industries. We provide specialized construction solutions for residential, commercial, and agricultural sectors.",
  keywords: "excavation, land clearing, construction services, residential construction, commercial construction, agricultural land clearing, Greater Houston construction services, brush clearing",
};

export default function IndustriesPage() {
  // Main content column
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Industry Solutions
        </span>
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Specialized Construction Services <br />
        <span className="text-zinc-400">By Industry</span>
      </h1>
      
      <p className="text-lg text-zinc-400 mb-12">
        West Land Clearing provides customized excavation, land clearing, and site preparation solutions for a wide range of industries. 
        Our experienced team understands the unique challenges and requirements of each sector, 
        delivering specialized construction services that meet industry-specific standards and needs.
      </p>

      {/* Industries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <Link href="/industries/construction" className="p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Commercial Construction</h2>
          <p className="text-zinc-400 mb-4">
            Comprehensive excavation, site preparation, and land clearing services for commercial construction projects.
          </p>
          <span className="text-white inline-flex items-center">
            View Commercial Construction Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
        
        <Link href="/industries/agricultural" className="p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Agricultural</h2>
          <p className="text-zinc-400 mb-4">
            Land clearing, grading, and site preparation for agricultural properties, farms, and ranch development.
          </p>
          <span className="text-white inline-flex items-center">
            View Agricultural Construction Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
        
        <Link href="/industries/residential" className="p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Residential</h2>
          <p className="text-zinc-400 mb-4">
            Excavation for new home construction, yard grading, drainage solutions, and residential brush clearing.
          </p>
          <span className="text-white inline-flex items-center">
            View Residential Construction Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
        
        <Link href="/services/brush-clearing-fire-prevention" className="p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Fire Prevention</h2>
          <p className="text-zinc-400 mb-4">
            Specialized brush clearing, defensible space creation, and fire break installation for property protection.
          </p>
          <span className="text-white inline-flex items-center">
            View Fire Prevention Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
      
      {/* Our Approach */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Industry-Specific Approach</h2>
        
        <div className="space-y-6">
          <p className="text-zinc-400">
            At West Land Clearing, we understand that each industry has unique excavation and land clearing requirements. Our approach combines:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Industry Knowledge</h3>
              <p className="text-zinc-400">
                Our operators are trained to understand the specific needs, standards, and challenges of different industries and property types.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Specialized Equipment</h3>
              <p className="text-zinc-400">
                We utilize modern, specialized equipment tailored to the unique requirements of each industry and project type.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Environmental Considerations</h3>
              <p className="text-zinc-400">
                Different industries have different environmental concerns. We implement appropriate erosion control and environmental protection measures.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Compliance Knowledge</h3>
              <p className="text-zinc-400">
                We stay informed about industry-specific codes, permits, and regulations to ensure compliant excavation and land clearing services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Welding Division Promo */}
      <div className="p-8 bg-zinc-800/80 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">West Land Clearing</h2>
        <p className="text-zinc-400 mb-6">
          For forestry mulching, land clearing, stump grinding, and brush removal, check out our sister company West Land Clearing serving Greater Houston.
        </p>
        <Link href="/about" className="btn-outline">
          Learn More About Our Company
        </Link>
      </div>
      
      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need industry-specific construction services?</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today to discuss your excavation, land clearing, or site preparation needs and get a free quote. Our team of experienced operators is ready to assist with your industry-specific requirements.
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
