import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./src/screens/login";
import { Profile } from "./src/screens/profile";

export default function App() {
const Stack = createNativeStackNavigator();
  
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="login" component={Login} />
<Stack.Screen name="profile" component={Profile} />
</Stack.Navigator>
</NavigationContainer>
);
}
