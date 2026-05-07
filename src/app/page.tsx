"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TwoColumnLayout from "../components/layout/TwoColumnLayout";
import QuickContactForm from "../components/forms/QuickContactForm";
import Script from "next/script";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll animation for services cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  // Main content column
  const mainContent = (
    <div>
      <div className="mb-4">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Professional Land Clearing Services
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        Greater Houston's Land Clearing & Forestry Mulching
        <br />
        <span className="text-zinc-400">Stump Grinding • Brush Removal • Site Prep</span>
      </h1>
      <p className="text-base md:text-lg text-zinc-400 mb-8 md:mb-12 max-w-2xl">
        West Land Clearing delivers professional land clearing, forestry mulching, stump grinding, and brush removal across Greater Houston. Pearland-based, owner-operated. From overgrown lots to build-ready home sites.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link href="/contact" className="btn-primary">
          Schedule a call
        </Link>
        <Link href="/services" className="btn-outline">
          Explore services
        </Link>
      </div>

      <div className="space-y-6">
        <p className="text-sm text-zinc-400">Featured Services →</p>

        <Link
          href="/services/forestry-mulching"
          className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Forestry Mulching</h3>
                <p className="text-sm text-zinc-400 pr-8 md:pr-0">The fastest way to clear land — mulches trees, brush, and stumps in one pass</p>
              </div>
            </div>
            <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
        </Link>

        <Link
          href="/services/land-clearing"
          className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Land Clearing</h3>
                <p className="text-sm text-zinc-400 pr-8 md:pr-0">Full residential lot clearing for overgrown properties and build sites</p>
              </div>
            </div>
            <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
        </Link>

        <Link
          href="/services/stump-grinding"
          className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Stump Grinding</h3>
                <p className="text-sm text-zinc-400 pr-8 md:pr-0">Complete stump removal and grinding for cleared properties</p>
              </div>
            </div>
            <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
        </Link>

        <Link
          href="/services"
          className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">More Services</h3>
                <p className="text-sm text-zinc-400 pr-8 md:pr-0">Brush removal, site prep, access road clearing, and more</p>
              </div>
            </div>
            <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
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
    <div>
      <Script id="schema-local-business" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "West Land Clearing",
          "url": "https://westlandclearing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pearland",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.5636,
            "longitude": -95.2860
          },
          "areaServed": ["Greater Houston", "Pearland", "Brazoria County", "Fort Bend County", "Harris County", "Galveston County", "Montgomery County"],
          "description": "Professional land clearing, forestry mulching, stump grinding, and brush removal across Greater Houston. Pearland-based, owner-operated."
        }
      `}</Script>

      {/* Hero Section with Two-Column Layout */}
      <section className="container mx-auto px-4 py-12">
        <TwoColumnLayout
          mainContent={mainContent}
          sideContent={sideContent}
        />
      </section>

      {/* Testimonials Section */}
      <section className="border-t border-zinc-800 py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-zinc-400">
              Don&apos;t take our word for it — hear what our clients have to say about our land clearing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial Cards */}
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold mr-3">
                  DH
                </div>
                <div>
                  <h3 className="font-medium">Darrell Hutchins</h3>
                  <p className="text-sm text-zinc-400">Rosharon, TX</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-400 text-sm italic">
                &ldquo;Had about 4.5 acres out here that was nothing but cedar, yaupon, and old stumps from the previous owner. Was going to burn it off myself but a neighbor talked me into calling first. Glad I did — they had the whole thing mulched and cleaned up in a day and a half. Cheaper than I expected too.&rdquo;
              </blockquote>
            </div>

            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold mr-3">
                  KF
                </div>
                <div>
                  <h3 className="font-medium">Kristi Fontenot</h3>
                  <p className="text-sm text-zinc-400">Alvin, TX</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-400 text-sm italic">
                &ldquo;Bought a lot off 35 last year planning to build. The back half was completely overgrown — couldn't even walk through it. They cleared the brush and ground the stumps. Straight with me on pricing, no surprise charges after the fact. Site was ready for my builder within the week.&rdquo;
              </blockquote>
            </div>

            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold mr-3">
                  WT
                </div>
                <div>
                  <h3 className="font-medium">Wayne Thibodaux</h3>
                  <p className="text-sm text-zinc-400">Iowa Colony, TX</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-400 text-sm italic">
                &ldquo;Had about a dozen stumps left over from when we cleared years back, some of them big. They got all of them same day and hauled off the grindings. Wouldn't have changed anything about how they handled it.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* West Construction Banner */}
      <section className="border-t border-zinc-800 py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Need Excavation or Grading?</h2>
              <p className="text-zinc-400">
                West Construction handles site grading, trenching, building pad prep, and excavation across Greater Houston.
              </p>
            </div>
            <Link
              href="https://west.construction"
              className="btn-primary whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit West Construction
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
