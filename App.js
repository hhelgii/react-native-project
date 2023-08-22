import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RegistrationForm } from './src/components/Registrationform';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { LoginScreen } from './src/screens/LoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
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
