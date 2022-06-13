import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import BlockCard from "./BlockCard";

const { width } = Dimensions.get("window");

const SmallCard = ({ item }) => {
  console.log("SmallCard");
  return (
    <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
});

export default SmallCard;
