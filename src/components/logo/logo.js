import { StyleSheet } from "react-native";
import { fontSizes, colors } from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoName: {
    fontSize: fontSizes.logoTitle,
    color: colors.brandColor,
    fontFamily: "ExtraBold",
  },
});

module.exports = { styles };
