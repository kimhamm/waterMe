import {View, StyleSheet, Image} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.svg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 175,
    width: 175,
    marginVertical: 56 
  }
});
