import react from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
export const ProfilePostItem = ({
  postTitle,
  location,
  commentsAmount,
  likesAmount,
  imgPath,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.postWrap}>
      <View style={styles.imgWrap}>
        <Image source={imgPath} style={styles.postImg}></Image>
      </View>
      <View style={styles.postInfo}>
        <Text style={styles.postTitle}>{postTitle}</Text>
        <View style={styles.actionsWrap}>
          <View style={{display:'flex', flexDirection:'row'}}>
            <TouchableOpacity
              style={styles.action}
              onPress={() => navigation.navigate("Comments")}
            >
              <FontAwesome name="comment" size={22} color="rgb(255,108,0)" />
              <Text style={styles.commentsLikes}>{commentsAmount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.action,{marginLeft:20}]}>
              <AntDesign name="like2" size={22} color="rgb(255,108,0)" />
              <Text style={styles.commentsLikes}>{likesAmount}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.action}
              onPress={() => navigation.navigate("Map")}
            >
              <Ionicons
                name="location-outline"
                size={24}
                color="rgb(219, 219, 219)"
              />
              <Text style={styles.location}>{location}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postWrap: {
    marginTop: 32,
    width: "100%",
  },

  imgWrap: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    marginBottom: 10,
    aspectRatio: 1.43,
  },
  postImg: {
    width: "100%",
    height: "100%",
  },

  postTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  actionsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  action: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  commentsLikes: {
    flexDirection: "row",
    color: "black",
    fontSize: 16,
    marginLeft: 8,
  },
  location: {
    flexDirection: "row",
    textDecorationLine: "underline",
    fontSize: 16,
    marginLeft: 5,
  },
});
