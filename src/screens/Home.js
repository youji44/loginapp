import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react-native";
import { getEmail, saveLogin } from "../utils/storage";

export default function Home({ navigation }) {
  return (
    <Background>
      <Header>Hello World!</Header>
      <Button
        mode="outlined"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Start" }],
          });
        }}
      >
        Logout
      </Button>
    </Background>
  );
}
