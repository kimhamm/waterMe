import {useState} from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import BottomModal from './Modal/Modal'

export default function Nav({ navigation }) {
  const [isBottomModalOn, setBottomModalOn] = useState(false);

  const toggleBottomModal = () => {
    setBottomModalOn(!isBottomModalOn);
  };

  const handlePressButton = (route) => {
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => handlePressButton('Statistics')} style={styles.navBtn}>
          <Image
            source={require('../assets/align-bottom-svgrepo-com.svg')} 
            style={styles.image} 
            accessibilityLabel="Go to statistics page"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleBottomModal} style={styles.navBtn}>
          <Image 
            source={require('../assets/add-circle-svgrepo-com.svg')} 
            style={styles.image} 
            accessibilityLabel="Update intake goal"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePressButton('Settings')} style={styles.navBtn}>
          <Image 
            source={require('../assets/user-svgrepo-com.svg')} 
            style={styles.image} 
            accessibilityLabel="Go to settings"
          />
        </TouchableOpacity>
      </View>
      <BottomModal prop={{ isBottomModalOn, setBottomModalOn, toggleBottomModal }} />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  nav: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: 'white',
    height: 55,
    width: 200,
    paddingHorizontal: 18,
    borderRadius: 20,
    shadowColor: 'rgba(30, 35, 48, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 4, // This is for Android elevation
  },
  navBtn: {
    borderRadius: 50, 
  },
  image: {
    padding: 10
  }
})