import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { theme } from "../style/theme";

export default function AuthenticatedRoutes() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}