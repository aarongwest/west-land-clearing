"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-800">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center py-3">
          <Image 
            src="/images/west-land-clearing-logo.png"
            alt="West Land Clearing Logo"
            width={60} 
            height={16} 
            className="h-auto" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/areas" className="nav-link">
            Service Areas
          </Link>
          <Link href="/industries" className="nav-link">
            Industries
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/contact">
            <button className="btn-primary">
              Schedule a call
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-zinc-900 p-6 transition-transform duration-200 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col space-y-6">
          <Link
            href="/services"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/areas"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Service Areas
          </Link>
          <Link
            href="/industries"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="/about"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button className="btn-primary w-full">
              Schedule a call
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
