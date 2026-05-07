import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function SpringServiceAreaPage() {
  const services = [
    "Land clearing services throughout Spring",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Spring area"
  ];

  const neighboringCities = ["Humble", "Conroe", "The Woodlands", "Baytown", "Katy"];

  return (
    <ServiceAreaContent
      city="Spring"
      countyLocation="Harris County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
