import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Construction Projects | West Land Clearing - Greater Houston Excavation",
  description: "View our completed construction projects across Greater Houston. West Land Clearing specializes in excavation, grading, and professional site preparation services.",
  keywords: "construction projects, excavation Greater Houston, site preparation portfolio, grading showcase, construction case studies",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
            Our Work
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Construction Project Showcase <br />
          <span className="text-zinc-400">Quality Excavation & Land Clearing</span>
        </h1>
        
        <p className="text-lg text-zinc-400 mb-12">
          At West Land Clearing, we take pride in our workmanship and attention to detail. Below are examples of our excavation and land clearing work, showcasing our expertise across various construction projects and industries.
        </p>

        {/* Project Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition-colors">
              <h3 className="font-semibold mb-3">Land Clearing</h3>
              <p className="text-sm text-zinc-400">Professional brush clearing and vegetation removal for development projects.</p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition-colors">
              <h3 className="font-semibold mb-3">Excavation</h3>
              <p className="text-sm text-zinc-400">Precision excavation for residential and commercial construction projects.</p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition-colors">
              <h3 className="font-semibold mb-3">Grading & Drainage</h3>
              <p className="text-sm text-zinc-400">Expert grading and drainage solutions for optimal water management.</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="p-8 bg-zinc-800/80 rounded-lg mb-16">
          <h2 className="text-xl font-semibold mb-4">Project Gallery Coming Soon</h2>
          <p className="text-zinc-400">
            We're currently updating our project gallery with high-quality images of our recent work. 
            Please check back soon to view our completed excavation and land clearing projects.
          </p>
        </div>
        
        {/* Case Studies - Placeholder for now */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Case Studies</h2>
          
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Residential Drainage Solution</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-700 rounded-full mb-4">Grading & Excavation</span>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-400 mb-4">
                  A residential property was experiencing severe water pooling issues that threatened the home's foundation after heavy rainfall.
                </p>
                <div className="mb-6">
                  <h4 className="font-medium text-base mb-2">Challenge:</h4>
                  <p className="text-zinc-400 text-sm">
                    Correct severe drainage problems on a residential property with limited access and existing landscaping that needed to be preserved.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-base mb-2">Solution:</h4>
                  <p className="text-zinc-400 text-sm">
                    Our team implemented precise grading work and installed a comprehensive drainage system that directed water away from the foundation while preserving the homeowner's established landscaping.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Commercial Site Preparation</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-700 rounded-full mb-4">Land Clearing & Excavation</span>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-400 mb-4">
                  A new commercial development required comprehensive site preparation on challenging terrain with environmental considerations.
                </p>
                <div className="mb-6">
                  <h4 className="font-medium text-base mb-2">Challenge:</h4>
                  <p className="text-zinc-400 text-sm">
                    Prepare a complex commercial site with elevation changes, dense vegetation, and strict environmental regulations regarding runoff.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-base mb-2">Solution:</h4>
                  <p className="text-zinc-400 text-sm">
                    Our team developed a phased approach that included selective clearing, erosion control implementation, precision grading, and drainage solutions that met all environmental requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-400 text-sm italic mb-4">
                "West Land Clearing handled our commercial site preparation with exceptional precision. Their attention to drainage details saved us from potential issues during development."
              </blockquote>
              <p className="font-medium">— Commercial Property Developer, Lehi</p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-400 text-sm italic mb-4">
                "The team at West Land Clearing solved our property's drainage issues permanently. Their grading work was precise and their crew was professional throughout the project."
              </blockquote>
              <p className="font-medium">— Homeowner, Provo</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="p-8 bg-zinc-800/80 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Ready to start your construction project?</h2>
          <p className="text-zinc-400 mb-6">
            Contact us today to discuss your needs and get a free quote. Our team of experienced operators is ready to bring your project to life.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
