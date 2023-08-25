import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { MyComment } from "../components/myCommentItem";
import { OtherComment } from "../components/othersCommentItem";
import { AntDesign } from "@expo/vector-icons";
export const CommentsScreen = () => {
  return (
    <View style={styles.commentsScreenContainer}>
      <View style={styles.imgWrap}>
        <Image
          source={require("../assets/postImg2.jpg")}
          style={styles.postImg}
        ></Image>
      </View>
      <ScrollView>
        <OtherComment
          text={
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
          }
          date={"09 червня, 2020 | 08:40"}
          avatarPath={require("../assets/user22.jpg")}
        ></OtherComment>
        <MyComment
          text={
            "A fast 50mm like f1.8 would help with the bokeh. I`ve been using primes as they tend to get a bit sharper images."
          }
          date={"09 червня, 2020 | 09:14"}
          avatarPath={require("../assets/user.jpg")}
        ></MyComment>
        <OtherComment
          text={"Thank you! That was very helpful!"}
          date={"09 червня, 2020 | 09:20"}
          avatarPath={require("../assets/user22.jpg")}
        ></OtherComment>
      </ScrollView>
      <View style={styles.inputWrap}>
        <TextInput
          placeholder="Коментувати..."
          placeholderTextColor="rgb(219, 219, 219)"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.sendBtn}>
          <AntDesign name="arrowup" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  commentsScreenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
  },
  imgWrap: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    marginBottom: 32,
    aspectRatio: 1.43,
  },
  postImg: {
    width: "100%",
    height: "100%",
  },
  inputWrap: {
    position: "absolute",
    bottom: 0,
    left: 16,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: "white",
    width: "100%",
  },
  input: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 44,
    backgroundColor: "rgb(246, 246, 246)",
    borderColor: "rgb(232, 232, 232)",
    height: 50,
    borderRadius: 25,
  },
  sendBtn: {
    backgroundColor: "rgb(255,108,0)",
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    position: "absolute",
    top: 28,
    right: 8,
  },
});
