import { View, StyleSheet } from 'react-native';
import HeaderButton from './HeaderButton'
import HeaderNav from './HeaderNav'
import HeaderTitle from './HeaderTitle'

export default function Header({ elements, navigation, toggleModal, isStateUpdated }) {
  const { isNav, title, isButton } = elements
  return (
    <View style={styles.container}>
      <View style={{ width:'10%' }}>{ isNav ? 
        <HeaderNav navigation={navigation} toggleModal={toggleModal} isStateUpdated={isStateUpdated} /> : null }
      </View>
      <View>
        <HeaderTitle title={title} />
      </View>
      <View style={{ minWidth:'10%' }}>{ isButton ? 
        <HeaderButton navigation={navigation} /> : null }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 0, // 좌우 여백 설정 
    height: 56,
  }
})