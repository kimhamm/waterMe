import {useState} from 'react'
import {StyleSheet,View} from 'react-native';
import {colors, layout} from '../style'
import Button from '../components/Button'
import Description from '../components/Description'
import Header from '../components/Header/Header'
import InputToggle from '../components/InputToggle'


export function UnitsInput({ units, setUnits }) {
  return (<>
    <InputToggle prop={{ key: "length", value: ['cm', 'ft'], setUnits, units } } />
    <InputToggle prop={{ key: "weight", value: ['kg', 'lb'], setUnits, units } } />
    <InputToggle prop={{ key: "volume", value: ['ml', 'oz'], setUnits, units } } />
  </>)
}

// SetUnits 페이지는 2군데서 사용되므로 조건부 처리하기
export default function SetUnits(props) {
  const {units, setUnits, navigation} = props

  const handleButtonPress = () => {
    navigation.navigate('SetProfile');
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} elements={{
        isNav: true, title: 'Unit Settings', isButton: false
      }} />
      <Description text={"Select familiar units to use in the app."} />
      <UnitsInput units={units} setUnits={setUnits} />      
      <View style={styles.buttonContainer}>
        <Button title="Next" handleButtonPress={handleButtonPress} />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: layout,
  buttonContainer: {
    flex: 1, 
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
