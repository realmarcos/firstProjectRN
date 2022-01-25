import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import { List } from './src/components/List';

const peoples = [
  { name: 'Marcos', age: 22 },
  { name: 'Thais', age: 17 }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'></StatusBar>
      <Header title="Peoples" />
      {
        List(peoples)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontFamily: 'Roboto'
  }
});
