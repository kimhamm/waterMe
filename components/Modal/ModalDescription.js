import {Text,View} from 'react-native';

export default function ModalDescription({text}) {
  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center' 
    }}>
      <Text>{text}</Text>
    </View>
  );
}
