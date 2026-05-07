import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function TheWoodlandsServiceAreaPage() {
  const services = [
    "Land clearing services throughout The Woodlands",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in The Woodlands area"
  ];

  const neighboringCities = ["Conroe", "Spring", "Humble", "Baytown", "Katy"];

  return (
    <ServiceAreaContent
      city="The Woodlands"
      countyLocation="Montgomery County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
