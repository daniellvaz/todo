import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { style } from "./style";

import { theme } from "../../style/theme";


type ButtonProps = TouchableOpacityProps;

export default function RoudedButton({ ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <AntDesign 
        name="plus" 
        size={24} 
        color={theme.colors.background}
      />
    </TouchableOpacity>
  );
}