import { Text, View, StyleSheet } from 'react-native';

export default function CardTitle({ title, settings }) {
  return (
    <>
      {title ? <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        {settings ? <Text>Settings</Text> : null}       
      </View> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  text: {
    flex: 1, 
    fontSize: 14,
    fontWeight: 600
  }
})