import { View, Text, Image, StyleSheet } from "react-native";
export const MyComment = ({ avatarPath, text, date }) => {
  return (
    <View style={styles.commentItem}>
      <View style={styles.commentWrap}>
        <Text style={styles.comment}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.imgWrap}>
        <Image source={avatarPath} style={styles.avatar}></Image>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  commentItem: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom:32
  },
  imgWrap: {
    width: 28,
    height: 28,
    overflow: "hidden",
    borderRadius: 14,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  commentWrap: {
    backgroundColor: "rgba(0,0,0,0.03)",
    padding: 16,
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
    flex:1,
  },
  comment: {
    fontSize: 13,
    lineHeight:18
    
  },
  date: {
    fontSize: 10,
    alignSelf: "flex-start",
    color: "rgb(219,219,219)",
    marginTop: 5,
  },
});
