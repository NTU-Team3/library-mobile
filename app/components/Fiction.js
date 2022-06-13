import { View, StyleSheet } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";

const Fiction = ({ data }) => {
  console.log("Fiction", data);
  return <HorizontalList title="Fiction" data={data} />;
};

export default Fiction;
