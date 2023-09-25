import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from '../style'

export default function TheButton({title, handleButtonPress, isDisabled}) {
  
  return (
    <TouchableOpacity
      onPress={handleButtonPress}
      disabled={isDisabled} // disabled에 따라 조건부 색상 적용하기
      style={styles.container}
    >
      <View style={isDisabled ? styles.disabledButton: styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 48,
    overflow: 'hidden',
  },
  button: {
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  disabledButton: {
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray_3,
  },
  text: {
    color: '#FFFFFF'
  }
})