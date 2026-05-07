import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function AngletonServiceAreaPage() {
  const services = [
    "Land clearing services throughout Angleton",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Angleton area"
  ];

  const neighboringCities = ["Alvin", "Lake Jackson", "Pearland", "Manvel", "Rosharon"];

  return (
    <ServiceAreaContent
      city="Angleton"
      countyLocation="Brazoria County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
