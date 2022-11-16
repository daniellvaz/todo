import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1
  },
  content: {
    flexDirection: "row"
  },
  text: {
    marginLeft: 16,
    color: theme.colors.text,
    fontSize: theme.fontsSize.md,
  },
  checkbox: {
    borderColor: theme.colors.primary
  }
});