import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { RegistrationForm } from "../components/Registrationform";
import { AntDesign } from "@expo/vector-icons";
const backgroundImagePath = require("../assets/background.png");
export const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={backgroundImagePath}
      style={styles.registrationScreenContainer}
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
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  registrationScreenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  formWrap: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,

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
  addPhotoButton:{
    borderWidth:1,
    borderColor:"rgb(255, 108, 0)",
    width:25,
    height:25,
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:15,
    left:107,
    

  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
