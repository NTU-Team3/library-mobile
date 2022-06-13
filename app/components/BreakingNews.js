import { View, StyleSheet } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";

const BreakingNews = ({ data }) => {
  console.log("BreakingNews", data);
  return <HorizontalList title="Popular" data={data} />;
};

export default BreakingNews;
