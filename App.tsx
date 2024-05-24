import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Eventos from './src/screen/Eventos';

export default function App() {
  return (
    <View style={styles.container}>
      <Eventos></Eventos>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
