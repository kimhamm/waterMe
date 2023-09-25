import {Text,View} from 'react-native';

export default function HeaderTitle({title}) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: 600 }}>{title}</Text> 
    </View>
  );
}
