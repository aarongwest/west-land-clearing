"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../layout/TwoColumnLayout";
import QuickContactForm from "../forms/QuickContactForm";

interface ServiceAreaContentProps {
  city: string;
  countyLocation: string;
  services: string[];
  featuredService: string;
  neighboringCities: string[];
}

export default function ServiceAreaContent({
  city,
  countyLocation,
  services,
  featuredService,
  neighboringCities
}: ServiceAreaContentProps) {
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Service Area
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Land Clearing in {city}, TX <br />
        <span className="text-zinc-400">Forestry Mulching &amp; Stump Grinding</span>
      </h1>

      <p className="text-lg text-zinc-400 mb-12">
        West Land Clearing serves {city} and {countyLocation} property owners with forestry mulching, stump grinding, and brush removal.
        We're Pearland-based and owner-operated — when you call, you're reaching the operator who'll be on your property. We come out, walk the land, and give you a real number before any work starts.
      </p>

      {/* CTA Section */}
      <div className="p-6 bg-zinc-800/50 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">Need land cleared in {city}?</h2>
        <p className="text-zinc-400 mb-6">
          We serve {city} and surrounding {countyLocation} — most jobs get on the schedule within days of the estimate. Contact us to set up a free on-site quote.
        </p>
        <Link href="/contact" className="btn-primary">
          Request a {city} Clearing Quote
        </Link>
      </div>

      {/* Services Available */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Land Clearing Services in {city}</h2>
        <div className="space-y-6">
          <p className="text-zinc-400 mb-4">
            We handle overgrown lots, wooded acreage, and brushy pasture across {city} and {countyLocation}. Services include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Service */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{featuredService} in {city}</h2>
        <div className="p-6 bg-zinc-800/50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{featuredService}</h3>
          <p className="text-zinc-400 mb-4">
            {featuredService} is the most efficient clearing method for the brush and tree species common to {countyLocation} — cedar, yaupon, Chinese tallow, and heavy understory all come down in one pass and get mulched in place.
            {city} property owners use it to prep lots for construction, reclaim overgrown acreage, and clean up land that hasn't been maintained in years.
          </p>
          <Link
            href="/services/forestry-mulching"
            className="text-white hover:underline inline-flex items-center"
          >
            Learn more about forestry mulching
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Neighboring Areas */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Also Serving Near {city}</h2>
        <div className="p-6 bg-zinc-800/50 rounded-lg">
          <p className="text-zinc-400 mb-6">
            We run jobs throughout {countyLocation} and neighboring areas from our Pearland base:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {neighboringCities.map((neighbor, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded text-center">
                <span className="text-sm">{neighbor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Why {city} Calls West Land Clearing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">One Pass, No Debris Pile</h3>
            <p className="text-zinc-400">
              Forestry mulching grinds trees and brush in place — no hauling, no burning, no debris left behind. You get clear land without the cleanup headache that comes with traditional methods.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Pearland-Based, Close to {city}</h3>
            <p className="text-zinc-400">
              Being based in Pearland means we're close to most of {countyLocation} — fast mobilization, no long travel markups, and good knowledge of the local terrain and brush conditions.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Honest On-Site Estimates</h3>
            <p className="text-zinc-400">
              We walk the property before quoting. Acreage and brush density are what drives the price — we assess both on-site so there are no surprises when the invoice comes.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Owner-Operated</h3>
            <p className="text-zinc-400">
              The person giving you the estimate is the operator running the machine. No dispatching, no middleman — direct communication and accountability on every {city} job.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Get a Clearing Quote for Your {city} Property</h2>
        <p className="text-zinc-400 mb-6">
          Let us know the acreage, the type of brush or trees, and the location in {city}. We'll get back to you with an estimate and availability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">
            Request a Quote in {city}
          </Link>
        </div>
      </div>
    </div>
  );

  const sideContent = (
    <div className="mt-8 lg:mt-0 lg:sticky lg:top-8">
      <QuickContactForm />
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <TwoColumnLayout
        mainContent={mainContent}
        sideContent={sideContent}
      />
    </div>
  );
}
