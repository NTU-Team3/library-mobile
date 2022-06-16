import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import Screen from "./Screen";
import data from "../data/fakeData";
import Greeting from "../components/Greetings";
import ChipButtons from "../components/Chip";
import CarouselCards from "../components/CarouselCards";

export default function HomeScreen() {
  const psychology = data.filter((item) => item.category === "psychology");
  const technology = data.filter((item) => item.category === "technology");
  const political = data.filter((item) => item.category === "political");
  const fiction = data.filter((item) => item.category === "fiction");

  const greeting = "Greetings, Charline";
  const [curList, setList] = React.useState(political);
  const [category, setCategory] = React.useState("political");
  const [chipIdx, setChipIdx] = React.useState(0);

  function filter(catName) {
    const category = catName.toLowerCase();
    console.log(`filter function at homescreen: ${category}`);

    switch (category) {
      case "political":
        setList(political);
        setCategory(category);
        break;
      case "psychology":
        setList(psychology);
        setCategory(category);

        break;
      case "technology":
        setList(technology);
        setCategory(category);

        break;
      case "fiction":
        setList(fiction);
        setCategory(category);

        break;
    }
    setChipIdx(0);
  }
  return (
    <Screen>
      <SearchBar />
      <Greeting>{greeting}</Greeting>
      <ChipButtons select={category} onChange={filter} ind={chipIdx} />
      <CarouselCards data={curList} />
    </Screen>
  );
}
