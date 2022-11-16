import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

export default function UnauthenticatedRoute() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false
      }}
    >
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="register" component={Register}/>
    </Stack.Navigator>
  );
}