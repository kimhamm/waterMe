import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HeaderNav({ navigation, toggleModal, isStateUpdated }) {
  const prevNavigation = useNavigation();
  const previousRouteName = prevNavigation?.dangerouslyGetState()?.routes.slice(-2, -1)[0]?.name

  const navigateTo = (where) => {
    navigation.navigate(where)
  }

  const handleNavPress = () => {
    console.log('뒤로가기 클릭!')
    if(isStateUpdated) {
      toggleModal()
    } else {
      navigateTo(previousRouteName)
    }
  }

  return (<>
    <TouchableOpacity style={styles.container} onPress={handleNavPress}>
      {/*<Image source={require('../../assets/ic_bar_Menu.svg')} />*/ }
      <Text>뒤로</Text>
    </TouchableOpacity>
  </>);
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    borderWidth: 1,
  },
})