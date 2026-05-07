"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        urgent: false
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-zinc-800/50 rounded-lg">
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-2 text-red-400 bg-red-900/20 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="(555) 123-4567"
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-1">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          required
        >
          <option value="">Select a service</option>
          <option value="forestry-mulching">Forestry Mulching</option>
          <option value="land-clearing">Land Clearing</option>
          <option value="stump-grinding">Stump Grinding</option>
          <option value="brush-removal">Brush Removal</option>
          <option value="site-preparation">Site Preparation</option>
          <option value="access-road-clearing">Access Road Clearing</option>
          <option value="other">Other (Please specify)</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="Please provide details about your project..."
          required
        ></textarea>
      </div>
      
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          checked={formData.urgent}
          onChange={(e) => setFormData((prev) => ({ ...prev, urgent: e.target.checked }))}
          className="w-4 h-4 bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500"
        />
        <label htmlFor="urgent" className="ml-2 text-sm font-medium text-zinc-400">
          This is an urgent request (emergency service needed)
        </label>
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
