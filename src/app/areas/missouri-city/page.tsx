import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function MissouriCityServiceAreaPage() {
  const services = [
    "Land clearing services throughout Missouri City",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Missouri City area"
  ];

  const neighboringCities = ["Sugar Land", "Pearland", "Richmond", "Rosenberg", "Katy"];

  return (
    <ServiceAreaContent
      city="Missouri City"
      countyLocation="Fort Bend County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
