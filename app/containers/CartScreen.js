import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const CartScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
      <Button title="Click Here" onPress={() => alert("button clicked!")} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
