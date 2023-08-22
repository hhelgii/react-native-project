import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RegistrationForm } from './src/components/Registrationform';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { LoginScreen } from './src/screens/LoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! Hello</Text> */}
      <StatusBar style="auto" />
      <RegistrationScreen></RegistrationScreen>
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <LoginScreen></LoginScreen> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // justifyContent: 'flex-end',
    // paddingBottom:100
    
  },

});
