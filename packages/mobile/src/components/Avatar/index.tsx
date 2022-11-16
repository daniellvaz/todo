import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import { theme } from "../../style/theme";
import { style } from "./style";

export default function Avatar() {
  return (
    <LinearGradient 
      colors={[theme.colors.primary, theme.colors.secondary]}
      style={style.container}
    >
      <View style={style.content}>
        <Image 
          style={style.image}
          source={{ uri: "https://github.com/daniellvaz.png" }} 
        />
      </View>
    </LinearGradient>
  );
}