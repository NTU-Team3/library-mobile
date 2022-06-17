import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../containers/HomeScreen";
import ReadingScreen from "../containers/Reading";
import ProfileScreen from "../containers/ProfileScreen";

import CartScreen from "../containers/CartScreen";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFCE45",
        tabBarInactiveTintColor: "#555",
        tabBarActiveBackgroundColor: "#FFCE45",
        tabBarInactiveBackgroundColor: "#222831",
        height: "10%",
        bottom: 0,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Image source={require("../../assets/home.png")} style={{ width: 20, height: 20, tintColor: "white" }} />,
        }}
      />
      <Tab.Screen
        name="Read"
        component={ReadingScreen}
        options={{
          tabBarIcon: () => <Image source={require("../../assets/book.png")} style={{ width: 20, height: 20, tintColor: "white" }} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => <Image source={require("../../assets/shopping-cart.png")} style={{ width: 20, height: 20, tintColor: "white" }} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Image source={require("../../assets/profile.png")} style={{ width: 20, height: 20, tintColor: "white" }} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
