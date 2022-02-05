import React from "react";
import Button from "../components/Button";
import Background from "../components/Background";
import Header from "../components/Header";

export default function Start({ navigation }) {
  return (
    <Background>
      <Header>Welcome!</Header>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
        Register
      </Button>
    </Background>
  );
}
