import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function BaytownServiceAreaPage() {
  const services = [
    "Land clearing services throughout Baytown",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Baytown area"
  ];

  const neighboringCities = ["League City", "Spring", "Humble", "Conroe", "Pasadena"];

  return (
    <ServiceAreaContent
      city="Baytown"
      countyLocation="Harris County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
