"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Land Clearing Services
        </h1>
        <p className="text-lg text-zinc-400 mb-12">
          West Land Clearing offers professional forestry mulching, land clearing, stump grinding, brush removal, and site preparation services for residential and rural properties throughout Greater Houston.
        </p>

        <div className="space-y-6 mb-16">
          {/* Forestry Mulching */}
          <Link
            href="/services/forestry-mulching"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Forestry Mulching</h3>
                  <p className="text-zinc-400 pr-8 md:pr-0">
                    The fastest way to clear land — one machine mulches trees, brush, and stumps in a single pass.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          {/* Land Clearing */}
          <Link
            href="/services/land-clearing"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Land Clearing</h3>
                  <p className="text-zinc-400 pr-8 md:pr-0">
                    Full residential lot clearing for overgrown properties and build sites throughout Greater Houston.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          {/* Stump Grinding */}
          <Link
            href="/services/stump-grinding"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Stump Grinding</h3>
                  <p className="text-zinc-400 pr-8 md:pr-0">
                    Complete stump grinding and removal — single stumps or whole-property grinding.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          {/* Brush Removal */}
          <Link
            href="/services/brush-removal"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Brush Removal</h3>
                  <p className="text-zinc-400 pr-8 md:pr-0">
                    Professional brush clearing for overgrown residential lots, rural properties, and acreage.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          {/* Site Preparation */}
          <Link
            href="/services/site-preparation"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Site Preparation</h3>
                  <p className="text-zinc-400 pr-8 md:pr-0">
                    Comprehensive clearing and site prep for new home builds and construction projects.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          {/* Access Road Clearing */}
          <Link
            href="/services/access-road-clearing"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Access Road Clearing</h3>
                  <p className="text-zinc-400 pr-8 md:pr-0">
                    Clearing access roads and driveways through wooded or overgrown properties.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>
        </div>

        <div className="border-t border-zinc-800 pt-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose West Land Clearing?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-800/30 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Expert Operators</h3>
              <p className="text-zinc-400">
                Our team brings hands-on experience in forestry mulching, land clearing, and stump grinding across Greater Houston properties.
              </p>
            </div>

            <div className="p-6 bg-zinc-800/30 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Modern Equipment</h3>
              <p className="text-zinc-400">
                We use well-maintained forestry mulching and land clearing equipment to deliver fast, efficient results on every job.
              </p>
            </div>

            <div className="p-6 bg-zinc-800/30 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Free On-Site Estimates</h3>
              <p className="text-zinc-400">
                We come to your property and give you a straight quote — no guesswork, no surprises.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
