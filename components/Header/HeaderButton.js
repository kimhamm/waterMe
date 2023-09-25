import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function HeaderButton({navigation}) {
  const handleButtonPress = () => {
    navigation.navigate('Settings')

    console.log('HeaderButton clicked: Settings로 이동 + Post 요청')
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleButtonPress}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 3,
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
  }
})