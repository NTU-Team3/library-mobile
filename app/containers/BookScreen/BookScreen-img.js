import React from "react";
import { Dimensions, StyleSheet, Image, View, Text, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import dataBook from "../../data/fakeDataBook-ikoh";
import bookImg from "../../../assets/book-covers/bcover_01.jpg";

export default function BookScreenImg() {
  const winWidth = Dimensions.get("window").width;
  const winHeight = Dimensions.get("window").height;

  const bookTitle = dataBook[1].title;
  const bookAuthor = dataBook[1].author;

  const backBtnPress = () => {
    Alert.alert(`Single Listing - Back`);
  };

  return (
    <View style={styles.divH}>
      <View style={styles.divTop}>
        <Image style={styles.img} source={bookImg} />
        <Ionicons style={styles.btnBack} name={"arrow-back-circle"} size={winWidth / 8} color={"#222831"} onPress={backBtnPress} />
      </View>
      <View style={styles.divHeader}>
        <Text style={styles.txtTitle}>{bookTitle}</Text>
        <Text style={styles.txtAuthor}>{bookAuthor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divTop: {
    width: "100%",
    marginTop: 0,
    backgroundColor: "#FFFFFF",
  },

  img: {
    alignSelf: "center",
    width: "105%",
    opacity: 0.4,
    zIndex: 1,
  },

  divHeader: {
    justifyContent: "flex-end",
    width: "100%",
    paddingLeft: "8%",
    padding: "3.5%",
    opacity: 1,
    zIndex: 2,
    backgroundColor: "#FFCE45",
  },

  btnBack: {
    position: "absolute",
    marginTop: "11%",
    marginLeft: "7%",
    zIndex: 2,
  },

  txtTitle: {
    // fontFamily: "Arsenal_700Bold",
    fontSize: 25,
  },

  txtAuthor: {
    // fontFamily: "Arsenal_400Regular",
    fontSize: 20,
  },
});
