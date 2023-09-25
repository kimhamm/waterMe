import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { colors, layout } from '../style'
import Card from '../components/Container/Card'
import List from '../components/List'
import Nav from '../components/Nav'

export default function Settings(props) {
  const { navigation } = props 

  const listAccount = [
    { itemTitle : "Profile Setting", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Goal Setting", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Unit Setting", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Achievement History", itemImg: require('../assets/glass-svgrepo-com.svg') },
  ]

  const listOthers = [
    { itemTitle : "Agreements", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Account Management", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "App Version", itemImg: require('../assets/glass-svgrepo-com.svg') },
  ]

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text>Hi, User</Text>
        <View style={styles.board}>
          <Text>Consecutive Achievement</Text>
          <Text>6 Days</Text>
          <Text>in a row</Text>
          <Image style={styles.logo} source={require('../assets/glass-svgrepo-com.svg')} />
          <Text>Total Intake : 9,999,999 L</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Card>
              <Text style={styles.gridItemTextH}>Total Number</Text>
              <Text style={styles.gridItemTextM}>6 times</Text>
              <Text style={styles.gridItemTextB}>achieved the goal</Text>
            </Card>
          </View>
          <View style={styles.gridItem}>
            <Card>
              <Text style={styles.gridItemTextH}>Longest Streak</Text>
              <Text style={styles.gridItemTextM}>6 Days</Text>
              <Text style={styles.gridItemTextB}>in a row</Text>
            </Card>
          </View>
        </View>
        <List listTitle="Account" listData={listAccount} navigation={navigation} />
        <List listTitle="Others" listData={listOthers} navigation={navigation} />
      </ScrollView>
      <View style={styles.navContainer}>
        <Nav navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: layout, 
  scrollContent: {

  },
  board: {
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 16,
    padding: 18,
    backgroundColor: '#FFF',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    gap: 8,
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: '49%',
  },
  gridItemTextH: {
    textAlign: 'center',
    marginTop: -5
  },
  gridItemTextM: {
    textAlign: 'center',
    marginTop: 5
  },
  gridItemTextB: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    marginBottom: -5
  },
  navContainer: {
    marginTop: 10,
  }
});
