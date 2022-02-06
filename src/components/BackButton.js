import React from "react";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { IconButton } from "react-native-paper";
import { theme } from "./theme";

export default function BackButton({ goBack }) {
  return (
    <IconButton
      icon="arrow-left"
      color={theme.colors.primary}
      size={32}
      onPress={goBack}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: getStatusBarHeight() - 30,
    left: 0,
  },
});
