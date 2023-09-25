import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Alert from '../components/Alert'
import Board from '../components/Board'
import BottomModal from '../components/Modal/Modal'
import Card from '../components/Container/Card'
import ChartStackedBars from '../components/Charts/ChartStackedBars'
import ChartWaterdrop from '../components/Charts/ChartWaterdrop'
import Header from '../components/Header/Header'
import Nav from '../components/Nav'
import SlideHorizontalTabs from '../components/Slide/SlideHorizontalTabs'
import Toggle from '../components/Toggle'

export default function StatisticsDaily({ navigation }) {
  const [showSummary, setShowSummary] = useState(0);
  const [isBottomModalOn, setBottomModalOn] = useState(false);
  const [selectedDate, setSelectedDate] = useState('20230901')

  const alertContentA = {
    alertTitle: "Update Goal",
    alertDesc: "Updating goal may cancel \n today's goal achievement. \n Do you want to update your goal?" ,
    alertRightBtn: "Update",
  }

  const alertContentB = {
    alertTitle: "Delete Record",
    alertDesc: "Do you want to delete \n the ${water} intake record?" ,
    alertRightBtn: "Delete",
  }

  const toggleBottomModal = () => {
    setBottomModalOn(!isBottomModalOn);
  };

  const dates = [
    {date: '20230901', achievement: 0.5},
    {date: '20230902', achievement: 0.9},
    {date: '20230903', achievement: 0.8},
    {date: '20230904', achievement: 0.7},
    {date: '20230905', achievement: 0.6},
    {date: '20230906', achievement: 0.5},
    {date: '20230907', achievement: 0.4},
    {date: '20230908', achievement: 0.3},
    {date: '20230909', achievement: 0.2},
    {date: '20230910', achievement: 0.1},
    {date: '20230911', achievement: 0.1},
    {date: '20230912', achievement: 0.1},
    {date: '20230913', achievement: 0.1},
    {date: '20230914', achievement: 0.1},
    {date: '20230915', achievement: 0.1},
    {date: '20230916', achievement: 0.1},
    {date: '20230917', achievement: 0.1},
    {date: '20230918', achievement: 0.1},
    {date: '20230919', achievement: 0.1},
    {date: '20230920', achievement: 0.1},
    {date: '20230921', achievement: 0.1},
    {date: '20230922', achievement: 0.1},
    {date: '20230923', achievement: 0.1},
    {date: '20230924', achievement: 0.1},
    {date: '20230925', achievement: 0.1},
    {date: '20230926', achievement: 0.1},
    {date: '20230927', achievement: 0.1},
    {date: '20230928', achievement: 0.1},
    {date: '20230929', achievement: 0.1},
    {date: '20230930', achievement: 0.1},
  ]


  const boardData = [
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

  // date 형식 처리
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const year = parseInt(selectedDate.slice(0, 4), 10);
  const month = parseInt(selectedDate.slice(4, 6), 10) - 1; // 월은 0부터 시작하므로 1을 빼줍니다.
  const day = parseInt(selectedDate.slice(6, 8), 10);
  const formattedDate = `${monthNames[month]} ${day}, ${year}`;

  return (
    <View style={styles.container}>
      <SlideHorizontalTabs data={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <View style={styles.sideBar}>
        <View style={styles.sideBarToggleContainer}> 
          <Toggle
            text={["Summary", "Time Line"]}
            bgColor={true}
            toggleIndex={showSummary}
            setToggleIndex={setShowSummary}          
          />
        </View>
        <Text style={styles.sideBarText}>{formattedDate}</Text>
      </View>
       <View style={styles.mainContentContainer}>
      { showSummary === 0 ? <ScrollView>
          <Card title={"Daily Summary"} settings={true} > 
            <ChartWaterdrop />
          </Card>
          <Card title={'Daily Intake Composition'}> 
            <ChartStackedBars />
          </Card>
          <Card title={'Today’s Weight'}>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
            <Text>15151515</Text>
          </Card>
        </ScrollView> :<Board data={boardData} />
      }
      </View>
      <Alert alertContent={alertContentA} />
      <Alert alertContent={alertContentB} />

      <BottomModal prop={{ isBottomModalOn, setBottomModalOn, toggleBottomModal }} />      
      <Nav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sideBar: {
    flexDirection: 'row', // 수평으로 배치
    justifyContent: 'space-between', // 양 끝에 배치
    alignItems: 'center', // 세로 중앙 정렬
    marginVertical: 20
  },
  sideBarToggleContainer: {
    width: '56%'
  },
  sideBarText: {
    fontWeight: 600
  },
  mainContentContainer: {
    borderWidth: 1,
    flex: 1,
  }
});

