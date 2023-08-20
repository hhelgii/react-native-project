import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { RegistrationScreen } from './src/screens/RegistrationScreen';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! Hello</Text> */}
      <StatusBar style="auto" />
      <RegistrationScreen></RegistrationScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

});
