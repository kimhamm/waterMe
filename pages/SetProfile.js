import {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import {colors, layout} from '../style'
import BottomModal from '../components/Modal/Modal'
import Button from '../components/Button'
import Description from '../components/Description'
import Header from '../components/Header/Header'
import InputText from '../components/InputText'
import InputToggle from '../components/InputToggle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // KeyboardAwareScrollView를 import합니다.


export function ProfileInput({ units, setUnits }) {
  const [isBottomModalOn, setBottomModalOn] = useState(false);

  const toggleBottomModal = () => {
    setBottomModalOn(!isBottomModalOn);
  };

  return (<>
    <View style={styles.inputContainer} >
      <InputText prop={{ key: 'name', value: '' }} />
    </View>
    <InputToggle prop={{ key: "sex", value: ['M', 'F'], units, setUnits } } />

    <TouchableOpacity onPress={toggleBottomModal} style={styles.inputContainer} >
      <InputText prop={{ key: 'weight', value: '', units }} onPress={toggleBottomModal} />
    </TouchableOpacity>

    <TouchableOpacity onPress={toggleBottomModal} style={styles.inputContainer} >
      <InputText prop={{ key: 'height', value: '', units }} onPress={toggleBottomModal} />
    </TouchableOpacity>

    <BottomModal prop={{ isBottomModalOn, setBottomModalOn, toggleBottomModal }} />      

  </>)
}

// SetProfile 페이지는 2군데서 사용되므로 조건부 처리하기
export default function SetProfile(props) {
  const [profile, setProfile] = useState({name: null, sex: null, weight: null, height: null})
  const {units, setUnits, navigation} = props


  const handleButtonPress = () => {
    console.log("profile set 완료!, 데이터 Post 및 Status 페이지로 이동")
    navigation.navigate('Status');
  }
  
  return (
    <View style={styles.container}>
      <Header navigation={navigation} elements={{
        isNav: true, title: 'Profile Settings', isButton: false,
      }} />

      <KeyboardAwareScrollView 
        contentContainerStyle={styles.scrollViewContent} 
        enableOnAndroid={true} 
      >

        <Description text={"Create your profile."} />
        <ProfileInput units={units} setUnits={setUnits} />

      </KeyboardAwareScrollView>

      <View style={styles.buttonContainer}>
        <Button title={"Start!"} handleButtonPress={handleButtonPress} isDisabled={false} />  
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: layout,
  buttonContainer: {
    flex: 1, // 버튼이 컨테이너의 끝으로 이동하도록 flex 사용
    justifyContent: 'flex-end', // 버튼을 컨테이너 아래에 정렬
    marginBottom: 20, // 원하는 여백을 지정
  },
  inputContainer : {
    marginBottom: 12
  },
  scrollViewContent: {
    justifyContent: 'space-between', 
  },
});
