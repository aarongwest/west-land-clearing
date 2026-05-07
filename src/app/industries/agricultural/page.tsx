import React from "react";
import IndustryContent from "../../../components/industries/IndustryContent";
import { metadata } from "./metadata";

export { metadata };

export default function AgriculturalIndustryPage() {
  const agriculturalServices = [
    "Farm land clearing and preparation",
    "Agricultural pond excavation and creation",
    "Livestock pad and lot grading",
    "Irrigation ditch and canal preparation",
    "Agricultural drainage solutions",
    "Road and access route construction",
    "Erosion control for agricultural land",
    "Site preparation for agricultural buildings"
  ];

  const agriculturalBenefits = [
    {
      title: "Maximize Usable Acreage",
      description: "Our precise land clearing and grading services help maximize usable land for crops and livestock, improving your farm's productivity and profitability. For agricultural structures requiring metal work, our sister company provides specialized <a href='https://West Land Clearing.co/industries/agricultural' target='_blank' rel='noopener noreferrer' className='text-white hover:underline'>agricultural land clearing services</a>."
    },
    {
      title: "Effective Water Management",
      description: "Our agricultural drainage solutions and pond creation services help manage water resources efficiently for irrigation while protecting crops from excess water damage."
    },
    {
      title: "Sustainable Land Practices",
      description: "We implement erosion control measures and sustainable land management techniques that preserve soil quality and reduce environmental impact."
    },
    {
      title: "Infrastructure Improvement",
      description: "Our road construction and site preparation services enhance farm infrastructure, improving access and operational efficiency throughout your property. Combined with <a href='https://West Land Clearing.co/services/fabrication' target='_blank' rel='noopener noreferrer' className='text-white hover:underline'>land clearing</a> from our sister company, we can support comprehensive agricultural infrastructure development."
    }
  ];

  const agriculturalApplications = [
    "New farmland development",
    "Agricultural pond and water feature creation",
    "Livestock area preparation",
    "Irrigation system trenching and installation",
    "Farm road and access route construction",
    "Agricultural building site preparation",
    "Erosion control implementation",
    "Drainage ditch and swale construction"
  ];

  const agriculturalFaqs = [
    {
      question: "How do you minimize crop damage during land clearing and excavation?",
      answer: "We work closely with farm owners to schedule our services during optimal times in the growing cycle. We also carefully plan equipment routes to minimize impact on existing crops, use specialized low-impact equipment when necessary, and implement precise excavation techniques to limit our footprint on agricultural land."
    },
    {
      question: "Can you help with agricultural water management issues?",
      answer: "Yes, we specialize in agricultural water management solutions including pond excavation, irrigation ditch construction, drainage system implementation, and erosion control. Our services help farmers optimize water resources while protecting crops and soil from water-related damage."
    },
    {
      question: "What size agricultural projects can you handle?",
      answer: "We handle agricultural projects of all sizes, from small family farms to large commercial agricultural operations. Our equipment fleet and experienced team can scale to meet the needs of your specific project, whether it's clearing a small area or developing extensive acreage. For projects requiring specialized equipment repairs, our sister company offers <a href='https://West Land Clearing.co/services/land clearing-repair' target='_blank' rel='noopener noreferrer' style={{color: 'white', textDecoration: 'underline'}}>agricultural equipment land clearing</a>."
    },
    {
      question: "Do you work around growing seasons?",
      answer: "Yes, we understand the critical nature of agricultural timing. We work with farmers to schedule our services during appropriate seasons and growth cycles to minimize disruption to agricultural operations. For projects with flexible timelines, we can also offer seasonal scheduling to accommodate your farm's needs."
    }
  ];

  const agriculturalDescription = "West Land Clearing delivers specialized excavation and land preparation services for the agricultural industry across Greater Houston. We understand the unique challenges farmers face and provide efficient, sustainable solutions that enhance your agricultural operations. From land clearing and pond creation to drainage solutions and road construction, our experienced operators and modern equipment help you optimize your farm's productivity and infrastructure.";

  return (
    <IndustryContent
      industry="Agricultural"
      description={agriculturalDescription}
      services={agriculturalServices}
      benefits={agriculturalBenefits}
      applications={agriculturalApplications}
      faqs={agriculturalFaqs}
    />
  );
}
