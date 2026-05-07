import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/images/west-construction.png"
                alt="West Land Clearing Logo"
                width={120}
                height={32}
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-zinc-400 mb-4">
              Professional land clearing, forestry mulching, stump grinding, and brush removal throughout Greater Houston. Pearland-based, owner-operated.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/forestry-mulching" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Forestry Mulching
                </Link>
              </li>
              <li>
                <Link href="/services/land-clearing" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Land Clearing
                </Link>
              </li>
              <li>
                <Link href="/services/stump-grinding" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Stump Grinding
                </Link>
              </li>
              <li>
                <Link href="/services/brush-removal" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Brush Removal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-zinc-400 hover:text-zinc-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Service Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/areas" className="text-sm text-zinc-400 hover:text-zinc-100">
                  All Service Areas
                </Link>
              </li>
              <li>
                <Link href="/areas/pearland" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Pearland
                </Link>
              </li>
              <li>
                <Link href="/areas/league-city" className="text-sm text-zinc-400 hover:text-zinc-100">
                  League City
                </Link>
              </li>
              <li>
                <Link href="/areas/sugar-land" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Sugar Land
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <p>Pearland, TX</p>
              <p>
                <Link href="/contact" className="hover:text-zinc-100">
                  Contact us via our form
                </Link>
              </p>
              <p>
                For emergency services, please use our contact form and we&apos;ll respond promptly.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <Link href="/" className="text-lg font-bold text-white">
              West Land Clearing
            </Link>
            <a
              href="https://west.construction"
              className="flex items-center text-sm text-zinc-400 hover:text-zinc-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              West Construction
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
            <a
              href="https://westweld.co"
              className="flex items-center text-sm text-zinc-400 hover:text-zinc-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              WestWeld
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          </div>
          <p className="text-sm text-zinc-500 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} West Land Clearing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
