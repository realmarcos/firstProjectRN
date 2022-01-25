import { StyleSheet, Text, View } from "react-native";

interface datasValues {
  name: string;
  age: number;
}

const List = (datas: datasValues[]) => {
  const list = datas.map((data, index) => {
    return (
      <View style={style.container} key={index}>
        <Text key={data.name+index}>Name: {data.name}</Text>
        <Text key={data.age+index}>Age: {data.age}</Text>
      </View>
    );
  });
  return list;
};

const style = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#b4ceff',
    padding: 20,
    fontSize: 26
  }
});
export { List };