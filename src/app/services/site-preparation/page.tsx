import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export const metadata = {
  title: "Site Preparation Services | West Land Clearing",
  description: "Professional site preparation for new construction projects. Land clearing, stump removal, access road clearing, and vegetation removal throughout Greater Houston.",
  keywords: "site preparation land clearing, construction site clearing, building site preparation, land clearing site prep, Greater Houston site prep, access road clearing, vegetation removal",
};

export default function SitePreparationPage() {
  // Main content column
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Land Clearing Services
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Comprehensive Site Preparation <br />
        <span className="text-zinc-400">For New Construction Projects</span>
      </h1>

      <p className="text-lg text-zinc-400 mb-12">
        West Land Clearing provides complete site preparation services for residential construction
        projects throughout Greater Houston. From initial vegetation clearing to access road establishment,
        our experienced team ensures your build site is properly prepared for construction.
      </p>

      {/* Service Description */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Site Preparation Services</h2>
        
        <div className="space-y-6">
          <p className="text-zinc-400">
            Proper site preparation is the foundation of every successful construction project. 
            Our comprehensive approach addresses all aspects of preparing your land for construction, 
            ensuring a stable, accessible, and well-prepared building site.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Initial Site Clearing</h3>
              <p className="text-zinc-400">
                We remove vegetation, trees, rocks, and debris from your construction site, 
                creating a clean canvas for your building project.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Building Pad Preparation</h3>
              <p className="text-zinc-400">
                We create level, compacted building pads that provide stable foundations 
                for structures, ensuring proper drainage and soil stability.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Access Road Construction</h3>
              <p className="text-zinc-400">
                We establish well-designed temporary or permanent access roads that support 
                construction traffic and provide efficient site access.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">Vegetation Clearing</h3>
              <p className="text-zinc-400">
                We remove brush, trees, and overgrowth from the full building envelope, preparing
                a clean site for your foundation contractor and crew.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Additional Site Preparation Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Erosion Control Implementation</h3>
            <p className="text-zinc-400">
              We install silt fencing, erosion control blankets, and other measures to prevent 
              soil erosion during construction, meeting environmental regulations.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Storm Water Management</h3>
            <p className="text-zinc-400">
              We create effective drainage systems and retention areas to manage 
              rainfall and prevent water accumulation on your construction site.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Stump Removal</h3>
            <p className="text-zinc-400">
              We grind stumps below grade as part of site preparation, ensuring a clean,
              buildable surface for your construction project.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Final Site Cleanup</h3>
            <p className="text-zinc-400">
              We complete final cleanup and debris removal to deliver a site that is ready
              for your builder, contractor, or landscaping crew.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">The West Land Clearing Advantage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Full-Service Capability</h3>
            <p className="text-zinc-400">
              We handle all aspects of site preparation with our own equipment and team, 
              providing seamless coordination throughout the process.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Project Planning Expertise</h3>
            <p className="text-zinc-400">
              Our experience allows us to anticipate site challenges and implement solutions 
              that prevent costly delays or complications.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Regulatory Compliance</h3>
            <p className="text-zinc-400">
              We ensure all site preparation work complies with local regulations, 
              permits, and environmental requirements.
            </p>
          </div>
        </div>
      </div>
      
      {/* Applications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Site Preparation Applications</h2>
        
        <div className="p-6 bg-zinc-800/50 rounded-lg mb-6">
          <h3 className="font-semibold mb-3">Residential Applications</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
            <li>New home construction sites</li>
            <li>Residential development preparation</li>
            <li>Home addition preparation</li>
            <li>Accessory building sites</li>
            <li>Driveway and walkway preparation</li>
            <li>Landscape renovation preparation</li>
          </ul>
        </div>
        
        <div className="p-6 bg-zinc-800/50 rounded-lg">
          <h3 className="font-semibold mb-3">Commercial Applications</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
            <li>Commercial building sites</li>
            <li>Industrial development preparation</li>
            <li>Retail center site work</li>
            <li>Office building preparation</li>
            <li>Parking lot and access road construction</li>
            <li>Infrastructure project preparation</li>
          </ul>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Ready to prepare your construction site?</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today to discuss your site preparation needs and get a free quote. Our team 
          of experienced operators is ready to help prepare your site for a successful construction project.
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
