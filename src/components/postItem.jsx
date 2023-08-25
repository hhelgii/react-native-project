import react from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
export const PostItem = ({ postTitle, location, commentsAmount, imgPath }) => {
  return (
    <View style={styles.postWrap}>
      <View style={styles.imgWrap}>
        <Image source={imgPath} style={styles.postImg}></Image>
      </View>
      <View style={styles.postInfo}>
        <Text style={styles.postTitle}>{postTitle}</Text>
        <View style={styles.actionsWrap}>
          <View style={styles.action}>
            <TouchableOpacity>
              <FontAwesome
                name="comment-o"
                size={22}
                color="rgb(219, 219, 219)"
              />
            </TouchableOpacity>
            <Text style={styles.comments}>{commentsAmount}</Text>
          </View>
          <View style={styles.action}>
            <TouchableOpacity>
              <Ionicons
                name="location-outline"
                size={24}
                color="rgb(219, 219, 219)"
              />
            </TouchableOpacity>
            <Text style={styles.location}>{location}</Text>
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
  },
  postImg: {
    width: "100%",
    resizeMode: "cover",
  },
  postInfo: {},
  postTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  actionsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:5
  },
  action: {
    flexDirection: "row",
    alignItems: 'baseline',
    
  },
  comments: {
    flexDirection: "row",
    color: "rgb(219, 219, 219)",
    fontSize: 16,
    marginLeft:5,
  },
  location: {
    flexDirection: "row",
    textDecorationLine: "underline",
    fontSize: 16,
    marginLeft:5,
  },
});
