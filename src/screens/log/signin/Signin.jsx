import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./signin";
import Logo from "../../../components/logo/Logo";
import { AuthFormSignin } from "../../../components/authForm/AuthForm";

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <AuthFormSignin navigation={navigation} />
    </View>
  );
}
