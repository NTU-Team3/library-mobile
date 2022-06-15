import React from "react";
import { Dimensions, StyleSheet, Image, View, Text, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import dataBook from "../../data/fakeDataBook-ikoh";
import bookImg from "../../../assets/book-covers/bcover_01.jpg";

export default function ReadItemScreenImg() {
  const winWidth = Dimensions.get("window").width;
  const winHeight = Dimensions.get("window").height;

  const bookTitle = dataBook[1].title;
  const bookAuthor = dataBook[1].author;
  const bookKeyInfo = dataBook[1].keyinfo;

  const backBtnPress = () => {
    Alert.alert(`Read Item - Back`);
  };

  return (
    <View style={styles.divTop}>
      <Image style={styles.img} source={bookImg} />
      <Ionicons style={styles.btnBack} name={"arrow-back-circle"} size={winWidth / 8} color={"#222831"} onPress={backBtnPress} />

      <View style={styles.divHeader}>
        <Text style={styles.txtTitle}>{bookTitle}</Text>
        <Text style={styles.txtKeyInfo}>
          {bookAuthor}
          {"\n"}
        </Text>
        <Text style={styles.txtKeyInfo}>{bookKeyInfo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divTop: {
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    backgroundColor: "#FFFFFF",
  },

  img: {
    alignSelf: "center",

    zIndex: 1,
  },

  divHeader: {
    width: "100%",
    paddingLeft: "8%",
    padding: "3.5%",
    opacity: 1,
    zIndex: 2,
  },

  btnBack: {
    position: "absolute",
    marginTop: "11%",
    marginLeft: "7%",
    zIndex: 2,
  },

  txtTitle: {
    // fontFamily: "Arsenal_700Bold",
    fontSize: 20,
  },

  txtKeyInfo: {
    // fontFamily: "Arsenal_400Regular",
    fontSize: 16,
  },
});
