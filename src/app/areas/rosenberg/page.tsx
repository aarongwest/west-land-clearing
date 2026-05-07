import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function RosenbergServiceAreaPage() {
  const services = [
    "Land clearing services throughout Rosenberg",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Rosenberg area"
  ];

  const neighboringCities = ["Richmond", "Sugar Land", "Missouri City", "Katy", "Needville"];

  return (
    <ServiceAreaContent
      city="Rosenberg"
      countyLocation="Fort Bend County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
