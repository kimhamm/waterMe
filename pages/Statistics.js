import {useState} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import {colors, layout} from '../style'
import StatisticsDaily from './StatisticsDaily'; // Daily 화면 컴포넌트 import
import StatisticsWeekly from './StatisticsWeekly'; // Weekly 화면 컴포넌트 import
import Toggle from '../components/Toggle'

export default function Statistics(props) {
  const [showDaily, setShowDaily] = useState(0);
  const { navigation } = props

  const toggleDailyWeekly = () => {
    setShowDaily(!showDaily);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Toggle 
          text={["Daily", "Weekly"]}
          bgColor={false}
          toggleIndex={showDaily}
          setToggleIndex={setShowDaily}
        />
      </View>
      {showDaily === 0 ? <StatisticsDaily navigation={navigation} /> : <StatisticsWeekly navigation={navigation} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: layout, 
  toggleContainer: {
    marginHorizontal: 70, 
  }
})