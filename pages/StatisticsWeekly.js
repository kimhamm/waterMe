import {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Container/Card'
import ChartBars from '../components/Charts/ChartBars'
import ChartDonut from '../components/Charts/ChartDonut'
import ChartGauge from '../components/Charts/ChartGauge'
import ChartStackedBars from '../components/Charts/ChartStackedBars'
import ChartTimeline from '../components/Charts/ChartTimeline'
import Header from '../components/Header/Header'
import Nav from '../components/Nav'
import SlideHorizontalTabs from '../components/Slide/SlideHorizontalTabs'
import SlideWeeksButton from '../components/Slide/SlideWeeksButton'
import Toggle from '../components/Toggle'


export default function StatisticsWeekly({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('20230101')
  const [toggleIndex, setToggleIndex] = useState(0)

  const dates = [
    {date: '20230922', achievement: 0.1},
    {date: '20230923', achievement: 0.1},
    {date: '20230924', achievement: 0.1},
    {date: '20230925', achievement: 0.1},
    {date: '20230926', achievement: 0.1},
    {date: '20230927', achievement: 0.1},
    {date: '20230928', achievement: 0.1},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.slideWeeksButtonContainer}>
        <SlideWeeksButton />
      </View>
      <ScrollView style={styles.mainContentContainer}>
        <Card>
          <ChartGauge />
          <SlideHorizontalTabs data={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} isInWeekly={true} />
        </Card>
        <Card>
          <Toggle
            text={["Amount", "Pattern", "Ratio"]}
            bgColor={true}
            toggleIndex={toggleIndex}
            setToggleIndex={setToggleIndex}          
          />
          { toggleIndex === 0 ? <ChartBars /> : 
            toggleIndex === 1 ? <ChartStackedBars /> : <ChartDonut />
          }
      
        </Card>
        <Card title={'Weekly Weight Change'} >
          <ChartTimeline />
        </Card>
      </ScrollView>
      <Nav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideWeeksButtonContainer: {
    justifyContent: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
    marginVertical: 27,

  },
  mainContentContainer: {
    flex: 1, 
  }
});
