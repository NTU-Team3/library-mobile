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

export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  const techBooks = data.filter((item) => item.category === "tech");
  const political = data.filter((item) => item.category === "political");
  const fiction = data.filter((item) => item.category === "fiction");

  const greeting = "Greetings, Charline";
  return (
    <Screen>
      <SearchBar />
      <Greeting>{greeting}</Greeting>
      <ChipButtons />
      <CarouselCards data={fiction} />
    </Screen>
  );
}
