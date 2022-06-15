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
          <View style={styles.divider}></View>
          <Text style={styles.text}> Register</Text>
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
    color: "rgba(57, 62, 70, 1)",
    fontSize: 30,
    lineHeight: 38,
  },
  input: {
    backgroundColor: " rgba(255, 206, 69,1)",
    marginTop: 10,
    width: 255,
    height: 44,
    padding: 13,
    marginBottom: 20,
    color: "white",
  },
  divider: {
    height: "20%",
  },
  end: {
    width: "100%",
    alignItems: "flex-end",
  },
  inner_container: {
    width: 255,
  },
});

export default Login_page;
