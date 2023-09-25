import { Text, StyleSheet, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import {colors} from '../style'
import Logo from '../components/Logo'

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>
        My Water Meter
      </Text>
      <Text style={styles.title}>
        Water Me
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 77
  },
  subTitle: {
    margin: 5,
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: 'normal'
  },
  title: {
    margin: 5,
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: 'normal', 
    marginBottom: 84
  },
});
