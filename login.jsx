import { View, TouchableOpacity, Text, Button } from "react-native";

function Login({ navigation }) {
const onGoPressed = () => {
navigation.navigate("profile");
};

return (
<View style={{ backgroundColor: "gray", flex: 1 }}>
<TouchableOpacity onPress={onGoPressed}>
<Text style={{ fontSize: 22, color: "yellow", alignSelf: "center" }}>
Go to Profile Page
</Text>
</TouchableOpacity>
</View>
);
}

export { Login };
