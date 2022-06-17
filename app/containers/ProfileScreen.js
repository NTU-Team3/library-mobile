import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import ArrowIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = (navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style ={} ></Text> */}
      {/* <View style={styles.body}> */}
      <Text style={styles.header}>Profile</Text>
      <View style={styles.userInfoSection}>
        <View style={styles.Avatar}>
          <Avatar.Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3T0LOSWkny0uZHiHf18EYEQ80Wa3PEkQbQw&usqp=CAU" }} size={100} />
        </View>
        <View style={styles.middleSection}>
          <Title style={styles.title}>Charline</Title>
          <Caption style={styles.title}>
            <Icon name="map-marker-radius" size={20} color="#CBCBCB" /> Portugal
          </Caption>
        </View>
      </View>

      <View style={styles.userInfoSectionBottom}>
        <View>
          <TouchableRipple onPress={() => alert("On Loan page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>On Loan</Text>
              <ArrowIcon name="chevron-small-down" color="white" size={25} marginBottom={100} />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("Reservation page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Reservation</Text>
              <ArrowIcon name="chevron-small-down" color="white" size={25} marginBottom={100} />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("History page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>History</Text>
              <ArrowIcon name="chevron-small-down" color="white" size={25} marginBottom={100} />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => alert("Reviews page")}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Reviews</Text>
              <ArrowIcon name="chevron-small-down" color="white" size={25} marginBottom={100} />
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
  container: {
    flex: 1,
    borderColor: "blue",
    backgroundColor: "white",
  },
  header: {
    fontSize: "40px",
    marginTop: 40,
    marginLeft: 50,
  },
  userInfoSection: {
    backgroundColor: "white",
    borderColor: "red",
    flex: 0.5,
    flexDirection: "row",
    marginTop: 50,
  },
  Avatar: {
    marginTop: -60,
    marginLeft: 30,
    fontSize: 100,
    padding: 20,
  },
  title: {
    fontStyle: "inter",
    marginLeft: 20,
  },
  middleSection: {
    position: "absolute",
    left: 180,
    bottom: -40,
  },
  userInfoSectionBottom: {
    backgroundColor: "#FFCE45",
    marginTop: 80,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 30,
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
    marginBottom: 20,
  },
  menuItemText: {
    flex: 1,
    justifyContent: "space between",
  },
  version: {
    marginLeft: 10,
    paddingBottom: 60,
    paddingTop: 20,
  },
});

export default ProfileScreen;
