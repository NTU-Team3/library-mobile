import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Pagination = ({ length, page }) => {
  //   const [dotAt, setDotAt] = React.useState(1);
  let dots = [];
  let noOfPages = 1;
  let dotAt = 1;
  dotAt = Math.ceil(page / 3);
  if (length % 3 === 0) {
    noOfPages = length / 3;
  } else {
    noOfPages = Math.trunc(length / 3 + 1);
  }

  for (let index = 0; index < noOfPages; index++) {
    dots[index] = (
      <View
        key={index}
        style={index === dotAt ? styles.dotsActive : styles.dots}
      ></View>
    );
  }
  return dots;
};

const styles = StyleSheet.create({
  dots: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "grey",
    margin: 6,
  },
  dotsActive: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "black",
    margin: 6,
  },
});
export default Pagination;
