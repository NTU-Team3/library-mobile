import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import SearchBar from "./SearchBar";
import Screen from "./Screen";
import BlockCard from "./BlockCard";
import FeaturedNews from "./FeaturedNews";
import BreakingNews from "./BreakingNews";
import data from "../data/fakeData";
import Technical from "./Technical";
import PoliticalBook from "./PoliticalBook";
import Fiction from "./Fiction";
import Popular from "./Popular";
import Greeting from "./Greetings";
import ChipButtons from "./Chip";
import CarouselCards from "./CarouselCards";

export default function HomeScreen() {
  const psychology = data.filter((item) => item.category === "psychology");
  const technology = data.filter((item) => item.category === "technology");
  const political = data.filter((item) => item.category === "political");
  const fiction = data.filter((item) => item.category === "fiction");

  const greeting = "Greetings, Charline";
  const [curList, setList] = React.useState(political);
  const [category, setCategory] = React.useState("political");

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
  }
  return (
    <Screen>
      <SearchBar />
      <Greeting>{greeting}</Greeting>
      <ChipButtons select={category} onChange={filter} />
      <CarouselCards data={curList} />
    </Screen>
  );
}
