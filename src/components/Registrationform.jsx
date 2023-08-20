import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export const RegistrationForm = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput placeholder="Логін" style={styles.input} />
      <TextInput placeholder="Адреса електронної пошти" style={styles.input} />
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder="Пароль"
          style={[styles.passwordInput, { paddingRight: 50 }]}
        />
        <TouchableOpacity style={styles.showHideButton}>
          <Text style={styles.showHideButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.registrationBtn}>
        <Text style={styles.btnText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginLink}>
        <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
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
  registrationBtn: {
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
  loginLinkText: {
    color: "rgb(27, 67, 113)",
    textAlign: "center",
    fontSize: 16,
  },
});

// import React from "react";
// import { TextInput, View, TouchableOpacity, Text } from "react-native";
// import styled from "styled-components/native";

// const FormContainer = styled.View`
//   padding: 20px;
// `;

// const Input = styled.TextInput`
//   width: 343px;
//   height: 50px;
//   background-color: rgb(250, 250, 250);
//   border-color: lightgray;
//   border-width: 1px;
//   border-radius: 5px;
//   padding-left: 15px;
//   margin-bottom: 15px;
//   &:focus {
//     background-color: white;
//     border-color:rgb(255, 108, 0) ;
//   }
// `;

// const PasswordInputContainer = styled.View`
//   flex-direction: row;
//   align-items: center;
//   border-color: lightgray;
//   background-color: rgb(250, 250, 250);
//   border-width: 1px;
//   border-radius: 5px;
//   margin-bottom: 15px;
// `;

// const PasswordInput = styled.TextInput`
//   flex: 1;
//   height: 50px;
//   padding-left: 15px;
// `;

// const ShowHideButton = styled.TouchableOpacity`
//   position: absolute;
//   right: 10px;
//   padding: 10px;
// `;

// const ShowHideButtonText = styled.Text`
//   color: darkblue;
// `;

// const RegistrationButton = styled.TouchableOpacity`
//   width: 343px;
//   background-color: rgb(255, 108, 0);
//   height: 51px;
//   border-radius: 25px;
//   justify-content: center;
//   align-items: center;
// `;

// const ButtonText = styled.Text`
//   color: white;
//   font-size: 16px;
// `;

// export const RegistrationForm = () => {
//   return (
//     <FormContainer>
//       <Input placeholder="Логін" />
//       <Input placeholder="Адреса електронної пошти" />
//       <PasswordInputContainer>
//         <PasswordInput placeholder="Пароль" />
//         <ShowHideButton>
//           <ShowHideButtonText>Показати</ShowHideButtonText>
//         </ShowHideButton>
//       </PasswordInputContainer>
//       <RegistrationButton>
//         <ButtonText>Зареєструватися</ButtonText>
//       </RegistrationButton>
//     </FormContainer>
//   );
// };
