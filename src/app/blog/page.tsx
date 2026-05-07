import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Construction Blog | West Land Clearing - Greater Houston Excavation",
  description: "Read expert articles on excavation, site preparation, grading, and drainage from West Land Clearing, Greater Houston's Pearland-based site work professionals.",
  keywords: "construction blog, excavation tips, site preparation, grading advice, Greater Houston construction, Pearland TX excavation",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
            land clearing Insights
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          land clearing blog & Resources <br />
          <span className="text-zinc-400">Tips, Insights & Industry News</span>
        </h1>
        
        <p className="text-lg text-zinc-400 mb-12">
          Welcome to the West Land Clearing blog, where we share land clearing techniques, industry insights, maintenance tips, and news from the world of professional land clearing. Our goal is to provide valuable resources for both DIY enthusiasts and industry professionals.
        </p>
        
        {/* Coming Soon Message */}
        <div className="p-8 bg-zinc-800/80 rounded-lg mb-16">
          <h2 className="text-xl font-semibold mb-4">Blog Content Coming Soon</h2>
          <p className="text-zinc-400 mb-6">
            We're currently developing high-quality content for our land clearing blog. Check back soon for articles, guides, and insights from our land clearing professionals.
          </p>
          <p className="text-zinc-400">
            In the meantime, feel free to <Link href="/contact" className="text-white hover:underline">contact us</Link> with any land clearing questions you may have.
          </p>
        </div>
        
        {/* Featured Article Topics - Placeholders */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Topics Coming Soon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <h3 className="font-semibold text-lg mb-3">land clearing techniques</h3>
              <p className="text-sm text-zinc-400 mb-4">
                In-depth guides to TIG, MIG, and specialty land clearing techniques for various materials and applications.
              </p>
              <span className="text-sm text-zinc-500">Coming Soon</span>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <h3 className="font-semibold text-lg mb-3">Material Selection</h3>
              <p className="text-sm text-zinc-400 mb-4">
                How to choose the right metals and materials for your land clearing project to ensure durability and performance.
              </p>
              <span className="text-sm text-zinc-500">Coming Soon</span>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <h3 className="font-semibold text-lg mb-3">Equipment Maintenance</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Tips for maintaining your land clearing equipment to ensure optimal performance and longevity.
              </p>
              <span className="text-sm text-zinc-500">Coming Soon</span>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <h3 className="font-semibold text-lg mb-3">Project Showcases</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Detailed breakdowns of challenging land clearing projects, including considerations, techniques, and outcomes.
              </p>
              <span className="text-sm text-zinc-500">Coming Soon</span>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mb-16 p-8 bg-zinc-800/50 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Stay Updated on land clearing tips & News</h2>
            <p className="text-zinc-400 mb-6">
              Subscribe to our newsletter to receive the latest land clearing tips, industry news, and project showcases directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-zinc-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked land clearing questions</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">What type of land clearing is best for thin materials?</h3>
              <p className="text-zinc-400">
                land clearing is typically the best choice for thin materials due to its precision and reduced heat input. It allows for greater control, which helps prevent warping or burning through delicate materials.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">How long does mobile land clearing service typically take?</h3>
              <p className="text-zinc-400">
                The timeline for mobile land clearing services varies based on project complexity. Simple repairs might take 1-2 hours, while more complex fabrication could require multiple days. We provide time estimates during the quote process.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">What safety precautions should be taken around land clearing work?</h3>
              <p className="text-zinc-400">
                Safety around land clearing work includes: wearing appropriate protective gear, ensuring proper ventilation, removing flammable materials from the area, having fire extinguishers accessible, and keeping unauthorized personnel at a safe distance.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="p-8 bg-zinc-800/80 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Have a land clearing Question or Project?</h2>
          <p className="text-zinc-400 mb-6">
            Our team of certified welders is ready to help with any land clearing project or answer your technical questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
            <Link href="/services" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
