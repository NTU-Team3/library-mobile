import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Title, Caption, TouchableRipple } from "react-native-paper";
import ArrowIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = (navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style ={} ></Text> */}
      {/* <View style={styles.body}> */}
      <Text style={styles.header}>Profile</Text>
      <View style={styles.userInfoSection}>
        <View style={styles.profile}>
          <Text style={styles.profile_text}>CT</Text>
        </View>
        <View style={styles.middleSection}>
          <View>
            <Title style={styles.name}>Charline Taine</Title>
          </View>
          <View>
            <Caption style={styles.title}>
              <Icon name="map-marker-radius" size={20} color="#CBCBCB" />{" "}
              Portugal
            </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSectionBottom}>
        <View
          style={[
            styles.triangle,
            {
              transform: [
                { rotateX: "20deg" },
                { rotateY: "-30deg" },
                { translateX: -20 },
                { translateY: -20 },
              ],
            },
          ]}
        ></View>
        <View>
          <TouchableRipple onPress={() => alert("On Loan page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>On Loan</Text>
              <ArrowIcon
                name="chevron-small-down"
                color="white"
                size={25}
                marginBottom={100}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("Reservation page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Reservation</Text>
              <ArrowIcon
                name="chevron-small-down"
                color="white"
                size={25}
                marginBottom={100}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("History page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>History</Text>
              <ArrowIcon
                name="chevron-small-down"
                color="white"
                size={25}
                marginBottom={100}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("Reviews page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Reviews</Text>
              <ArrowIcon
                name="chevron-small-down"
                color="white"
                size={25}
                marginBottom={100}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("Edit profile page")}>
            <View style={styles.menuItemLast}>
              <Text style={styles.menuItemText}>Edit Profile</Text>
              <ArrowIcon color="white" size={25} marginBottom={100} />
            </View>
          </TouchableRipple>
          <Text style={styles.version}>Version 3.1.2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  triangle: {
    height: 30,
    width: 180,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    borderColor: "blue",
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 50,
  },
  userInfoSection: {
    backgroundColor: "white",
    borderColor: "red",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 0,
  },

  title: {
    marginLeft: 20,
  },
  middleSection: {
    flexDirection: "column",
  },
  userInfoSectionBottom: {
    backgroundColor: "#FFCE45",
    marginTop: 30,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  menuItemLast: {
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  menuItemText: {
    flex: 1,
    justifyContent: "space-between",
  },
  version: {
    marginLeft: 10,
    paddingBottom: 60,
  },
  profile: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "rgba(255, 206, 69, 1)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 45,
    marginRight: 20,
    marginTop: 10,
  },
  profile_text: {
    fontSize: 45,
    color: "white",
  },
  name: {
    fontSize: 20,
  },
});

export default ProfileScreen;
