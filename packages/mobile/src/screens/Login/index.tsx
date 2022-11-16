import { Text,  View } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { style } from "./style";
import { theme } from "../../style/theme";

import { useAuthentication } from "../../context/AuthContext";
import { loginSchema } from "../../global/yup-schemas";

interface Data {
  email: string;
  password: string;
}

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<Data>({
    resolver: yupResolver(loginSchema)
  });

  const { signIn } = useAuthentication();

  return(
    <LinearGradient colors={theme.colors.linearGradient} style={style.container}>
      <Text style={style.heading}>
        LOGIN
      </Text>

      <Controller
        control={control} 
        render={({ field: { onChange, value } }) => 
          <Input 
            label="E-mail"
            textContentType="emailAddress"
            error={errors.email?.message}
            value={value} 
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
            value={value} 
            error={errors.password?.message}
            label="Senha"
            placeholder="******"
            secureTextEntry={true}
            onChangeText={onChange}
          />
        }
        name="password"
      />

      <View style={style.link}>
        <Text style={style.linkText}>
          Ainda não é cadastrado?
          <Link to="/register" style={style.linkAnchor}>
            Clique aqui
          </Link>
        </Text>
        <Text style={style.linkText}>
          Perdeu a sua senha?
          <Link to="/recovery" style={style.linkAnchor}>
            Clique aqui
          </Link>
        </Text>
      </View>

      <Button title="Entrar" onPress={handleSubmit(signIn)}/>
    </LinearGradient>
  );
}