import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {colors} from '../style'

export default function InputToggle({prop}) {
  const {key, value, setUnits, units} = prop

  const handleToggleButton = (selectedValue) => {
    units[key] = selectedValue
    setUnits({...units})
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ic_bar_Menu.svg')} />
      <Text>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
      <View style={styles.toggle}>
        {value.map((li) => {
          return (<TouchableOpacity
            key={li}
            onPress={() => handleToggleButton(li)}
            style={[
              styles.tabs,
              {backgroundColor: units[key] === li ? colors.purple_3 : 'transparent'},
              {opacity: units[key] === li ? '1' : '0.3'},
            ]}
          >
            <Text style={[
              styles.activeTab,
              {color: units[key] === li ? 'white' : 'black'}
            ]}>{li}</Text>
          </TouchableOpacity>)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 44,
    position: 'relative',
    marginBottom: 12
  },
  toggle: {
    height: 40,
    borderRadius: 100, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    backgroundColor: 'white',
    width: '45%',
    position: 'absolute',
    right: 0
  },
  tabs: {
    height: '100%',
    flex: 1,
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    fontWeight: '400',
  },
});
