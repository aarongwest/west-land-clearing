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
  // Main content column
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Service Area
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Land Clearing Services in {city}, Texas <br />
        <span className="text-zinc-400">Forestry Mulching &amp; Stump Grinding</span>
      </h1>

      <p className="text-lg text-zinc-400 mb-12">
        West Land Clearing provides professional land clearing, forestry mulching, and stump grinding services throughout {city}, Texas and surrounding areas.
        Our experienced team and modern equipment deliver exceptional quality and service for your {countyLocation} projects,
        ensuring excellent results for every job.
      </p>

      {/* CTA Section */}
      <div className="p-6 bg-zinc-800/50 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">Need land clearing in {city}?</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today for a detailed quote. Our land clearing team is ready to serve your {city} location.
        </p>
        <Link href="/contact" className="btn-primary">
          Request a {city} Land Clearing Quote
        </Link>
      </div>

      {/* Services Available */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Land Clearing Services Available in {city}</h2>

        <div className="space-y-6">
          <p className="text-zinc-400 mb-4">
            Our professional team serves all of {city}, offering a comprehensive range of land clearing and forestry mulching services:
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
        <h2 className="text-2xl font-bold mb-8">Featured Service in {city}</h2>

        <div className="p-6 bg-zinc-800/50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{featuredService}</h3>
          <p className="text-zinc-400 mb-4">
            In {city}, our {featuredService.toLowerCase()} services are particularly in demand. Our expert operators provide professional
            solutions tailored to the unique needs of {city} residents and property owners.
          </p>
          <Link
            href="/services/forestry-mulching"
            className="text-white hover:underline inline-flex items-center"
          >
            Learn more about our forestry mulching services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Service Area Map */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{city} Service Area</h2>

        <div className="p-6 bg-zinc-800/50 rounded-lg">
          <p className="text-zinc-400 mb-6">
            We provide comprehensive land clearing services throughout {city} and surrounding areas, including:
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
        <h2 className="text-2xl font-bold mb-8">Why Choose West Land Clearing in {city}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Local Expertise</h3>
            <p className="text-zinc-400">
              Our operators are familiar with {city}&apos;s local conditions and requirements, ensuring all projects meet or exceed local standards.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Fast Response Times</h3>
            <p className="text-zinc-400">
              Being based in Pearland allows us to provide quick response times to {city} customers, with prompt service when you need it.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Comprehensive Services</h3>
            <p className="text-zinc-400">
              From forestry mulching to stump grinding and brush removal, we offer a complete range of land clearing services to {city} residents and property owners.
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="font-semibold mb-3">Quality Workmanship</h3>
            <p className="text-zinc-400">
              We&apos;re committed to delivering exceptional quality on every project in {city}, with customer satisfaction as our top priority.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Ready to schedule land clearing in {city}?</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today to discuss your land clearing needs and get a free on-site estimate. Our team is ready to serve your {city} location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">
            Request a Quote in {city}
          </Link>
        </div>
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
    <div className="container mx-auto px-4 py-16">
      <TwoColumnLayout
        mainContent={mainContent}
        sideContent={sideContent}
      />
    </div>
  );
}
