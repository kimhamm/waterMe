import {useState} from 'react'
import {StyleSheet, View} from 'react-native';
import {colors, layout} from '../style'
import Alert from '../components/Alert'
import Badge from '../components/Badge'
import BottomModal from '../components/Modal/Modal'
import ChartTimeline from '../components/Charts/ChartTimeline'
import ChartWaterdrop from '../components/Charts/ChartWaterdrop'
import Nav from '../components/Nav'
import SlideHorizontalCards from '../components/Slide/SlideHorizontalCards'

export default function Status(props) {
  const [isBottomModalOn, setBottomModalOn] = useState(false);

  const { navigation } = props

  const toggleBottomModal = () => {
    setBottomModalOn(!isBottomModalOn);
  };

  const alertContent = {
    alertTitle: "Update weight",
    alertDesc: "You've already recorded your weight today. \n Will you update your weight record?" ,
    alertRightBtn: "Update",
  }

  return (
    <View style={styles.container}>
      <ChartWaterdrop />
      <ChartTimeline />
      <SlideHorizontalCards />
      <BottomModal prop={{ isBottomModalOn, setBottomModalOn, toggleBottomModal }} />      
      <Alert alertContent={alertContent}/>

      <Nav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: layout,
});
