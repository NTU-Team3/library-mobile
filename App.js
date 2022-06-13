import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/navigation/tab";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
