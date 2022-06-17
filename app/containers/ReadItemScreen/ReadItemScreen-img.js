import React, { useState } from "react";
import {
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  Image,
  View,
  Text,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import dataBook from "../../data/fakeDataBook-ikoh";
import bookImg from "../../../assets/book-covers/bcover_01.jpg";
// import bookImg from "../../../assets/book-covers/defaultcover.png";

export default function ReadItemScreenImg({ navigation }) {
  const winWidth = Dimensions.get("window").width;

  const [imgPath, setImgPath] = useState(dataBook[1].imgpath);
  const [title, setTitle] = useState(dataBook[1].title);
  const [author, setAuthor] = useState(dataBook[1].author);
  const [gist, setGist] = useState(dataBook[1].gist);

  const pressBack = () => {
    // navigation.goBack();
    Alert.alert("Back", "Go back to Read List page.", [
      { text: "Accept", onPress: () => console.log("Back button closed.") },
    ]);
  };

  // const [name, setName] = useState("abc");
  // const pressHandler = () => {
  //   setName("123");
  // };

  return (
    <View style={styles.divTop}>
      <View style={styles.divImg}>
        <Image style={styles.img} source={bookImg} />
      </View>
      <Ionicons
        style={styles.btnBack}
        name={"arrow-back-circle"}
        size={winWidth / 8}
        color={"#222831"}
        onPress={pressBack}
      />

      <View style={styles.divHeader}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtKeyInfo}>
          {author}
          {"\n"}
        </Text>
        <Text style={styles.txtKeyInfo}>{gist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divTop: {
    flexDirection: "row",
    marginBottom: "-12%",
    backgroundColor: "#FFFFFF",
  },

  divImg: {
    flex: 1,
  },

  img: {
    marginTop: "15%",
    marginLeft: "15%",
    alignSelf: "center",
    resizeMode: "contain",
    width: "65%",
    zIndex: 1,
  },

  divHeader: {
    lineHeight: 100,
    width: "55%",
    paddingTop: "40%",
    paddingLeft: "3%",
    opacity: 1,
  },

  btnBack: {
    position: "absolute",
    marginTop: "9%",
    marginLeft: "7%",
    zIndex: 2,
  },

  txtTitle: {
    // fontFamily: "Arsenal_700Bold",
    fontWeight: "bold",
    fontSize: 16,
  },

  txtKeyInfo: {
    // fontFamily: "Arsenal_400Regular",
    fontSize: 12,
  },
});
