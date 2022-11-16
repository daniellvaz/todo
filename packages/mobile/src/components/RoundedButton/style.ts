import { StyleSheet } from "react-native";
import { theme } from "../../style/theme";


export const style = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    right: 32,
    bottom: 32,
    padding: 16,
    
    backgroundColor: theme.colors.primary,
    borderRadius: 999
  }
})