import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Login({ navigation }) {
  return (
    <Background>
      <Text>Login Screen</Text>
      <StatusBar style="auto" />
    </Background>
  );
}
