import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

import { colors } from "../../styles/styles";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// AUTH SCREENS
import Login from "../screens/log/login/Login";
import Sign from "../screens/log/signin/Signin";

const AuthStack = createStackNavigator();

export default function LoginScreen() {
  return (
    <View style={styles.loginScreenContainer}>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Signin" component={Sign} />
      </AuthStack.Navigator>
      <StatusBar
        backgroundColor={colors.mainBackgroundColor}
        barStyle="dark-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
});
