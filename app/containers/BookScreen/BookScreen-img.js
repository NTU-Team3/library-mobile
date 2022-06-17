import React, { useState } from "react";
import { Dimensions, StyleSheet, Image, View, Text, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import dataBook from "../../data/fakeDataBook-ikoh";
// import bookImg from "../../../assets/book-covers/defaultcover.png";
import bookImg from "../../../assets/book-covers/bcover001.jpg";

export default function BookScreenImg({ navigation }) {
  const winWidth = Dimensions.get("window").width;

  const [book, setBook] = useState({
    title: dataBook[1].title,
    author: dataBook[1].author,
  });

  const pressBack = () => {
    // navigation.goBack();
    Alert.alert("Back", "Go back to Catalog page.", [{ text: "Accept", onPress: () => console.log("Back button closed.") }]);
  };

  return (
    <View>
      <View style={styles.divImg}>
        <Image style={styles.img} source={bookImg} />
        <Ionicons style={styles.btnBack} name={"arrow-back-circle"} size={winWidth / 8} color={"#222831"} onPress={pressBack} />
      </View>
      <View style={styles.divHeader}>
        <Text style={styles.txtTitle}>{book.title}</Text>
        <Text style={styles.txtAuthor}>{book.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divImg: {
    flex: 1,
  },

  img: {
    marginTop: "-10%",
    alignSelf: "center",
    resizeMode: "cover",
    width: "105%",
    opacity: 0.4,
    zIndex: 1,
  },

  divHeader: {
    marginTop: "60%",
    paddingLeft: "9%",
    padding: "3%",
    opacity: 0.85,
    zIndex: 3,
    backgroundColor: "#FFCE45",
  },

  btnBack: {
    position: "absolute",
    marginTop: "9%",
    marginLeft: "7%",
    zIndex: 3,
  },

  txtTitle: {
    // fontFamily: "Arsenal_700Bold",
    fontWeight: "bold",
    fontSize: 20,
  },

  txtAuthor: {
    // fontFamily: "Arsenal_400Regular",
    fontSize: 16,
  },
});
