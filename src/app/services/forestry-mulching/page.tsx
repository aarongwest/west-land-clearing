"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export default function ForestryMulchingService() {
  const mainContent = (
    <div>
      <div className="mb-4">
        <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-300">
          ← All Services
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Forestry Mulching Services
      </h1>
      <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
        Our forestry mulching service is the fastest and cleanest way to clear land — a single machine mulches trees, brush, and stumps into ground cover in one pass.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Trees &amp; Brush</h3>
          <p className="text-sm text-zinc-400">
            Clears standing trees, shrubs, and dense brush efficiently — no haul-off required.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Stump Grinding</h3>
          <p className="text-sm text-zinc-400">
            Mulches stumps in place, eliminating the need for separate stump removal on most jobs.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Debris Mulched In Place</h3>
          <p className="text-sm text-zinc-400">
            All cleared material is ground into a natural mulch layer that protects and enriches the soil.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Single-Pass Clearing</h3>
          <p className="text-sm text-zinc-400">
            One machine, one pass — dramatically faster and lower cost than traditional clearing methods.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">What is forestry mulching?</h3>
            <p className="text-zinc-400">
              Forestry mulching uses a single piece of equipment — a mulcher or forestry cutter — to grind trees, brush, stumps, and vegetation into mulch in one pass. The mulch is left on the ground as a natural ground cover, eliminating the need to haul debris off-site.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">How much does forestry mulching cost?</h3>
            <p className="text-zinc-400">
              Cost depends on acreage, vegetation density, and accessibility. We provide free on-site estimates for all forestry mulching jobs. Contact us to schedule a walkthrough.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">What properties is forestry mulching best for?</h3>
            <p className="text-zinc-400">
              Forestry mulching is ideal for overgrown residential lots, acreage with dense brush and small trees, right-of-way clearing, fire lane clearing, and any property where you want fast, clean results without large debris piles or multiple equipment passes.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">How does forestry mulching compare to traditional land clearing?</h3>
            <p className="text-zinc-400">
              Traditional clearing typically requires multiple machines — bulldozers, brush hogs, stump grinders — and generates large debris piles that need hauling. Forestry mulching is faster, requires less equipment, leaves the soil intact, and eliminates haul-off costs. It&apos;s the preferred method for most residential and rural clearing jobs.
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
