import { Text, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { style } from "./style";
import { theme } from "../../style/theme";
import { registerSchema } from "../../global/yup-schemas";

interface Props {
  navigation: {
    navigate: (value: string) => void
  }
}

export default function Register({ navigation }: Props){
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  });
  

  const onChange = (data: any) => {
    console.log(data);

    navigation.navigate("login")
  }

  return (
    <LinearGradient 
      colors={theme.colors.linearGradient} 
      style={style.container}
    >
      <View style={style.content}>
        <Text style={style.title}>
          Cadastro
        </Text>
        <Controller
          control={control} 
          render={({ field: { onChange, value } }) => 
            <Input 
              label="Nome"
              error={errors.firstName?.message}
              value={value} 
              placeholder="Jhon"
              onChangeText={onChange}
            />
          }
          name="firstName"
        />
        <Controller
          control={control} 
          render={({ field: { onChange, value } }) => 
            <Input 
              value={value} 
              error={errors.lastName?.message}
              label="Sobrenome"
              placeholder="Doe"
              onChangeText={onChange}
            />
          }
          name="lastName"
        />
        <Controller
          control={control} 
          render={({ field: { onChange, value } }) => 
            <Input 
              label="E-mail"
              value={value} 
              error={errors.email?.message}
              placeholder="jhondoe@email.com"
              onChangeText={onChange}
            />
          }
          name="email"
        />
        <Controller
          control={control} 
          render={({ field: { onChange, value } }) => 
            <Input 
              label="Senha"
              value={value} 
              error={errors.password?.message}
              secureTextEntry
              placeholder="********"
              onChangeText={onChange}
            />
          }
          name="password"
        />
        <Controller
          control={control} 
          render={({ field: { onChange, value } }) => 
            <Input 
              label="Repetir senha"
              error={errors.repeatPassword?.message}
              value={value} 
              secureTextEntry
              placeholder="********"
              onChangeText={onChange}
            />
          }
          name="repeatPassword"
        />
        <Button title="Cadastrar" onPress={handleSubmit(onChange)}/>
      </View>
    </LinearGradient>
  );
}