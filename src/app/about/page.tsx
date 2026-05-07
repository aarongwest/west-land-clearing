import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About West Land Clearing | Forestry Mulching & Land Clearing in Greater Houston",
  description: "West Land Clearing is a Pearland-based, owner-operated land clearing company serving Greater Houston. We specialize in forestry mulching, stump grinding, and brush removal across Brazoria, Fort Bend, and Harris counties.",
  keywords: "about West Land Clearing, Pearland land clearing company, owner-operated forestry mulching, land clearing contractor Greater Houston",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
            About West Land Clearing
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Pearland-Based Land Clearing <br />
          <span className="text-zinc-400">Forestry Mulching Done Right.</span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-zinc-400 mb-8">
            West Land Clearing is a Pearland-based, owner-operated land clearing operation. We specialize in forestry mulching — the most efficient way to clear overgrown lots, wooded acreage, and brushy pasture in South Texas. One machine, one pass, trees and brush turned to mulch on the ground. No hauling, no burning, no pile of debris left behind.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Why Forestry Mulching</h2>
          <p className="text-zinc-400 mb-6">
            South Texas has its own mix of problem brush — cedar, yaupon holly, Chinese tallow, giant ragweed, and thorny understory that takes over fast. Traditional clearing methods mean multiple crews, debris piles, and burn permits. Forestry mulching handles all of it in one pass. The mulch goes back on the ground, protects the soil from erosion, and breaks down over time. It's faster, cleaner, and easier on the land.
          </p>
          <p className="text-zinc-400 mb-6">
            We serve residential property owners clearing lots before building, rural landowners reclaiming pasture, and developers needing acreage prepped for infrastructure. If you've got trees, brush, or stumps in the way, we can handle it.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">How We Operate</h2>
          <p className="text-zinc-400 mb-6">
            We come out, walk the property, and give you a straight estimate before any work starts. No guessing on scope, no add-ons after the fact. We're Pearland-based, so response times to Brazoria, Fort Bend, and Harris County are quick — most jobs get on the schedule within a few days of the estimate. You deal with the owner, not a project manager who's never seen your land.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Stump Grinding & Additional Services</h2>
          <p className="text-zinc-400 mb-6">
            Beyond forestry mulching, we offer standalone stump grinding for properties that were cleared previously and left with stumps, brush removal for lighter overgrowth jobs, and site prep clearing ahead of construction. We work with property owners, builders, and developers who need the land ready and don't have time for a drawn-out process.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Affiliated Companies</h2>
          <p className="text-zinc-400 mb-6">
            West Land Clearing is part of the West Industries family alongside{" "}
            <a href="https://west.construction" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">West Construction</a>,
            which handles excavation, grading, trenching, and building pad prep. If your project needs the land cleared and then graded for a slab or drainage corrected, we can coordinate both without you sourcing two separate contractors.
          </p>

          <div className="mt-12 p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Need a land clearing estimate?</h3>
            <p className="text-zinc-400 mb-6">Tell us the acreage, the type of brush or trees, and the location. We'll get back to you with a real number.</p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
