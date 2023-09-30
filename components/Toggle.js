import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from '../style'

export default function Toggle({ text, bgColor, toggleIndex, setToggleIndex }) {

  return (
    <View style={[
      styles.container,
      {backgroundColor: bgColor ? '#ddd' : 'transparent'}
    ]}>
      {text?.map((li, idx) => (
        <TouchableOpacity
          key={li}
          onPress={() => setToggleIndex(idx)}
          style={[
            styles.tab,
            {backgroundColor: toggleIndex === idx && bgColor ? 'white' : 'transparent'},
            {opacity: toggleIndex === idx ? '1' : '0.3'}
          ]}
        >
          <Text style={toggleIndex === idx ? styles.activeTabText : styles.tabText}>{li}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 100, // Assuming you want a circular shape
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
  },
  tab: {
    height: '100%', 
    flex: 1,
    borderRadius: 100, // Assuming you want a circular shape
    justifyContent: 'center',
    alignItems: 'center', 
  },
  activeTabText: {
    fontWeight: '500',
    fontSize: 14,
  },
  tabText: {
    color: colors.gray_2
  }
});
