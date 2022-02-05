import React from "react";
import Button from "../components/Button";
import Background from "../components/Background";

export default function Start({ navigation }) {
  return (
    <Background>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
        Register
      </Button>
    </Background>
  );
}
