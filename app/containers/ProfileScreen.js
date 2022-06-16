import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ProfileScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert("button clicked!")} />
    </View>
  );
};

test;

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
