"use client";

import React from "react";
import Link from "next/link";
import TwoColumnLayout from "../layout/TwoColumnLayout";
import QuickContactForm from "../forms/QuickContactForm";

interface IndustryContentProps {
  industry: string;
  description: string;
  services: string[];
  benefits: Array<{title: string, description: string}>;
  applications: string[];
  faqs: Array<{question: string, answer: string}>;
}

export default function IndustryContent({
  industry,
  description,
  services,
  benefits,
  applications,
  faqs
}: IndustryContentProps) {
  // Main content column
  const mainContent = (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
          Industry Solutions
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Land Clearing Services for <br />
        <span className="text-zinc-400">{industry}</span>
      </h1>

      <p className="text-lg text-zinc-400 mb-12">
        {description}
      </p>

      {/* CTA Section */}
      <div className="p-6 bg-zinc-800/50 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">Need land clearing services for your {industry.toLowerCase()} property?</h2>
        <p className="text-zinc-400 mb-6">
          Contact West Land Clearing today for a detailed quote. Our team is ready to assist with your {industry.toLowerCase()} land clearing needs.
        </p>
        <Link href="/contact" className="btn-primary">
          Request a Quote
        </Link>
      </div>

      {/* Services Available */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Land Clearing Services for {industry}</h2>

        <div className="space-y-6">
          <p className="text-zinc-400 mb-4">
            We offer a comprehensive range of land clearing services tailored to the specific needs of the {industry.toLowerCase()} sector:
          </p>

          <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Benefits of Our {industry} Land Clearing Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">{benefit.title}</h3>
              <p className="text-zinc-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Common Applications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Common {industry} Land Clearing Applications</h2>

        <div className="space-y-6">
          <p className="text-zinc-400 mb-4">
            Our land clearing expertise is applied to a wide range of {industry.toLowerCase()} applications, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="bg-zinc-800/50 p-4 rounded">
                <span>{application}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions About {industry} Land Clearing</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="font-semibold mb-3">{faq.question}</h3>
              <p className="text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="p-8 bg-zinc-800/80 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Ready to schedule {industry.toLowerCase()} land clearing?</h2>
        <p className="text-zinc-400 mb-6">
          Contact us today to discuss your specific requirements and get a free on-site estimate. Our team has extensive experience serving the {industry.toLowerCase()} sector throughout Greater Houston.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/services" className="btn-outline">
            View All Services
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
