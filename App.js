import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Home } from "./src/screens/Home";
import { MapScreen } from "./src/screens/MapScreen";
import { CommentsScreen } from "./src/screens/CommentsScreen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MainStack = createStackNavigator();
export default function App() {
  // const navigation=useNavigation()
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
          options={{
            // headerLeft: () => (
            //   <TouchableOpacity
            //     style={{ marginLeft: 16 }}
            //     onPress={() => navigation.navigate("Posts")}
            //   >
            //     <AntDesign name="arrowleft" size={24} color="black" />
            //   </TouchableOpacity>
            // ),
            title: "Коментарі",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerBackImage: () => <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:16}} />,

          }}
        />
        <MainStack.Screen name="Map" component={MapScreen} />
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
