import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Register from "./src/screens/Register";
import AuthLoading from "./src/screens/AuthLoading";
import { theme } from "./src/components/theme";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"AuthLoading"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="AuthLoading" component={AuthLoading} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
