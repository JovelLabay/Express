import { StyleSheet } from "react-native";
import {
  colors,
  fontSizes,
  fontWeights,
  borderWidths,
} from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  authTitle: {
    fontSize: fontSizes.big,
    color: colors.fontColor,
    fontWeight: fontWeights.bold,
    marginVertical: 8,
  },
  authInput: {
    backgroundColor: colors.reduceWhite,
    borderWidth: borderWidths.thick,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 6,
    borderRadius: 5,
    color: colors.fontColor,
    fontSize: fontSizes.small,
    flexDirection: "row",
    alignItems: "center",
  },
  authInputPass: {
    width: "94%",
  },
  authForgotPass: {
    fontSize: fontSizes.regular,
    textAlign: "right",
    color: colors.brandColor,
    marginVertical: 12,
  },
  formSeparator: {
    marginVertical: 10,
  },
  formSeparator2: {
    marginVertical: 20,
  },
  createAccount: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
  authAignUp: {
    fontSize: fontSizes.regular,
    color: colors.brandColor,
  },
  aggreedtext: {
    fontSize: fontSizes.regular,
    color: colors.brandColor,
    textAlign: "center",
    marginVertical: 25,
  },
});

module.exports = { styles };
