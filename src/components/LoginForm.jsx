import React from "react";
import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
export const LoginForm = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };
  const onLogin = () => {
    if (!isEmailValid(email)) {
      Alert.alert("Некоректна електронна пошта");
      // console.log("Некоректна електронна пошта");
      return;
    }

    if (!isPasswordValid(password)) {
      Alert.alert("Пароль має бути мінімум 6 символів");
      // console.log("Пароль має бути мінімум 6 символів");
      return;
    }
    console.log(` Email: ${email} Password: ${password}`);
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Адреса електронної пошти"
        style={[styles.input, activeInput === "email" && styles.activeInput]}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setActiveInput("email")}
        onBlur={() => setActiveInput(null)}
      />
      <View
        style={[
          styles.passwordInputContainer,
          activeInput === "password" && styles.activeInput,
        ]}
        onFocus={() => setActiveInput("password")}
        onBlur={() => setActiveInput(null)}
      >
        <TextInput
          placeholder="Пароль"
          style={[styles.passwordInput, { paddingRight: 50 }]}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.showHideButton}
          onPress={toggleShowPassword}
        >
          <Text style={styles.showHideButtonText}>
            {showPassword ? "Приховати" : "Показати"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={styles.btnText}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registrationLinkText}>
          Немає акаунту?{" "}
          <Text style={styles.underlinedText}>Зареєструватися</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 50,
    backgroundColor: "rgb(250, 250, 250)",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  activeInput: {
    backgroundColor: "white",
    borderColor: "rgb(255, 108, 0)",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "lightgray",
    backgroundColor: "rgb(250, 250, 250)",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingLeft: 15,
    fontSize: 16,
  },
  showHideButton: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  showHideButtonText: {
    color: "rgb(27, 67, 113)",
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: "rgb(255, 108, 0)",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  registrationLinkText: {
    color: "rgb(27, 67, 113)",
    textAlign: "center",
    fontSize: 16,
  },
  underlinedText: {
    textDecorationLine: "underline",
  },
});
