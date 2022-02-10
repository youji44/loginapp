import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";

import { logoutUser } from "../api/api";
import { AsyncStorage } from "react-native";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState();

  return (
    <Background>
      <Header>Hello World!</Header>
      <Button
        loading={loading}
        mode="outlined"
        onPress={async () => {
          setLoading(true);
          const response = await logoutUser();
          setLoading(false);
          await AsyncStorage.removeItem("@access_token");
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
