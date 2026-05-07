import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "West Construction | Sister Company of West Land Clearing",
  description: "West Construction provides professional site grading, trenching, building pad prep, and excavation across Greater Houston. Sister company of West Land Clearing.",
  keywords: "West Construction Greater Houston, excavation services, grading services, site preparation, Greater Houston construction company, Pearland TX excavation",
};

export default function WestConstructionPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
            Sister Company
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          West Construction <br />
          <span className="text-zinc-400">Excavation &amp; Site Services</span>
        </h1>

        <p className="text-lg text-zinc-400 mb-12">
          West Construction is our sister company providing professional site grading, trenching, building pad preparation, and excavation services throughout Greater Houston. Pearland-based and owner-operated.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">About West Construction</h2>
          <p className="text-zinc-400 mb-6">
            West Construction focuses on the earthwork side of site development — excavation, grading, and building pad preparation. If your project needs both land clearing and excavation work, both companies can coordinate seamlessly.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Construction Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Site Grading</h3>
              <p className="text-sm text-zinc-400">
                Land leveling, drainage correction, and building pad preparation for residential and commercial projects.
              </p>
            </div>

            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Excavation Services</h3>
              <p className="text-sm text-zinc-400">
                Professional excavation for foundations, utility trenches, drainage systems, and site development.
              </p>
            </div>

            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Trenching</h3>
              <p className="text-sm text-zinc-400">
                Precise trenching for utilities, drainage, and underground infrastructure installation.
              </p>
            </div>

            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Building Pad Preparation</h3>
              <p className="text-sm text-zinc-400">
                Compacted building pads for new home construction, accessory structures, and commercial builds.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 bg-zinc-800/80 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Visit West Construction</h2>
          <p className="text-zinc-400 mb-6">
            For excavation, grading, trenching, and site preparation services, visit west.construction.
          </p>
          <a
            href="https://west.construction"
            className="inline-flex items-center btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit West Construction
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
