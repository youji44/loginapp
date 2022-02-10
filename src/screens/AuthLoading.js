import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "../components/theme";
import Background from "../components/Background";

export default function AuthLoading({ navigation }) {
  // User is not logged in
  navigation.reset({
    index: 0,
    routes: [{ name: "Start" }],
  });
  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
}
