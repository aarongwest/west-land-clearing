import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function IowaColonyServiceAreaPage() {
  const services = [
    "Land clearing services throughout Iowa Colony",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Iowa Colony area"
  ];

  const neighboringCities = ["Pearland", "Manvel", "Alvin", "Angleton", "Rosharon"];

  return (
    <ServiceAreaContent
      city="Iowa Colony"
      countyLocation="Brazoria County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
