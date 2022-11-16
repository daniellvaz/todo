import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    padding: theme.sizes.lg,

    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.background,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.fontsSize.lg,
    fontWeight: "700",
    fontsSize: theme.fontsSize.lg
  },
  button: {
    backgroundColor: theme.colors.secondary,
    padding: theme.sizes.sm,
    borderRadius: theme.sizes.sm
  }
})