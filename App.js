// REACT
import React, { useEffect } from "react";

// NAVIGATION WRAPPER
import { NavigationContainer } from "@react-navigation/native";

// LOCAL FUNCTIONS
import { chageNavigationBar } from "./functions/navigationBar";

// AUTHENTICATION COMPONENT
import AuthScreen from "./src/layouts/AuthScreen";

// FONTS
import { useFonts } from "expo-font";

import { prolongSplash, showScreen } from "./functions/splashScreen";

export default function App() {
  // FONTS
  const [loaded] = useFonts({
    ExtraBold: require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!loaded) {
    prolongSplash();
  } else {
    showScreen();
  }

  // CHANGE NAVIVAGTION BAR
  useEffect(() => {
    chageNavigationBar();
  }, []);

  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
}
