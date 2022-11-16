import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.sizes.md,

    backgroundColor: theme.colors.primary,
    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: theme.colors.background,
    fontSize: theme.fontsSize.md,
    fontWeight: "700"
  }
})