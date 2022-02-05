import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Home({ navigation }) {
  return (
    <Background>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </Background>
  );
}
