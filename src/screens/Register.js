import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { IconButton } from "react-native-paper";
import Background from "../components/Background";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { theme } from "../components/theme";
import {
  DatePickerInput,
  enGB,
  registerTranslation,
} from "react-native-paper-dates";
import { nameValidator } from "../utils/nameValidator";
import { surnameValidator } from "../utils/surnameValidator";
import { emailValidator } from "../utils/emailValidator";
import { passwordValidator } from "../utils/passwordValidator";
import { getLogin, saveLogin, saveUser } from "../utils/storage";
import { signUpUser } from "../api/api";

registerTranslation("en-GB", enGB);

export default function Register({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [surname, setSurname] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [birth, setInputDate] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState();

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const surnameError = surnameValidator(surname.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError || surnameError) {
      setName({ ...name, error: nameError });
      setSurname({ ...surname, error: surnameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);
    const response = await signUpUser({
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
    });
    setLoading(false);
    if (!response.error && response.data.result) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } else {
      Alert.alert(
        "Register",
        response.data.message ?? "Failed register a user."
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Header>User Register</Header>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Surname"
          returnKeyType="next"
          value={surname.value}
          onChangeText={(text) => setSurname({ value: text, error: "" })}
          error={!!surname.error}
          errorText={surname.error}
        />

        {/* <DatePickerInput
          locale="en-GB"
          label="Birth"
          value={birth.value}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
          autoComplete="birth"
          mode="outlined"
        /> */}

        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          loading={loading}
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Register
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
