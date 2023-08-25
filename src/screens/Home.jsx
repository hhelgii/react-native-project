import { View, StyleSheet, Platform} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
const Tabs = createBottomTabNavigator();
export const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "Posts") {
            return (
              <View style={styles.icon}>
                  <Ionicons
                    name="ios-grid-outline"
                    size={24}
                    color={color}
                  ></Ionicons>
              </View>
            );
          } else if (route.name === "CreatePost") {
            return (
              <View style={[styles.tabIconContainer,styles.icon]}>
                <AntDesign name="plus" size={24} color={"white"}></AntDesign>
              </View>
            );
          } else if (route.name === "Profile") {
            return <View style={styles.icon}><Feather name="user" size={24} color={color}></Feather></View>;
          }
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(255,108,0)",
        tabBarInactiveTintColor: "rgba(33,33,33,0.8)",
        tabBarStyle: {
           height: Platform.OS === "android" ? 80 : 100,
           borderBlockStartColor:'rgb(240, 240, 240)',
           borderTopWidth:1,
           
        },
        // tabBarItemStyle: {},
        // tabBarLabelStyle: {},
      })}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />

      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        // options={{ tabBarStyle: { display: 'none' } }}
      ></Tabs.Screen>
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
const styles = StyleSheet.create({
   
  tabIconContainer: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 108, 0)",
    borderRadius: 20,
  },
});
