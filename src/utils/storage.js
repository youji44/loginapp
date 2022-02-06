import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveUser(email, password) {
  await AsyncStorage.setItem("user_email", email);
  await AsyncStorage.setItem("user_password", password);
}

export async function saveLogin(login) {
  await AsyncStorage.setItem("user_login", login);
  console.log("saved:" + login);
}

export function getEmail() {
  AsyncStorage.getItem("user_email").then((value) => {
    if (value) {
      return value;
    }
  });
}

export function getPassword() {
  return AsyncStorage.getItem("user_password");
}

export async function getLogin() {
  await AsyncStorage.getItem("user_login").then((value) => {
    if (value) {
      return value;
    } else {
      return "empty";
    }
  });
}
