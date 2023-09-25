import {Text,View} from 'react-native';

export default function Description({text}) {
  return (
    <View style={{ 
      alignItems: 'center',
      marginVertical: 45
    }}>
      <Text>{text}</Text>
    </View>
  );
}
