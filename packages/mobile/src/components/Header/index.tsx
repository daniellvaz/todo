import { Image, Text, TouchableOpacity, View } from "react-native";

import { useAuthentication } from "../../context/AuthContext";

import { style } from "./style";
import Logo from "../../../assets/logo.png";
import Avatar from "../Avatar";

export default function Header() {
  const { user } = useAuthentication();

  if(!user) {
    return (
      <View style={[style.container, { justifyContent: "center" }]}>
        <Image source={Logo}/>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>
        Olá, { user.firstName }
      </Text>
      <Avatar />
    </View>
  );
}