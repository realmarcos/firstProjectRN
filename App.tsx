import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Hello from './src/helloWorld';
import Header from './src/components/Header';
import List from './src/components/List';

const peoples = [
  { name: 'Marcos', age: 22 },
  { name: 'Thais', age: 17 }
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Peoples" />
      {peoples.forEach((data) => {
        <View>
          <Text>Name: {data.name}</Text>
          <Text>Age: {data.age}</Text>
        </View>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  }
});
