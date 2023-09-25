import { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {colors, layout} from '../style'
import Alert from '../components/Alert'
import Header from '../components/Header/Header'
import List from '../components/List'
import Board from '../components/Board'
import Toggle from '../components/Toggle'
import {ProfileInput} from './SetProfile'
import {UnitsInput} from './SetUnits'
import InputText from '../components/InputText'

export default function SettingDetails(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  let isStateUpdated = true; {/* state로 바꿀 것 */}
  let isButton = true
  
  let alertContent = {
    title : "Go back",
    desc : "Going back will not save your changes.\n Do you still want to go back?",
    rightBtn : "Go back"
  } 

  let alertContentA = `Log out
    Are you sure you want to log out?
    Cancel
    Log out


    Reset data
    Resetting your data will erase all your records.
    Are you sure you want to reset your data?
    Cancel
    Reset


    Withdraw Account
    Withdrawing your membership will permanently delete your account and data.
    Are you sure you want to withdraw ?
    Cancel
    Withdraw`

  const {units, setUnits, navigation} = props

  const settingsTitle = route.params?.selectedItem;

  const listItem = [
    "Profile Setting",
    "Goal Setting",
    "Unit Settings",
    "Achievement History",
    "Agreements",
    "Account Management",
    "App Version", 
  ]

  const data_agreements = [
    { itemTitle : "Privacy Policy Agreement", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Terms of Service", itemImg: require('../assets/glass-svgrepo-com.svg') },
  ]

  const data_accountManagement = [
    { itemTitle : "Log out", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Reset Data", itemImg: require('../assets/glass-svgrepo-com.svg') },
    { itemTitle : "Withdraw Membership", itemImg: require('../assets/glass-svgrepo-com.svg') },
  ]

  const data_achievementHistory = [
    {time: 100, type: 'water', amount: 100},
    {time: 200, type: 'coffee', amount: 120},
    {time: 300, type: 'tea', amount: 100},
    {time: 400, type: 'beverage', amount: 130},
    {time: 500, type: 'alcohol', amount: 200},
    {time: 600, type: 'coffee', amount: 200},
    {time: 700, type: 'water', amount: 300},
    {time: 800, type: 'tea', amount: 100},
    {time: 900, type: 'beverage', amount: 110},
    {time: 1000, type: 'water', amount: 120},
    {time: 1100, type: 'alcohol', amount: 100},
  ]

  const toggleModal = (callback=null, param=null) => {
    if(callback) { 
      callback(param)
    } 
    setModalVisible(!isModalVisible);
  };

  
  if (settingsTitle === 'Profile Setting') {
    content = <ProfileInput units={units} setUnits={setUnits} />;
  } else if (settingsTitle === 'Goal Setting') {
    content = <View style={styles.inputContainer} >
      <InputText prop={{ key: 'name', value: '' }} />
    </View>
      
  } else if (settingsTitle === 'Unit Setting') {
    content = <UnitsInput units={units} setUnits={setUnits} />      
  } else if (settingsTitle === 'Achievement History') {
    content = <Board data={data_achievementHistory}/>;
    isStateUpdated = false
    isButton = false
  } else if (settingsTitle === 'Agreements') {
    content = <List listTitle='Agreements' listData={data_agreements} toggleModal={toggleModal} />;
    isStateUpdated = false
    isButton = false
  } else if (settingsTitle === 'Account Management') {
    content = <List listTitle='Account' listData={data_accountManagement} toggleModal={toggleModal} />;
    isStateUpdated = false
    isButton = false
  } else {
    content = <View></View>;
  }


  return (
    <View style={styles.container}>

      <Header 
        navigation={navigation} 
        elements={{ 
          isNav: true, 
          title: settingsTitle, 
          isButton, 
        }}
        isStateUpdated={isStateUpdated}
        toggleModal={toggleModal}
      />

      {content}

      <Alert 
        alertContent={alertContent}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        navigation={navigation} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: layout,
});
