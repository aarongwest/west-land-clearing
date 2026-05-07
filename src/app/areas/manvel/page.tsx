import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function ManvelServiceAreaPage() {
  const services = [
    "Land clearing services throughout Manvel",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Manvel area"
  ];

  const neighboringCities = ["Pearland", "Alvin", "Iowa Colony", "Angleton", "Rosharon"];

  return (
    <ServiceAreaContent
      city="Manvel"
      countyLocation="Brazoria County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
