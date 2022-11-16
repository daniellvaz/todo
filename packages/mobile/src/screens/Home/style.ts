import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",

    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: 16,

    flex: 1,
  },
  image: {
    marginVertical: 32
  }
})