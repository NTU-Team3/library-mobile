import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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
        {"\n"}M04 - Presentation
      </Text>

      <View style={styles.TextsAll}>
        <TouchableOpacity onPress={pressLogin}>
          <Text style={styles.TextSingle}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressRegister}>
          <Text style={styles.TextSingle}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressEditProfile}>
          <Text style={styles.TextSingle}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressHome}>
          <Text style={styles.TextSingle}>Home</Text>
        </TouchableOpacity>
        {/* 
        <TouchableOpacity onPress={pressCatalog}>
          <Text style={styles.TextSingle}>
            Catalog
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={pressBook}>
          <Text style={styles.TextSingle}>Book</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressReadList}>
          <Text style={styles.TextSingle}>Read List</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressReadItem}>
          <Text style={styles.TextSingle}>Read Item</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={pressCart}>
          <Text style={styles.TextSingle}>
            Cart
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={pressProfile}>
          <Text style={styles.TextSingle}>Profile</Text>
        </TouchableOpacity>
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
    width: "50%",
    marginVertical: "2%",
    paddingLeft: "6%",
    paddingTop: "3.25%",
    paddingBottom: "3.25%",
    color: "#222831",
    textAlign: "left",
    borderBottomRightRadius: 20,
    backgroundColor: "#FFCE45",
  },
});

