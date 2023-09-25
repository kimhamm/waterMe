import {Text,View} from 'react-native';
import {colors} from '../style'
import Description from '../components/Description'
import LoginUI from '../components/LoginUI'
import Logo from '../components/Logo'

export default function Login() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray_0}}>
      <Logo />
      <Description text={"Sign up with your social ID"} />
      <LoginUI />
    </View>
  );
}
