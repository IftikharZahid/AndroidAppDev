import { View, TouchableOpacity, Text } from "react-native";

function Profile({ navigation }) {
  const onPressed = () => {
    navigation.navigate("login");
  };

  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>
      <TouchableOpacity onPress={onPressed}>
        <Text style={{ fontSize: 22, color: "white", alignSelf: "center" }}>
          Go to Login Page{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export { Profile };
