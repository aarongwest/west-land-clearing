import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function LeagueCityServiceAreaPage() {
  const services = [
    "Land clearing services throughout League City",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in League City area"
  ];

  const neighboringCities = ["Friendswood", "Pearland", "Baytown", "Manvel", "Sugar Land"];

  return (
    <ServiceAreaContent
      city="League City"
      countyLocation="Galveston County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
