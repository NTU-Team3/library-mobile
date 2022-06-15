import { View, StyleSheet } from "react-native";
import React from "react";
import CarouselCards from "./CarouselCards";

const Popular = ({ data }) => {
  console.log("Fiction", data);
  return <CarouselCards title="Books" data={data} />;
};

export default Popular;
