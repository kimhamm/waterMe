import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {colors} from '../../style'

export default function SlideHorizontalCards() {

  const handlePressCard = () => {
    
  }

  const datas = ["weight","water","coffee","tea","beverage","alcohol",]

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        {datas.map((li, idx) => (
          <TouchableOpacity key={li} 
            style={styles.card}
            onPress={() => handlePressCard()}
          > 
            <Image style={styles.itemsImage} source={require('../../assets/align-bottom-svgrepo-com.svg')} />
            <Text style={styles.text}>+ {li}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  list: {
    flexDirection: 'row',
  },
  card: {
    borderRadius: 10,
    width: 70,
    height: 70,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    marginRight: 15,
    marginVertical: 2, 
    shadowColor: 'rgba(30, 35, 48, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 1, // This is for Android elevation
  },
  itemsImage: {},
  text: {
    fontSize: 10,
    fontWeight: 400,
    color: colors.gray_3
  },
});