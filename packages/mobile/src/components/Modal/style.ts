import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: theme.sizes.md,
    backgroundColor: theme.colors.background,

    alignItems: "center",
  }
})