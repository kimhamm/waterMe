import {useState, useEffect} from 'react'
import {Image, View, StyleSheet, TextInput, Text} from 'react-native';
import {colors} from '../style'

export default function InputText({prop}) {
  const [text, setText] = useState('');

  const {key, value, units} = prop

  useEffect(() => {

  }, [text])

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ic_bar_Menu.svg')} style={styles.icon} />
      <TextInput
        inlineImageLeft="../assets/ic_bar_Menu.svg"
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={key}
        placeholderTextColor={colors.gray_3}
        keyboardType="text"
        textAlign={units ? "right" : 'left'} 
      />
      {units ? <Text style={styles.text}>{key === 'height' ? units['length'] : units[key]}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 5,
    height: 44,
    position: 'relative',
    backgroundColor: 'white',
  },
  icon: {
    position: 'absolute'
  },
  input: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    right: 0,
    paddingLeft: 30,
    paddingRight: 30
  },
  text: {
    position: 'absolute',
    right: 10,
    fontSize: 14,
  },

})