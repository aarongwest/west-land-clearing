import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../components/forms/QuickContactForm";

export const metadata = {
  title: "Land Clearing Service Areas | Greater Houston Forestry Mulching & Stump Grinding",
  description: "Professional land clearing, forestry mulching, and stump grinding services throughout Greater Houston. Pearland-based crew serving Brazoria County, Fort Bend County, Harris County, and more.",
  keywords: "Greater Houston land clearing service areas, forestry mulching Pearland TX, land clearing Brazoria County, Fort Bend County stump grinding, Harris County brush removal",
};

const cities = [
  { name: "Pearland", slug: "pearland", county: "Brazoria County", description: "Land clearing, forestry mulching, and stump grinding for residential and rural properties throughout Pearland." },
  { name: "Alvin", slug: "alvin", county: "Brazoria County", description: "Professional land clearing and brush removal for residential and rural properties in Alvin." },
  { name: "Manvel", slug: "manvel", county: "Brazoria County", description: "Forestry mulching and lot clearing services for homes and land development in Manvel." },
  { name: "Angleton", slug: "angleton", county: "Brazoria County", description: "Land clearing and brush removal for residential and rural properties in Angleton." },
  { name: "Lake Jackson", slug: "lake-jackson", county: "Brazoria County", description: "Professional forestry mulching and site clearing for new construction in Lake Jackson." },
  { name: "Iowa Colony", slug: "iowa-colony", county: "Brazoria County", description: "Lot clearing and land preparation services for the growing Iowa Colony community." },
  { name: "Rosharon", slug: "rosharon", county: "Brazoria County", description: "Land clearing and stump grinding for residential and rural properties in Rosharon." },
  { name: "Friendswood", slug: "friendswood", county: "Galveston County", description: "Forestry mulching and brush removal for Friendswood homeowners and property owners." },
  { name: "League City", slug: "league-city", county: "Galveston County", description: "Professional land clearing and stump grinding for residential properties in League City." },
  { name: "Baytown", slug: "baytown", county: "Harris County", description: "Site clearing and brush removal for residential and rural properties in Baytown." },
  { name: "Katy", slug: "katy", county: "Fort Bend County", description: "Land clearing and forestry mulching services for the fast-growing Katy area." },
  { name: "Spring", slug: "spring", county: "Harris County", description: "Professional forestry mulching and land clearing for residential builds in Spring." },
  { name: "Humble", slug: "humble", county: "Harris County", description: "Expert land clearing and stump grinding for residential and rural properties in Humble." },
  { name: "Sugar Land", slug: "sugar-land", county: "Fort Bend County", description: "Land clearing, forestry mulching, and brush removal for Sugar Land homeowners." },
  { name: "Missouri City", slug: "missouri-city", county: "Fort Bend County", description: "Professional land clearing and stump grinding for residential properties in Missouri City." },
  { name: "Richmond", slug: "richmond", county: "Fort Bend County", description: "Land clearing and site preparation services for new construction throughout Richmond." },
  { name: "Rosenberg", slug: "rosenberg", county: "Fort Bend County", description: "Forestry mulching and lot clearing for residential and rural properties in Rosenberg." },
  { name: "Needville", slug: "needville", county: "Fort Bend County", description: "Rural land clearing, brush removal, and stump grinding for Needville properties." },
  { name: "Conroe", slug: "conroe", county: "Montgomery County", description: "Professional land clearing and forestry mulching for residential and rural projects in Conroe." },
  { name: "The Woodlands", slug: "the-woodlands", county: "Montgomery County", description: "Expert land clearing and stump grinding for residential properties in The Woodlands." },
];

export default function ServiceAreasPage() {
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Service Areas
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Land Clearing Service Areas <br />
        <span className="text-zinc-400">Throughout Greater Houston, Texas</span>
      </h1>

      <p className="text-lg text-zinc-400 mb-12">
        West Land Clearing provides professional land clearing, forestry mulching, stump grinding, and brush removal services throughout
        Greater Houston. Pearland-based and owner-operated, we serve homeowners and property owners
        across Brazoria, Fort Bend, Harris, Galveston, and Montgomery counties.
      </p>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/areas/${city.slug}`}
            className="p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-1">{city.name}</h2>
            <p className="text-sm text-zinc-500 mb-3">{city.county}</p>
            <p className="text-zinc-400 mb-4">{city.description}</p>
            <span className="text-white inline-flex items-center">
              View {city.name} services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Broader coverage note */}
      <div className="p-6 bg-zinc-800/50 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">Serving All of Greater Houston</h2>
        <p className="text-zinc-400">
          Don&apos;t see your city listed? We serve the entire Greater Houston metro area. If your project is in
          Brazoria, Fort Bend, Harris, Galveston, or Montgomery County, reach out — we can help.
        </p>
      </div>

      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need land clearing in your area?</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today for a free on-site estimate. Our Pearland-based crew is ready to serve your Greater Houston project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">
            Request a Quote
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
