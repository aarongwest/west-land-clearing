import React from "react";
import IndustryContent from "../../../components/industries/IndustryContent";
import { metadata } from "./metadata";

export { metadata };

export default function ConstructionIndustryPage() {
  const constructionServices = [
    "Site work and preparation",
    "Grading and leveling",
    "Demolition services",
    "Excavation and trenching",
    "Land clearing and site cleanup",
    "Foundation preparation",
    "Drainage solutions",
    "Erosion control systems"
  ];

  const constructionBenefits = [
    {
      title: "Minimize Project Delays",
      description: "Our on-site services help keep your construction timeline on track by providing efficient site preparation and excavation work that meets your schedule requirements. For projects requiring both excavation and metal work, our sister company offers expert <a href='https://West Land Clearing.co/industries/construction' target='_blank' rel='noopener noreferrer' className='text-white hover:underline'>construction land clearing services</a>."
    },
    {
      title: "Expert Equipment Operation",
      description: "Our operators are experienced with a wide range of heavy equipment, ensuring that your site work is completed safely and efficiently."
    },
    {
      title: "Versatile Capabilities",
      description: "From basic land clearing to complex excavation projects, our construction division covers the full range of site preparation needs."
    },
    {
      title: "Quality Assurance",
      description: "Every project is completed to the highest standards, with careful attention to specifications and engineering requirements to ensure long-lasting results."
    }
  ];

  const constructionApplications = [
    "Commercial site preparation",
    "Residential lot clearing",
    "Foundation excavation",
    "Utility trenching",
    "Road and driveway grading",
    "Demolition projects",
    "Drainage system installation",
    "Erosion control implementation"
  ];

  const constructionFaqs = [
    {
      question: "What types of construction projects do you provide site work services for?",
      answer: "We provide site preparation, excavation, and grading services for a wide range of construction projects, including commercial sites, residential developments, industrial facilities, and infrastructure projects. Our services are scalable to accommodate projects of any size."
    },
    {
      question: "Can you work with engineering plans and specifications?",
      answer: "Yes, our experienced operators can work directly from engineering plans and specifications to ensure that all site work meets project requirements and complies with applicable codes and standards. For projects involving both site work and structural steel, we collaborate with our sister company that offers <a href='https://West Land Clearing.co/services/structural-land clearing' target='_blank' rel='noopener noreferrer' style={{color: 'white', textDecoration: 'underline'}}>land clearing</a> services to provide comprehensive solutions."
    },
    {
      question: "How quickly can you respond to site work needs for a construction project?",
      answer: "For scheduled construction projects, we can coordinate our services to align with your project timeline. For urgent needs, we typically respond within 1-2 business days, depending on current workload and the specific requirements of your project."
    },
    {
      question: "Do you handle all necessary permits for excavation work?",
      answer: "We can assist with the permitting process, but typically the general contractor or property owner is responsible for securing the necessary permits. We ensure all our work complies with local regulations and inspection requirements."
    }
  ];

  const constructionDescription = "West Land Clearing provides specialized site work and excavation services across Greater Houston. Our expert team delivers high-quality site preparation, grading, excavation, and land clearing that keep your construction projects moving forward on schedule and within budget. With our modern equipment and experienced operators, we provide efficient and precise site work for projects of all sizes.";

  return (
    <IndustryContent
      industry="Construction"
      description={constructionDescription}
      services={constructionServices}
      benefits={constructionBenefits}
      applications={constructionApplications}
      faqs={constructionFaqs}
    />
  );
}
