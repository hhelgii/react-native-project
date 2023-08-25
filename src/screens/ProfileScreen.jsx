import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ProfilePostItem } from "../components/profilePostItem";
const backgroundImagePath = require("../assets/background.png");
export const ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.profileScreenContainer}
      source={backgroundImagePath}
      resizeMethod="resize"
    >
      <ScrollView>
        <View style={styles.profileWrap}>
          <View style={styles.avatarWrap}>
            <Image
              source={require("../assets/profile.jpg")}
              style={styles.avatar}
            ></Image>
            <TouchableOpacity style={styles.deletePhoto}>
              <Feather name="x" size={20} color="rgb(219,219,219)" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Natali Romanova</Text>
          <View>
            <ProfilePostItem
              postTitle={"Ліс"}
              likesAmount={"153"}
              commentsAmount={"8"}
              imgPath={require("../assets/postImg1.jpg")}
              location={"Ukraine"}
            />

            <ProfilePostItem
              postTitle={"Захід на Чорному морі"}
              likesAmount={"200"}
              commentsAmount={"3"}
              imgPath={require("../assets/postImg2.jpg")}
              location={"Ukraine"}
            />

            <ProfilePostItem
              postTitle={"Старий будиночок у Венеції"}
              likesAmount={"200"}
              commentsAmount={"50"}
              imgPath={require("../assets/postImg3.jpg")}
              location={"Italy"}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  profileWrap: {
    width: "100%",
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingTop: 100,
    paddingBottom:20,
    position: "relative",

    marginTop: 170,
    overflow: "visible",
    alignItems: "center",
  },
  avatarWrap: {
    width: 120,
    height: 120,
    borderRadius: 16,
    // overflow:'hidden',
    position: "absolute",
    zIndex: 2,
    top: -60,
    alignSelf: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  deletePhoto: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "rgb(246, 246, 246)",
    position: "absolute",
    bottom: 20,
    right: -12,
    alignItems: "center",
    justifyContent: "center",

    zIndex: 3,
  },
  name: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
  },
});
