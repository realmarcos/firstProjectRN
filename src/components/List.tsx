import { Text, View } from "react-native";

interface datasValues {
  name: string;
  age: number;
}

const List = (datas: datasValues[]) => {
  const listView = () => {
    datas.map((data) => {
      <View>
        <Text>Name: {data.name}</Text>
        <Text>Age: {data.age}</Text>
      </View>
    })
  }
  return listView;
};
export default List;