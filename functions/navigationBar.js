// NAVIGATION BAR
import {
  NavigationBarVisibility,
  getBackgroundColorAsync,
  setBackgroundColorAsync,
  setVisibilityAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
import { colors } from "../styles/styles";

const chageNavigationBar = async () => {
  await setBackgroundColorAsync(colors.mainBackgroundColor);
  await setButtonStyleAsync("dark");
};

module.exports = { chageNavigationBar };
