import { View, Text, Button } from "react-native";
import React from "react";

export default function Signin({ navigation }) {
  return (
    <View>
      <Text>Signin</Text>

      <Button title="sdf" onPress={() => navigation.goBack()} />
    </View>
  );
}
