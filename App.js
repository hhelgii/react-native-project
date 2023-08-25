import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Home } from "./src/screens/Home";
import { MapScreen } from "./src/screens/MapScreen";
import { CommentsScreen } from "./src/screens/CommentsScreen";
const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    // justifyContent: 'flex-end',
    // paddingBottom:100
  },
});
