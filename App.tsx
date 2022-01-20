import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Meu primeiro app!</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Olá eu sou uma aplicativo!</Text>
      </View>
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
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#008000',
    padding: 20,
    // width: '100%',
    margin: 25,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  title:{
    fontSize: 26, 
  }
});
