import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
export const CreatePostsScreen = () => {
  return (
    <View style={styles.createPostScreenContainer}>
      <View>
        <View style={styles.imgWrap}>
          <Image></Image>
          <View style={styles.cameraWrap}>
            <FontAwesome name="camera" size={24} color="rgb(219,219,219)" />
          </View>
        </View>
        <Text style={styles.loadImgText}>Завантажте фото</Text>
        <View style={styles.form}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Назва..."
              placeholderTextColor="rgb(219, 219, 219)"
              style={styles.input}
            ></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <Ionicons
              name="location-outline"
              size={24}
              color="rgb(219, 219, 219)"
              style={{ position: "absolute", bottom: 10 }}
            />
            <TextInput
              placeholder="Місцевість"
              placeholderTextColor="rgb(219, 219, 219)"
              style={[styles.input, { paddingLeft: 30 }]}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.publishBtn}>
            <Text style={styles.btnText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteBtn}>
        <Feather name="trash-2" size={24} color="rgb(219, 219, 219)" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  createPostScreenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:32
  },
  imgWrap: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    marginBottom: 10,
    aspectRatio: 1.43,
    backgroundColor: "rgb(246, 246, 246)",
    borderColor: "rgb(232, 232, 232)",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.5)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  loadImgText: {
    color: "rgb(219,219,219)",
    fontSize: 16,
  },
  form: {
    marginTop: 40,
  },
  textInputContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(219, 219, 219)",
    height: 60,
    justifyContent: "flex-end",
    position: "relative",
  },
  input: {
    color: "black",
    paddingVertical: 10,
    fontSize: 16,
  },
  publishBtn: {
    backgroundColor: "rgb(246, 246, 246)",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    // marginBottom: 15,
  },
  btnText: {
    color: "rgb(219,219,219)",
    fontSize: 16,
  },
  deleteBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgb(246, 246, 246)",
    alignItems: "center",
    justifyContent: "center",
  },
});
