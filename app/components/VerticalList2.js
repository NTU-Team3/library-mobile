import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "./Title";
import FlatCard2 from "./FlatCard2";

const VerticalList2 = ({ title, data }) => {
  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.container}>
        {data.map((item) => (
          <FlatCard2 item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
export default VerticalList2;
