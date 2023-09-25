import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from './Container/Card'

export default function List({ listTitle, listData, navigation, toggleModal }) {

  return (   
    <Card>
      <Text style={styles.listTitle}>{listTitle}</Text>
      {listData.map(li => <ListItem item={li} navigation={navigation} toggleModal={toggleModal} />)}
    </Card>
  )
}

export function ListItem({ item, navigation, toggleModal }) {
  const { itemTitle, itemImg } = item

  const handleItemPress = (itemTitle) => {
    if(navigation) {
      navigation.navigate('SettingDetails', { selectedItem: itemTitle });
    }
    if(toggleModal) {
      toggleModal()
    } 
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => handleItemPress(itemTitle)}
      disabled={itemTitle === 'App Version'}
    >
      <View style={styles.leftContent}>
        <Image source={itemImg} />
        <Text>{itemTitle}</Text>
      </View>
      {itemTitle !== 'App Version' ? <Image source={itemImg} />
       : <Text>1.0.0</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    height: 48,
    paddingVertical: 5,
  },
  leftContent: {
    flexDirection: 'row', 
  }, 
  listTitle: {
    marginBottom: 10
  },
})