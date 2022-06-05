import {
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { styles } from "./login";
import Logo from "../../../components/logo/Logo";
import { AuthFormLogin } from "../../../components/authForm/AuthForm";

export default function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo />
        <AuthFormLogin navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
}
