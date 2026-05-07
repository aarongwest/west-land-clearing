import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function ConroeServiceAreaPage() {
  const services = [
    "Land clearing services throughout Conroe",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Conroe area"
  ];

  const neighboringCities = ["The Woodlands", "Spring", "Humble", "Baytown", "Katy"];

  return (
    <ServiceAreaContent
      city="Conroe"
      countyLocation="Montgomery County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
