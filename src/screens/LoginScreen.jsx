import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LoginForm } from "../components/LoginForm";
const backgroundImagePath = require("../assets/background.png");
export const LoginScreen = () => {
  return (
    <ImageBackground
      source={backgroundImagePath}
      style={styles.loginScreenContainer}
    >
      <View style={styles.formWrap}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Увійти</Text>
        </View>
        <LoginForm></LoginForm>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  formWrap: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 180,
    paddingTop: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    position: "relative",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
