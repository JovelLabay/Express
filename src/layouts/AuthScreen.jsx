import React, { useState, useEffect } from "react";

import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import HomeScreen from "../layouts/HomeScreen";
import LoginScreen from "../layouts/LoginScreen";

import { prolongSplash, showScreen } from "./../../functions/splashScreen";

export default function AuthScreen() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function authInitializing(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, authInitializing);
    return subscriber;
  }, []);

  // SPLASH SCREEN CALLED METHODS
  if (initializing) {
    prolongSplash();
  } else {
    showScreen();
  }

  // GO TO LOGIN SCREEN IF USER IS NOT LOGGED IN
  if (!user) {
    return <LoginScreen />;
  }

  // RETURN TO HOMESCREEN IF USER IS LOGGED IN
  return <HomeScreen />;
}
