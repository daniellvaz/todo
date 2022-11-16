import { theme } from './../../style/theme';
import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.sizes.md
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.fontsSize.lg,
    fontWeight: "700",
    textAlign: "center"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})