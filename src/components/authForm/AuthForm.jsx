import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../../../styles/styles";
import { styles } from "./authForm";
import LineSeparator from "../lineSeparator/LineSeparator";
import { AntDesign } from "@expo/vector-icons";
// FOR THE LOGIN COMPONENT
function AuthFormLogin(props) {
  return (
    <ScrollView style={styles.container}>
      {/* LOGIN TITLE */}
      <Text style={styles.authTitle}>Login to your Account</Text>
      {/* FORM */}
      <TextInput style={styles.authInput} placeholder="Email Address" />
      <View style={styles.authInput}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.authInputPass}
        />
        <TouchableOpacity>
          <AntDesign name="eyeo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* FORGOT PASSWORD */}
      <TouchableOpacity>
        <Text style={styles.authForgotPass}>Forgot Password?</Text>
      </TouchableOpacity>
      {/* LOGIN BUTTON */}
      <View style={styles.formSeparator}>
        <Button title="Log In" color={colors.brandColor} />
      </View>
      {/* CLICK TO CREATE NEW ACCOUNT */}
      <LineSeparator />
      <View style={styles.createAccount}>
        <Text>{"Don't have an account? "}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signin")}>
          <Text style={styles.authAignUp}>Sign Up.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// FOR THE SIGNIN COMPONENT
export function AuthFormSignin(props) {
  return (
    <ScrollView style={styles.container}>
      {/* LOGIN TITLE */}
      <Text style={styles.authTitle}>Create your Account</Text>
      {/* FORM */}
      <TextInput style={styles.authInput} placeholder="Email Address" />
      <View style={styles.authInput}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.authInputPass}
        />
        <TouchableOpacity>
          <AntDesign name="eyeo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.authInput}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.authInputPass}
        />
        <TouchableOpacity>
          <AntDesign name="eyeo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* LOGIN BUTTON */}
      <View style={styles.formSeparator2}>
        <Button title="Sign Up" color={colors.brandColor} />
      </View>
      <Text style={styles.aggreedtext}>
        *Once you create your account that means you aggreed to the Terms and
        Condition of this Software.
      </Text>
    </ScrollView>
  );
}

module.exports = { AuthFormLogin, AuthFormSignin };
