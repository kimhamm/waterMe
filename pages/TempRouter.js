import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import { TouchableOpacity as TO } from 'react-native-gesture-handler';
import {colors, layout} from '../style'

export default function TempRouter(props) {
  const list = [
    'Splash', 'Login', 'SetUnits', 'SetProfile', 'Status', 'Statistics',  'Settings'
  ]

  return (
    <View style={styles.container}>
      {list.map(el => {
        return (
          <TouchableOpacity
            style={styles.routes}
            onPress={() => {
              props.navigation.navigate(el);
            }}>
            <Text style={styles.routesText}>{el} {el === 'Splash' ? "=> Expo GO 모바일에서 튕김 (클릭 X)" : ''}</Text>
          </TouchableOpacity>
        )
      })}
      <Text>Expo Go 모바일 이슈</Text>
      <Text>- Splash 튕김</Text>
      <Text>- 이미지 첨부 오류</Text>
      <Text>- SetProfile InputNumber Modal 동작 안 함</Text>
      <Text>- gradient 라이브러리 적용 안 됨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: layout,
  routes: {
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  routesText : {
    fontWeight: 500

  }
});
