import React from "react";
import IndustryContent from "../../../components/industries/IndustryContent";
import { metadata } from "./metadata";

export { metadata };

export default function ResidentialIndustryPage() {
  const residentialServices = [
    "Residential excavation for new homes",
    "Yard grading and leveling",
    "Drainage correction and solutions",
    "Brush clearing and property maintenance",
    "Driveway and walkway preparation",
    "Foundation preparation and excavation",
    "Landscape preparation",
    "Erosion control for residential properties"
  ];

  const residentialBenefits = [
    {
      title: "Expert Property Assessment",
      description: "We provide thorough property assessments to identify drainage issues, grading needs, and the optimal approach for your residential excavation project. For projects requiring land clearing solutions, our sister company offers <a href='https://West Land Clearing.co/industries/residential' target='_blank' rel='noopener noreferrer' className='text-white hover:underline'>residential land clearing services</a>."
    },
    {
      title: "Preservation of Landscape Features",
      description: "Our careful approach to residential work ensures we preserve trees, landscaping, and other features you want to keep while clearing only what's necessary."
    },
    {
      title: "Proper Drainage Solutions",
      description: "We implement effective grading and drainage solutions that protect your home's foundation and prevent water accumulation issues around your property."
    },
    {
      title: "Clean and Efficient Work",
      description: "Our residential services are delivered with minimal disruption to your property, with thorough cleanup and respect for your home and surrounding landscape."
    }
  ];

  const residentialApplications = [
    "New home construction preparation",
    "Home addition excavation",
    "Yard regrading and drainage correction",
    "Driveway and walkway preparation",
    "Swimming pool excavation",
    "Retaining wall preparation",
    "Fire prevention brush clearing",
    "Utility line trenching for residential properties"
  ];

  const residentialFaqs = [
    {
      question: "How much does residential excavation typically cost?",
      answer: "Excavation costs for residential projects vary widely based on factors like soil type, property access, the extent of work needed, and specific requirements. We provide detailed cost estimates after a site visit to assess your specific needs."
    },
    {
      question: "How do you minimize damage to my yard during excavation?",
      answer: "We use precise equipment operation, carefully plan access routes, place protective materials when needed, and implement erosion control measures. We also work to preserve existing vegetation and landscape features whenever possible."
    },
    {
      question: "Can you fix drainage problems in my yard?",
      answer: "Yes, we specialize in diagnosing and correcting residential drainage issues. Our solutions may include regrading, installing swales, creating proper slopes away from structures, and implementing other drainage solutions tailored to your property's specific needs. For custom drainage grates or metal elements, our sister company offers <a href='https://West Land Clearing.co/services/custom-fabrication' target='_blank' rel='noopener noreferrer' style={{color: 'white', textDecoration: 'underline'}}>land clearing services</a>."
    },
    {
      question: "Do I need permits for residential excavation work?",
      answer: "Permit requirements vary by location and project scope. Many smaller grading projects don't require permits, while larger excavations often do. We can advise on permit requirements for your specific project and assist with the permit process when needed."
    }
  ];

  const residentialDescription = "West Land Clearing provides comprehensive excavation and grading services for residential properties throughout Greater Houston. From new home site preparation and yard grading to drainage correction and landscape preparation, our skilled operators create properly contoured, well-draining surfaces that enhance your property's functionality and value. We collaborate closely with homeowners to understand your specific needs, delivering precise excavation work that protects your home and improves your outdoor spaces.";

  return (
    <IndustryContent
      industry="Residential"
      description={residentialDescription}
      services={residentialServices}
      benefits={residentialBenefits}
      applications={residentialApplications}
      faqs={residentialFaqs}
    />
  );
}
