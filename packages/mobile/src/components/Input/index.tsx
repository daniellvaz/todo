import { Text, TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../style/theme";
import { style } from "./style";

type Props = TextInputProps & {
  label?: string;
  error?: string
}

export default function Input({ label, error, ...rest }: Props) {
  return (
    <View style={style.container}>
      { 
        label && <Text style={style.label}>{label}</Text>
      }
      <TextInput 
        style={[
          style.input, 
          { 
            borderColor: error ? theme.colors.danger : theme.colors.border 
          }
        ]} 
        placeholderTextColor={theme.colors.border}
        {...rest}
      />
      { error && <Text style={style.error}>{error}</Text> }
    </View>
  );
}