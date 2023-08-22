import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { LoginForm } from "../components/LoginForm";
const backgroundImagePath = require("../assets/background.png");
export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={backgroundImagePath}
        style={styles.loginScreenContainer}
      >
        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={-300}
        >
          <View style={styles.formWrap}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Увійти</Text>
            </View>
            <LoginForm></LoginForm>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    justifyContent: "flex-end",
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
