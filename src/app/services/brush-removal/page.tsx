"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export default function BrushRemovalService() {
  const mainContent = (
    <div>
      <div className="mb-4">
        <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-300">
          ← All Services
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Brush Removal Services
      </h1>
      <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
        Professional brush clearing and removal for overgrown residential lots, rural properties, and acreage across Greater Houston.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Residential Lots</h3>
          <p className="text-sm text-zinc-400">
            Clear overgrown brush and vegetation from residential properties, making them usable and marketable.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Rural Acreage</h3>
          <p className="text-sm text-zinc-400">
            Reclaim overgrown pastures, fence lines, and rural acreage across Greater Houston.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Fence Line Clearing</h3>
          <p className="text-sm text-zinc-400">
            Clear brush and vegetation from fence lines and property boundaries for maintenance and access.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Pre-Construction Clearing</h3>
          <p className="text-sm text-zinc-400">
            Brush removal as part of site preparation before construction, grading, or landscaping begins.
          </p>
        </div>
      </div>

      <div className="space-y-6 mb-12">
        <h2 className="text-xl font-semibold">What We Clear</h2>
        <p className="text-zinc-400">
          Our brush removal crews handle a full range of vegetation clearing including:
        </p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
          <li>Dense underbrush and overgrown shrubs</li>
          <li>Briars, vines, and invasive vegetation</li>
          <li>Saplings and small trees</li>
          <li>Tall grass and heavy ground cover</li>
          <li>Fence line and right-of-way overgrowth</li>
          <li>Post-storm debris and downed brush</li>
        </ul>
      </div>

      <div className="border-t border-zinc-800 pt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">How is brush removal different from forestry mulching?</h3>
            <p className="text-zinc-400">
              Forestry mulching uses a single machine to grind everything in place. Brush removal may involve cutting, shredding, and in some cases hauling debris off-site. The right method depends on your property and end goal — we&apos;ll recommend the best approach on-site.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Can you clear brush without damaging existing trees?</h3>
            <p className="text-zinc-400">
              Yes. We specialize in selective clearing — removing unwanted brush and vegetation while preserving trees and plants you want to keep. We&apos;ll walk the property with you before starting.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">What happens to the cleared brush?</h3>
            <p className="text-zinc-400">
              Options include mulching in place, chipping, or hauling off-site. We&apos;ll discuss what makes the most sense for your property during the estimate.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Do you serve rural properties outside city limits?</h3>
            <p className="text-zinc-400">
              Yes. We serve properties throughout Greater Houston including rural acreage in Brazoria, Fort Bend, Harris, Galveston, and Montgomery counties.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link href="/contact" className="btn-primary">
          Request a Quote
        </Link>
        <Link href="/services" className="btn-outline">
          View All Services
        </Link>
      </div>
    </div>
  );

  const sideContent = (
    <div className="mt-8 lg:mt-0 lg:sticky lg:top-8">
      <QuickContactForm />
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <TwoColumnLayout
        mainContent={mainContent}
        sideContent={sideContent}
      />
    </div>
  );
}
