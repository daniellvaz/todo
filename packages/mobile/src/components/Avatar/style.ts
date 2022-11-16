import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 60,

    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    width: 55,
    height: 55,
  
    backgroundColor: theme.colors.background,
    borderRadius: 55,

    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }
})