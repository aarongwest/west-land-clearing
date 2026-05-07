"use client";

import React, { useState } from "react";

export default function QuickContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 bg-zinc-800/50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Thank You!</h3>
        <p className="text-zinc-400 mb-4">
          Your message has been received. We'll get back to you soon.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sm text-white hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800/50 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Quick Contact</h3>
      <p className="text-sm text-zinc-400 mb-4">
        Fill out this form and we'll get back to you as soon as possible.
      </p>
      
      {error && (
        <div className="p-2 text-red-400 bg-red-900/20 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500"
            required
          />
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={3}
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-zinc-100 hover:bg-white text-black font-medium rounded-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
