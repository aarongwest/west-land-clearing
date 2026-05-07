import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function KatyServiceAreaPage() {
  const services = [
    "Land clearing services throughout Katy",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Katy area"
  ];

  const neighboringCities = ["Sugar Land", "Richmond", "Missouri City", "Rosenberg", "Needville"];

  return (
    <ServiceAreaContent
      city="Katy"
      countyLocation="Fort Bend County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
