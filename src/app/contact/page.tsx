import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../../components/layout/TwoColumnLayout";
import QuickContactForm from "../../components/forms/QuickContactForm";
import ContactForm from "../../components/forms/ContactForm";
import { metadata } from "./metadata";

export { metadata };

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <TwoColumnLayout
        mainContent={
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
                Get In Touch
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Contact Us For <br />
              <span className="text-zinc-400">Professional Land Clearing Services</span>
            </h1>

            <p className="text-lg text-zinc-400 mb-12">
              Ready to discuss your land clearing project? Contact West Land Clearing today for a free on-site estimate. Our Pearland-based team is ready to help with forestry mulching, stump grinding, brush removal, and land clearing throughout Greater Houston.
            </p>

            <div className="grid grid-cols-1 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Request a Quote</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-zinc-400">
                      1402 Pineland Dr<br />Pearland, TX 77581
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">How to Reach Us</h3>
                    <p className="text-zinc-400">
                      Fill out our contact form and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Business Hours</h3>
                    <p className="text-zinc-400">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-zinc-400">Saturday: By appointment</p>
                    <p className="text-zinc-400">Sunday: Closed</p>
                  </div>

                  <div className="p-4 bg-zinc-800/50 rounded-lg">
                    <h3 className="font-medium mb-2">Urgent Land Clearing Requests</h3>
                    <p className="text-zinc-400 mb-3">
                      For urgent land clearing needs, please submit the form above and note your timeline. We monitor submissions frequently and will respond promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
              <p className="text-zinc-400 mb-8">
                West Land Clearing provides professional forestry mulching, land clearing, and stump grinding services throughout Greater Houston, including Pearland, Alvin, Manvel, League City, Sugar Land, Katy, Conroe, The Woodlands, and surrounding areas.
              </p>

              <div className="p-8 bg-zinc-800/50 rounded-lg border border-zinc-700 flex items-center">
                <p className="text-zinc-500">Greater Houston Service Area Map</p>
                {/* Map would go here */}
              </div>
            </div>
          </div>
        }
        sideContent={
          <div className="mt-8 lg:mt-0 lg:sticky lg:top-8">
            <QuickContactForm />
          </div>
        }
      />
    </div>
  );
}
