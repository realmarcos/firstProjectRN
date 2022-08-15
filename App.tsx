import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { List } from './src/components/List';

const peoples = [
  { name: 'Marcos', age: 22 },
  { name: 'Thais', age: 17 }
];

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={
      {
        "alignItems": "flex-start",
        "paddingStart": 26,
        "paddingTop": 31,
        "flex": 1
      }
    } >
      {/* <StatusBar style='dark'></StatusBar> */}
      {/* <Header title="Peoples" /> */}
      <View style={
        {
          "flexDirection": "row",
          "alignItems": "flex-start",
          "marginStart": 12,
          "marginTop": 395
        }
      } >
        <Text style={
          {
            "fontFamily": "Nunito Sans",
            "fontSize": 18,
            "color": "rgba(242, 131, 34, 255)"
          }
        } > Ainda não tem cadastro ? </Text>
        <Text style={
          {
            "fontFamily": "Nunito Sans",
            "fontWeight": "bold",
            "fontSize": 18,
            "textDecorationLine": "underline",
            "color": "rgba(242, 131, 34, 255)",
            "marginStart": 8
          }
        } > Cadastrar </Text>
      </View>
      {/* {
        List(peoples)
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    "alignItems": "flex-start",
    "paddingStart": 26,
    "paddingTop": 31,
    "flex": 1
  },
  btn: {
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "underline",
    color: "rgba(242, 131, 34, 255)",
    marginStart: 8
  }
});
