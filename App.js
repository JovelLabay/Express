// REACT
import React, { useEffect, useState } from "react";

// NAVIGATION WRAPPER
import { NavigationContainer } from "@react-navigation/native";

// LOCAL FUNCTIONS
import { chageNavigationBar } from "./functions/navigationBar";

// AUTHENTICATION COMPONENT
import AuthScreen from "./src/layouts/AuthScreen";

export default function App() {
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
