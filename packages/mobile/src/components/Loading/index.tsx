import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/theme";

export default function Loading() {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Loading
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: 400,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: theme.colors.secondary,
    fontSize: theme.fontsSize.lg,
    fontWeight: "700",
    textAlign: "center"
  }
})