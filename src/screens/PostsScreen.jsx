import { View, StyleSheet, ScrollView } from "react-native";
import { UserPostsInfo } from "../components/userPostsInfo";
import { PostItem } from "../components/postItem";

export const PostsScreen = () => {
  return (
    <ScrollView style={styles.postsScreenContainer}>
      <UserPostsInfo
        name={"Natali Romanova"}
        email={"email@exampe.com"}
        avatarPath={require("../assets/user.jpg")}
      ></UserPostsInfo>
      <View style={styles.postItemsContainer}>
        <PostItem
          commentsAmount={"0"}
          location={"Ivano-Frankivs'k Region, Ukraine"}
          postTitle={"Ліс"}
          imgPath={require("../assets/postImg1.jpg")}
        ></PostItem>
        <PostItem
          commentsAmount={"3"}
          location={"Ivano-Frankivs'k Region, Ukraine"}
          postTitle={"Захід сонця"}
          imgPath={require("../assets/postImg2.jpg")}
        ></PostItem>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  postsScreenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
  },
  postItemsContainer: {
    paddingBottom: 50, 
  },
});
