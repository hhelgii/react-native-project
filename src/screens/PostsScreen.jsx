import { View, StyleSheet } from "react-native";
import { UserPostsInfo } from "../components/userPostsInfo";



export const PostsScreen = () => {
  return (
    <View style={styles.postsScreenContainer}>
      <UserPostsInfo
        name={"Natali Romanova"}
        email={"email@exampe.com"}
      ></UserPostsInfo>
      
    </View>
  );
};
const styles = StyleSheet.create({
  postsScreenContainer: {
    flex:1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor:'white'
  },
});
