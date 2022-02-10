import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "../components/theme";
import Background from "../components/Background";
import { AsyncStorage } from "react-native";

export default function AuthLoading({ navigation }) {
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@access_token");
      if (value !== null) {
        // value previously stored
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "Start" }],
        });
      }
    } catch (e) {
      // error reading value
      navigation.reset({
        index: 0,
        routes: [{ name: "Start" }],
      });
    }
  };
  getData();
  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
}
