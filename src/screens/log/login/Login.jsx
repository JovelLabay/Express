import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./login";
import Logo from "../../../components/logo/Logo";

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
