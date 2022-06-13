import React from "react";
import SearchBar from "./app/components/SearchBar";
import Screen from "./app/components/Screen";
import BlockCard from "./app/components/BlockCard";
import FeaturedNews from "./app/components/FeaturedNews";
import BreakingNews from "./app/components/BreakingNews";
import data from "./fakeData";
import Technical from "./app/components/Technical";
import PoliticalBook from "./app/components/PoliticalBook";
import Fiction from "./app/components/Fiction";

export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  const techBooks = data.filter((item) => item.category === "tech");
  const political = data.filter((item) => item.category === "political");
  const fiction = data.filter((item) => item.category === "fiction");
  const topNew = {
    id: "81",
    title: "Breaking Open the Head",
    desc: "A new 'The Doors of Perception' for the 21st century? A visionary journey from cynicism to shamanism...",
    thumbnail:
      "http://books.google.com/books/content?id=QIMaviqqoQoC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "tech",
  };
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={topNew} />
      <BreakingNews data={breakingNews} />
      <Technical data={techBooks} />
      <PoliticalBook data={political} />
      <Fiction data={fiction} />
    </Screen>
  );
}
