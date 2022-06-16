import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Presentation from "../containers/00_PresentationHome";
import Login from "../containers/Login";
import Register from "../containers/Register";
import EditProfile from "../containers/EditProfile";
import Home from "../containers/HomeScreen";
import ReadList from "../containers/Reading";
import Book from "../containers/BookScreen/BookScreen";
import ReadItem from "../containers/ReadItemScreen/ReadItemScreen";
import Profile from "../containers/ProfileScreen";

const allScreens = {
  PresentationHomeScreen: {
    screen: Presentation,
    navigationOptions: {
      headerShown: false,
    },
  },

  LoginScreen: {
    screen: Login,
  },

  RegisterScreen: {
    screen: Register,
  },

  EditProfileScreen: {
    screen: EditProfile,
  },

  HomeScreen: {
    screen: Home,
  },

  //   CatalogScreen: {
  //     screen: Catalog,
  //   },

  BookScreen: {
    screen: Book,
  },

  ReadListScreen: {
    screen: ReadList,
  },

  ReadItemScreen: {
    screen: ReadItem,
  },

  //   CartScreen: {
  //     screen: Cart,
  //   },

  ProfileScreen: {
    screen: Profile,
  },
};

const PresentationStack = createStackNavigator(allScreens);

export default createAppContainer(PresentationStack);
//
