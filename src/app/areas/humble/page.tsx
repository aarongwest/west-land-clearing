import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function HumbleServiceAreaPage() {
  const services = [
    "Land clearing services throughout Humble",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Humble area"
  ];

  const neighboringCities = ["Spring", "Conroe", "Baytown", "The Woodlands", "Katy"];

  return (
    <ServiceAreaContent
      city="Humble"
      countyLocation="Harris County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
