import React from "react";
import Link from "next/link";

// About page
export const metadata = {
  title: "About West Land Clearing | Forestry Mulching & Land Clearing in Greater Houston",
  description: "Learn about West Land Clearing's professional team, our equipment, quality standards, and our commitment to excellence in land clearing, forestry mulching, and stump grinding.",
  keywords: "land clearing company Greater Houston, forestry mulching experts Pearland TX, stump grinding specialists, professional land clearing team, land clearing quality standards",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
            About Our Land Clearing Company
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Greater Houston&apos;s <br />
          <span className="text-zinc-400">Land Clearing &amp; Forestry Mulching Experts</span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-zinc-400 mb-8">
            West Land Clearing was founded on a simple principle: provide exceptional land clearing, forestry mulching, and stump grinding services with unmatched customer service. Pearland-based and owner-operated, we&apos;ve built our reputation by delivering superior workmanship on every project, no matter the size.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Mission</h2>
          <p className="text-zinc-400 mb-6">
            Our mission is to be Greater Houston&apos;s most trusted land clearing partner by providing reliable, high-quality forestry mulching, stump grinding, and brush removal services tailored to each client&apos;s specific needs. We approach every project with professionalism, expertise, and a commitment to excellence.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Team</h2>
          <p className="text-zinc-400 mb-6">
            Our skilled team of experienced operators brings hands-on experience in land clearing, forestry mulching, and stump grinding. With expertise in residential lot clearing, rural acreage, and site preparation, our professionals can handle land clearing projects of any size and complexity.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Quality Standards</h2>
          <p className="text-zinc-400 mb-6">
            At West Land Clearing, quality isn&apos;t just a goal — it&apos;s our standard. Every forestry mulching and land clearing project meets or exceeds industry specifications. We implement rigorous quality control measures throughout our process, from initial on-site estimate to final inspection.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Sister Company</h2>
          <p className="text-zinc-400 mb-6">
            West Land Clearing is proud to be affiliated with <a href="https://west.construction" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">West Construction</a>, our sister company providing site grading, trenching, building pad prep, and excavation services across Greater Houston.
          </p>

          <div className="mt-12 p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Need land clearing services?</h3>
            <p className="text-zinc-400 mb-6">Contact us today for a free on-site estimate. Our team is ready to help with your land clearing, forestry mulching, and stump grinding needs.</p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
