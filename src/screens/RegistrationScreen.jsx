import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { RegistrationForm } from "../components/Registrationform";
import { AntDesign } from "@expo/vector-icons"; 

const backgroundImagePath = require("../assets/background.png");
export const RegistrationScreen = () => {
  
  return (
    <ImageBackground
      source={backgroundImagePath}
      style={styles.registrationScreenContainer}
      resizeMethod="resize"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
         style={{flex: 1, justifyContent: 'flex-end'}} 
          behavior={"padding"}
          keyboardVerticalOffset={-200}

        >
          <View style={styles.formWrap}>
            <View style={styles.userImagePlaceholder}>
              <TouchableOpacity style={styles.addPhotoButton}>
                <AntDesign name="plus" size={15} color="rgb(255, 108, 0)" />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Реєстрація</Text>
            </View>
            <RegistrationForm />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  registrationScreenContainer: {
    flex: 1,
    justifyContent: "flex-end",

    resizeMode: "cover",
  },
  formWrap: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingVertical: 80,
    position: "relative",
  },
  userImagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: "rgb(250, 250, 250)",
    borderRadius: 16,
    position: "absolute",
    alignSelf: "center",
    top: -60,
  },
  addPhotoButton: {
    borderWidth: 1,
    borderColor: "rgb(255, 108, 0)",
    backgroundColor: "white",
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    left: 107,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
