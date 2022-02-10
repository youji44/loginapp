import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLogin() {
  await AsyncStorage.getItem("@access_token").then((value) => {
    if (value) {
      return value;
    } else {
      return "empty";
    }
  });
}
