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

export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  const techBooks = data.filter((item) => item.category === "tech");
  const political = data.filter((item) => item.category === "political");
  const fiction = data.filter((item) => item.category === "fiction");

  return (
    <Screen>
      <SearchBar />
      <BreakingNews data={breakingNews} />
      <Technical data={techBooks} />
      <PoliticalBook data={political} />
      <Fiction data={fiction} />
    </Screen>
  );
}
