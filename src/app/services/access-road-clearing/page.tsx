"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../../components/forms/QuickContactForm";

export default function AccessRoadClearingService() {
  const mainContent = (
    <div>
      <div className="mb-4">
        <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-300">
          ← All Services
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Access Road Clearing
      </h1>
      <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
        Professional clearing of access roads, driveways, and entry paths through wooded or overgrown properties across Greater Houston.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">New Road Cuts</h3>
          <p className="text-sm text-zinc-400">
            Clear a new path through overgrown or wooded land for driveway or access road installation.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Overgrown Driveways</h3>
          <p className="text-sm text-zinc-400">
            Reclaim existing driveways and paths that have been encroached by brush, trees, and vegetation.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Right-of-Way Clearing</h3>
          <p className="text-sm text-zinc-400">
            Clear easements and right-of-way corridors for utilities, roads, and property access.
          </p>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-medium mb-2">Rural Property Access</h3>
          <p className="text-sm text-zinc-400">
            Open up access routes to back acreage, hunting land, agricultural fields, and rural homesites.
          </p>
        </div>
      </div>

      <div className="space-y-6 mb-12">
        <h2 className="text-xl font-semibold">Why Access Road Clearing Matters</h2>
        <p className="text-zinc-400">
          Whether you&apos;re preparing land for construction, opening up rural acreage, or reclaiming an overgrown entry, proper access is the first step. We clear the path so you — and your contractors — can get in and get to work.
        </p>
        <p className="text-zinc-400">
          We use forestry mulching equipment when possible for access road clearing, which grinds vegetation in place and avoids the need to haul debris. For wider clearings or heavier timber, we&apos;ll bring the right equipment for the job.
        </p>
      </div>

      <div className="border-t border-zinc-800 pt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">How wide do you clear access roads?</h3>
            <p className="text-zinc-400">
              Standard access road clearing is typically 12–20 feet wide, depending on equipment and intended use. We&apos;ll confirm width requirements during the on-site estimate.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Do you grade the road after clearing?</h3>
            <p className="text-zinc-400">
              We focus on vegetation clearing. For road base work and grading after clearing, our sister company West Construction can handle site preparation and grading.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Can you clear roads on properties without existing access?</h3>
            <p className="text-zinc-400">
              Yes — access road clearing is often the first step on land with no existing entry. We&apos;ll assess the terrain and plan the approach before mobilizing equipment.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">What types of vegetation can you clear from access roads?</h3>
            <p className="text-zinc-400">
              We clear brush, saplings, small trees, stumps, and overgrown vegetation. For large mature timber removal, we&apos;ll advise on the best approach and refer to qualified partners as needed.
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
