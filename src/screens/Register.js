import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Register({ navigation }) {
  return (
    <Background>
      <Text>Register Screen</Text>
      <StatusBar style="auto" />
    </Background>
  );
}
