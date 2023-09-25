import { Text, View, StyleSheet } from 'react-native';
import CardTitle from './CardTitle'

export default function Card({ children, title='', settings=false, }) {

  return (
    <View style={styles.container}>
      <CardTitle title={title} settings={settings} /> 
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 16,
    padding: 18,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(30, 35, 48, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 4, // This is for Android elevation
  }
})