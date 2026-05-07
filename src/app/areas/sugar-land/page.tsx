import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function SugarLandServiceAreaPage() {
  const services = [
    "Land clearing services throughout Sugar Land",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Sugar Land area"
  ];

  const neighboringCities = ["Missouri City", "Katy", "Richmond", "Rosenberg", "Pearland"];

  return (
    <ServiceAreaContent
      city="Sugar Land"
      countyLocation="Fort Bend County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
