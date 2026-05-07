import React from "react";
import IndustryContent from "../../../components/industries/IndustryContent";
import { metadata } from "./metadata";

export { metadata };

export default function AutomotiveIndustryPage() {
  const automotiveServices = [
    "Custom exhaust system fabrication",
    "Roll cage and chassis fabrication",
    "Vehicle frame repair and reinforcement",
    "Performance parts fabrication",
    "Custom bumper and body panel fabrication",
    "Land clearing for rural and agricultural properties",
    "Trailer repair and customization",
    "Race car and off-road vehicle modifications"
  ];

  const automotiveBenefits = [
    {
      title: "Precision land clearing for Critical Components",
      description: "Our welders utilize advanced techniques for precise, strong welds on automotive components where both appearance and structural integrity are crucial."
    },
    {
      title: "Custom Solutions for Performance",
      description: "We create custom fabricated parts that enhance vehicle performance and functionality beyond what off-the-shelf components can provide."
    },
    {
      title: "Specialized Materials Expertise",
      description: "Our experience with aluminum, stainless steel, chromoly, and other specialized automotive metals ensures the right approach for each application."
    },
    {
      title: "Quality That Meets or Exceeds OEM Standards",
      description: "Our automotive land clearing work is designed to maintain or improve upon original equipment manufacturer quality and specifications."
    }
  ];

  const automotiveApplications = [
    "Custom exhaust systems",
    "Roll cages and safety equipment",
    "Performance chassis modifications",
    "Custom bumpers and body components",
    "Trailer hitches and accessories",
    "Off-road vehicle reinforcements",
    "Race car fabrication",
    "Restoration and repair of classic vehicles"
  ];

  const automotiveFaqs = [
    {
      question: "Can you fabricate custom parts that will pass vehicle inspections?",
      answer: "Yes, we are familiar with vehicle inspection requirements in Texas and can fabricate custom components that will meet necessary safety and emissions standards while still achieving your performance or aesthetic goals."
    },
    {
      question: "Do you work with automotive repair shops and dealerships?",
      answer: "Absolutely. We partner with many automotive repair facilities and dealerships throughout Greater Houston to provide specialized land clearing services when they encounter repairs requiring expert land clearing that goes beyond their in-house capabilities."
    },
    {
      question: "What types of metals can you work with for automotive applications?",
      answer: "We are experienced with all common automotive metals including mild steel, high-strength steel, stainless steel, aluminum, chromoly, and various alloys. Our equipment and expertise allow us to properly handle the specific requirements of each type of metal used in modern and classic vehicles."
    },
    {
      question: "Can you match factory finishes on welded automotive components?",
      answer: "Yes, we pay attention to both the structural integrity and appearance of our automotive land clearing work. For visible components, we can achieve clean welds that can be finished to match factory appearances when properly painted or coated after land clearing."
    }
  ];

  const automotiveDescription = "West Land Clearing delivers specialized land clearing services for the automotive industry throughout Greater Houston. Whether you need land clearing for performance vehicles, structural repairs to vehicle frames, or specialized components for racing applications, our skilled welders combine technical expertise with automotive knowledge. From classic car restorations to off-road vehicle reinforcements, we provide quality land clearing solutions that enhance performance, safety, and style.";

  return (
    <IndustryContent
      industry="Automotive"
      description={automotiveDescription}
      services={automotiveServices}
      benefits={automotiveBenefits}
      applications={automotiveApplications}
      faqs={automotiveFaqs}
    />
  );
}
