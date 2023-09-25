import {useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Tooltip } from 'react-native';

export default function SlideHorizontalTabs({ data, selectedDate=null, setSelectedDate=null, isInWeekly=false }) {
  const [whereTooltipOn, setWhereTooltipOn] = useState(null)
  let activeTab; 
    
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0'); 
  const currDate = `${year}${month}${day}`;

  if(!isInWeekly) {
    activeTab = selectedDate
  } else {
    activeTab = currDate
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
  
  const handlePressTab = (date) => {
    setSelectedDate(date)

    if(isInWeekly) { 
      setWhereTooltipOn(date)

      setTimeout(() => {
        setWhereTooltipOn(null)
      }, 3000);
    } 
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        {data.map((li, idx) => (
          <TouchableOpacity key={li.date} 
            style={[
              styles.tab,
              activeTab === li.date && {backgroundColor: 'black',},
            ]}
             onPress={() => handlePressTab(li.date)}
          > 
            {whereTooltipOn === li.date ? <View style={styles.tooltip}><Text>tooltip</Text></View> : null }
            <Text style={[
              styles.textS,
              activeTab === li.date && {color: 'white'},
            ]}>{days[(idx + 2) % 7]}</Text>
            <Text style={[
              styles.textM,
              activeTab === li.date && {color: 'white'},
            ]}>{parseInt(li.date.substr(6,7))}</Text>
            <Image style={styles.itemsImage} source={require('../../assets/align-bottom-svgrepo-com.svg')} />
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
  tab: {
    borderRadius: 19,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    marginVertical: 2, 
    minWidth: 40,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(30, 35, 48, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 1, 
  },
  textS: {
    fontSize: 10,
    fontWeight: 400,
    marginBottom: 2,
  },
  textM: {
    fontSize: 14,
    fontWeight: 500,
  },
  tooltip: {
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '90%',
    height: 40,
    width: 80,
    zIndex: 3,

    shadowColor: 'rgba(30, 35, 48, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 1, 
  },
});

