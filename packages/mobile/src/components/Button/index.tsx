import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={style.container}>
      <Text style={style.text}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}