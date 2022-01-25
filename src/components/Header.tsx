import { StyleSheet, Text, View } from 'react-native';

const Header = (props: any) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(59,108,212)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
    marginTop: 25 
  },
  title: {
    fontSize: 24
  }
});

export default Header;
