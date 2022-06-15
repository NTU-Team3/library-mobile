import { React, useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

import _Button from "../components/Button";
import Background_Image from "../../assets/login_page/background.png";

const Login_page = () => {
  const [name, setName] = useState("Enter your preferred name");
  const [email, setEmail] = useState("Enter your preferred name");
  const [password, setPassword] = useState("Enter your password");
  const [confirmPassword, setConfirmPassword] = useState("repeat password");
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.text}> Edit Profile</Text>
          <View style={styles.divider}>
            <Text style={styles.name}>CT</Text>
          </View>
          <Text style={styles.avatar}>Change Avatar</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter preferred display name"
            value={name}
            onChangeText={setName}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            placeholderTextColor="white"
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="repeat password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          ></TextInput>
          <View style={styles.end}>
            <_Button buttonText="register" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  text: {
    marginTop: "15%",
    color: "rgba(57, 62, 70, 1)",
    fontSize: 30,
    lineHeight: 38,
  },
  input: {
    backgroundColor: " rgba(255, 206, 69,1)",
    marginTop: 5,
    width: 255,
    height: 44,
    padding: 13,
    marginBottom: 5,
    color: "white",
  },
  divider: {
    height: 151,
    width: 151,
    borderRadius: 151 / 2,
    backgroundColor: "rgba(255, 206, 69, 1)",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
  end: {
    width: "100%",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  inner_container: {
    width: 255,
    alignItems: "center",
  },
  name: {
    fontSize: 80,
    color: "white",
  },
  avatar: { marginBottom: 30, marginTop: 14 },
});

export default Login_page;
