import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Pagination from "./Pagination";

const winWidth = Dimensions.get("window").width;
const snap = (winWidth - 30) / 3;
const Carousel = (data) => {
  const [activePage, setActivePage] = React.useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.ScrollView}
        snapToInterval={snap}
        snapToStart={true}
        disableIntervalMomentum={true}
        horizontal={true}
        onScroll={function (event) {
          setActivePage(Math.round(event.nativeEvent.contentOffset.x / snap));
        }}
      >
        {data.data.map((book, index) => {
          return (
            <View>
              <TouchableOpacity
                key={index}
                style={
                  index === activePage + 1 ? styles.activePage : styles.page
                }
              >
                <Image source={{ uri: book.thumbnail }} style={styles.image} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.pagination}>
        <Pagination length={data.data.length} page={activePage}></Pagination>
      </View>
      <Text style={styles.bookTitle}>{data.data[activePage + 1].title}</Text>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    width: winWidth - 30,
  },

  ScrollView: {
    height: 200,
    alignItems: "center",
  },
  page: {
    width: (winWidth - 30) / 3,
    height: 220,
    padding: 25,
  },
  image: {
    resizeMode: "contain",
    flex: 1,
  },

  activePage: {
    width: (winWidth - 30) / 3,
    paddingLeft: 10,
    paddingRight: 10,
    height: 250,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  bookTitle: {
    textAlign: "center",
  },
});
