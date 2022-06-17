import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PresentationHome({ navigation }) {
  const pressLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const pressRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  const pressEditProfile = () => {
    navigation.navigate("EditProfileScreen");
  };

  const pressHome = () => {
    navigation.navigate("HomeScreen");
  };

  //   const pressCatalog = () => {
  //     navigation.navigate("CatalogScreen");
  //   };

  const pressBook = () => {
    navigation.navigate("BookScreen");
  };

  const pressReadList = () => {
    navigation.navigate("ReadListScreen");
  };

  const pressReadItem = () => {
    navigation.navigate("ReadItemScreen");
  };

  //   const pressCart = () => {
  //     navigation.navigate("CartScreen");
  //   };

  const pressProfile = () => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#222831", paddingLeft: "10%" }}>
        {"\n"}
        {"\n"}
        {"\n"}Presentation
      </Text>
      <View style={styles.TextsAll}>
        <Text onPress={pressLogin} style={styles.TextSingle}>
          Login
        </Text>

        <Text onPress={pressRegister} style={styles.TextSingle}>
          Register
        </Text>
        <Text onPress={pressEditProfile} style={styles.TextSingle}>
          Edit Profile
        </Text>
        <Text onPress={pressHome} style={styles.TextSingle}>
          Home
        </Text>
        {/* <Text onPress={pressCatalog} style={styles.TextSingle}>
          Catalog
        </Text> */}
        <Text onPress={pressBook} style={styles.TextSingle}>
          Book
        </Text>
        <Text onPress={pressReadList} style={styles.TextSingle}>
          Read List
        </Text>
        <Text onPress={pressReadItem} style={styles.TextSingle}>
          Read Item
        </Text>
        {/* <Text onPress={pressCart} style={styles.TextSingle}>
          Cart
        </Text> */}
        <Text onPress={pressProfile} style={styles.TextSingle}>
          Profile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  TextsAll: {
    padding: "10%",
  },

  TextSingle: {
    alignSelf: "flex-start",
    width: "40%",
    margin: "2%",
    paddingLeft: "6%",
    paddingTop: "3.25%",
    paddingBottom: "3.25%",
    color: "#222831",
    textAlign: "left",
    borderBottomRightRadius: 20,
    backgroundColor: "#FFCE45",
  },
});
//
