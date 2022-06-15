import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
} from "react-native";
import { useForm } from "react-hook-form";

import _Button from "../app/components/Button";
import Background_Image from "../assets/login_page/background.png";

const Login_page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <ImageBackground
        source={Background_Image}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.divider}></View>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("http://google.com");
            }}
          >
            Register?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            placeholderTextColor={"white"}
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor={"white"}
            onChangeText={setPassword}
          ></TextInput>

          <_Button
            buttonText="sign in"
            func={() => {
              if (email.trim() === "" || password.trim() === "") {
                setError("Email and Password are required");
              }
              if (email.trim() === "") {
                setError("Email is required");
              }
              if (password.trim() === "") {
                setError("Email is required");
              } else {
                setError("");
              }
            }}
          />
          {error && <Text> {error} </Text>}

          <View style={styles.lower}>
            <Text
              style={styles.lower__text}
              onPress={() => {
                Linking.openURL("http://google.com");
              }}
            >
              Forgot password
            </Text>
            <Text
              style={styles.lower__text}
              onPress={() => {
                alert("You tapped the button!");
              }}
            >
              Continue as guest
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    width: 255,
  },
  image: {
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "black",

    fontSize: 20,
    lineHeight: 25,
  },
  input: {
    backgroundColor: " rgba(255, 206, 69,1)",
    marginTop: 10,
    width: 255,
    height: 44,
    padding: 13,
    marginBottom: 20,
  },
  divider: {
    height: "60%",
  },
  lower: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  lower__text: {
    fontSize: 12,
    color: "rgba(82, 101, 129, 1)",
  },
});

export default Login_page;
