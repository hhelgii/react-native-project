import { View, StyleSheet, Text, Image } from "react-native";
export const UserPostsInfo = ({ name, email }) => {
  return (
    <View style={styles.userInfoWrap}>
      <View style={styles.userAvatar}>
        <Image
          source={require("../assets/user.jpg")}
          style={styles.avatarImage}
        />
      </View>
      <View style={styles.userTextInfo}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userInfoWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: "hidden",
  },
  avatarImage: {
    width: 60,
    height: 60,
  },
  userTextInfo: {
    fontSize: 11,
    lineHeight: 1.18,
  },
  userName: {
    fontWeight: "700",
  },
  userEmail: {
    
    color: "rgba(33, 33, 33, 0.8)",
  },
});
