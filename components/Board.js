import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import {colors} from '../style'

export default function Board({data}) {

  return ( <>
    {data.length > 0 ? (<View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {data.map((li, idx) => {
            return (
              <View key={li} style={styles.items}>
                <View style={styles.itemsLeft}>
                  <Text style={styles.itemsTime}>{li.time}</Text>
                  {idx < data.length - 1 ? <View style={styles.itemsTimeLine}></View> : null}
                  <View style={styles.itemsImageContainer}>
                    <Image style={styles.itemsImage} source={require('../assets/align-bottom-svgrepo-com.svg')} />
                  </View>
                  <View>
                    <Text style={styles.itemsType} >{li.type}</Text>
                    <Text style={styles.itemsAmount} >{li.amount}</Text>
                  </View>
                </View>
                <Image source={require('../assets/align-bottom-svgrepo-com.svg')} />
              </View>
            );
          })}
        </ScrollView>
      </View>) : (
        <View style={styles.noRecordContainer}>
          <Image source={require('../assets/align-bottom-svgrepo-com.svg')} />
          <Text style={styles.noRecordTitle}>No records</Text>
          <Text style={styles.noRecordDesc}>You haven't logged any water intake records.</Text>
        </View>
      )
    }
    </>
  );
}


const containerWidth = Dimensions.get('window').width ; // 32를 더해서 계산

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: -16,
    width: containerWidth,
    flex: 1,
  },
  scrollView: {
    borderRadius: 16,
    padding: 15,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(30, 35, 48, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 4, 
    height: 200,
  },
  items: {
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemsTime: {
    fontSize: 10,
  },
  itemsTimeLine: {
    borderLeftWidth: 1,
    borderColor: 'rgba(7, 6, 5, 0.08)',
    height: '100%',
    position: 'absolute', 
    top: 50, 
    left: 55,
    zIndex: 1
  },
  itemsImageContainer: {
    borderWidth: 1,
    borderColor: 'rgba(7, 6, 5, 0.08)',
    borderRadius: 12,
    width: 48,
    height: 48,
    padding: 11,
    backgroundColor: '#ffffff',
    marginHorizontal: 16
  },
  itemsImage: {},
  itemsType: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10
  },
  itemsAmount: {
    fontSize: 14,
    fontWeight: 500
  },
  noRecordContainer: {
    alignItems: 'center',
    flex: 1
  },
  noRecordTitle: {
    fontSize: 14, 
    fontWeight: 600,
    marginVertical: 11
  },
  noRecordDesc: {
    color: colors.gray_4,
    fontSize: 12
  },
})

