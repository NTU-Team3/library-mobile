import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import ReadingScreen from "../components/Reading";
import ProfileScreen from "../components/ProfileScreen";

import CartScreen from "../components/CartScreen";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFCE45",
        tabBarInactiveTintColor: "#555",
        tabBarActiveBackgroundColor: "#FFCE45",
        tabBarInactiveBackgroundColor: "#222831",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/home.png")}
              style={{ width: 20, height: 20, tintColor: "white" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={ReadingScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/book.png")}
              style={{ width: 20, height: 20, tintColor: "white" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/shopping-cart.png")}
              style={{ width: 20, height: 20, tintColor: "white" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/profile.png")}
              style={{ width: 20, height: 20, tintColor: "white" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
