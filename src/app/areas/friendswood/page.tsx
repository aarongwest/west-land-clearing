import React from "react";
import ServiceAreaContent from "../../../components/areas/ServiceAreaContent";
import { metadata } from "./metadata";

export { metadata };

export default function FriendswoodServiceAreaPage() {
  const services = [
    "Land clearing services throughout Friendswood",
    "Forestry mulching for residential and rural properties",
    "Stump grinding and complete stump removal",
    "Brush and vegetation removal",
    "Site preparation for new home builds",
    "Access road and driveway clearing",
    "Lot clearing for overgrown residential properties",
    "Free on-site estimates in Friendswood area"
  ];

  const neighboringCities = ["Pearland", "League City", "Alvin", "Manvel", "Sugar Land"];

  return (
    <ServiceAreaContent
      city="Friendswood"
      countyLocation="Galveston County"
      services={services}
      featuredService="Forestry Mulching"
      neighboringCities={neighboringCities}
    />
  );
}
