"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export default function LandClearingService() {
  // Main content column
  const mainContent = (
    <div>
      <div className="mb-4">
        <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-300">
          ← All Services
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Land Clearing Services
      </h1>
      <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
        Our professional land clearing services prepare your property for development with efficient brush removal
        and site preparation throughout Greater Houston.
      </p>

      <div className="space-y-6 mb-12">
        <h2 className="text-xl font-semibold">Residential &amp; Rural Land Clearing</h2>
        <p className="text-zinc-400">
          West Land Clearing offers comprehensive land clearing services for residential and rural properties.
          Whether you&apos;re preparing for new construction, expanding usable space, or reclaiming an overgrown lot,
          our experienced team can transform your land efficiently and responsibly.
        </p>

        <h2 className="text-xl font-semibold mt-8">Our Land Clearing Services Include:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-zinc-800/50 rounded-lg">
            <h3 className="font-medium mb-2">Brush Removal</h3>
            <p className="text-sm text-zinc-400">
              Removal of underbrush, shrubs, vines, and small vegetation to clear your property and prepare it for use.
            </p>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-lg">
            <h3 className="font-medium mb-2">Forestry Mulching</h3>
            <p className="text-sm text-zinc-400">
              Single-pass clearing that grinds trees, brush, and stumps into mulch in place — the fastest way to clear land.
            </p>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-lg">
            <h3 className="font-medium mb-2">Stump Grinding</h3>
            <p className="text-sm text-zinc-400">
              Complete stump removal and grinding for cleared properties, preparing the site for construction or landscaping.
            </p>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-lg">
            <h3 className="font-medium mb-2">Debris Management</h3>
            <p className="text-sm text-zinc-400">
              Proper removal, disposal, or mulching of cleared vegetation and debris following best environmental practices.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Environmental Considerations</h2>
        <p className="text-zinc-400">
          At West Land Clearing, we approach every job with environmental responsibility in mind. Our methods include:
        </p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
          <li>Selective clearing to preserve valuable vegetation when desired</li>
          <li>Erosion control measures to protect soil during and after clearing</li>
          <li>Mulching debris in place to protect and enrich soil</li>
          <li>Compliance with all local environmental regulations</li>
          <li>Consideration of wildlife habitats and natural drainage patterns</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Land Clearing Process</h2>
        <ol className="list-decimal list-inside text-zinc-400 space-y-2 ml-4">
          <li>Free on-site assessment and planning</li>
          <li>Marking of boundaries and identification of vegetation to be preserved</li>
          <li>Brush and vegetation removal</li>
          <li>Stump grinding as needed</li>
          <li>Debris management and cleanup</li>
          <li>Final inspection</li>
        </ol>
      </div>

      <div className="border-t border-zinc-800 pt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Common Applications</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">New Construction Preparation</h3>
            <p className="text-zinc-400">
              Preparing land for new homes or additions by removing brush and unwanted vegetation ahead of grading and construction.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Property Enhancement</h3>
            <p className="text-zinc-400">
              Improving existing property by clearing overgrown areas to create usable outdoor spaces or improve views.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Fire Prevention</h3>
            <p className="text-zinc-400">
              Creating defensible space around structures by removing combustible vegetation to reduce wildfire risk.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Agricultural Development</h3>
            <p className="text-zinc-400">
              Preparing land for agricultural use by clearing brush while preserving soil quality.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">How long does a typical land clearing project take?</h3>
            <p className="text-zinc-400">
              Timelines vary based on acreage, vegetation density, and site conditions. Small residential projects might be completed in 1-2 days,
              while larger properties can take a week or more. We provide specific estimates after on-site assessment.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Can you clear land while preserving specific trees or areas?</h3>
            <p className="text-zinc-400">
              Absolutely. We specialize in selective clearing that preserves desired vegetation. During the assessment phase,
              we&apos;ll mark which trees and areas should remain untouched.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">What happens to the cleared vegetation?</h3>
            <p className="text-zinc-400">
              We manage debris according to best environmental practices, including mulching in place when possible. Options include
              mulching on-site, chipping, or hauling away. We&apos;ll discuss these options during the estimate.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Do I need permits for land clearing?</h3>
            <p className="text-zinc-400">
              Permit requirements vary by location and project scope. We can advise on local regulations and, if needed,
              help guide you through the permitting process to ensure compliance.
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

  // Side content column with quick contact form
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
