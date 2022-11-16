import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    width: "100%"
  },
  input: {
    width: "100%",
    height: 48,
    padding: theme.sizes.sm,
    marginBottom: theme.sizes.md,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.border,

    borderRadius: 4,

    color: theme.colors.text
  },
  label: {
    color: theme.colors.text,
    fontSize: theme.fontsSize.md,
    marginBottom: theme.sizes.sm,
  },
  error: {
    color: theme.colors.danger,
    marginBottom: theme.sizes.md
  }
});