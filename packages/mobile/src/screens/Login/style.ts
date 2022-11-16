import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.sizes.md,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: theme.fontsSize.xlg,
    fontWeight: "700",
    marginBottom: theme.sizes.md,

    color: theme.colors.text
  },
  link: {
    width: "100%", 
    paddingVertical: 16 
  },
  linkText: {
    color: theme.colors.text, 
    textAlign: "left" 
  },
  linkAnchor: {
    color: theme.colors.primary  
  }
})