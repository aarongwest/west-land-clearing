import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function LakeJacksonServiceAreaPage() {
  const services = [
    "Land clearing services throughout Lake Jackson",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Lake Jackson area"
  ];

  const neighboringCities = ["Angleton", "Pearland", "Alvin", "Rosharon", "Needville"];

  return (
    <ServiceAreaContent
      city="Lake Jackson"
      countyLocation="Brazoria County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
