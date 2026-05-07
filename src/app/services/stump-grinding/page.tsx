"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export default function StumpGrindingService() {
  const mainContent = (
    <div>
      <div className="mb-4">
        <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-300">
          ← All Services
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Stump Grinding &amp; Removal
      </h1>
      <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
        Complete stump grinding and removal for cleared properties, post-construction, or standalone stump jobs across Greater Houston.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Single Stumps</h3>
          <p className="text-sm text-zinc-400">
            Standalone stump grinding for residential properties — quick turnaround, minimal disruption.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Whole Property Grinding</h3>
          <p className="text-sm text-zinc-400">
            Full property stump removal following land clearing, preparing the site for construction or landscaping.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Below-Grade Grinding</h3>
          <p className="text-sm text-zinc-400">
            Grind stumps below grade level for a smooth surface suitable for mowing, paving, or building.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Debris Removal</h3>
          <p className="text-sm text-zinc-400">
            Ground stump material can be left as mulch or hauled off-site depending on your preference.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">How deep do you grind stumps?</h3>
            <p className="text-zinc-400">
              We typically grind stumps 6–12 inches below grade. For areas that will be paved or built on, we can go deeper. Let us know your end goal and we&apos;ll grind to the appropriate depth.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">What do you do with the ground material?</h3>
            <p className="text-zinc-400">
              The ground stump material can be left on-site as mulch, spread across the property, or hauled away. We&apos;ll discuss your preference before the job starts.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Can you grind stumps in tight spaces?</h3>
            <p className="text-zinc-400">
              Yes. We have equipment suited to both large open areas and tight residential yards. Contact us with your site details and we&apos;ll confirm the right machine for your job.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Do I need to mark utilities before stump grinding?</h3>
            <p className="text-zinc-400">
              Yes — always call 811 (Texas One Call) before any stump grinding to have underground utilities marked. We&apos;ll confirm clearance before starting work.
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
