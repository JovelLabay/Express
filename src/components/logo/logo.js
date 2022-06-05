import { StyleSheet } from "react-native";
import { fontSizes, colors, fontWeights } from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoName: {
    fontSize: fontSizes.logoTitle,
    color: colors.brandColor,
    fontWeight: fontWeights.extraBold,
  },
});

module.exports = { styles };
