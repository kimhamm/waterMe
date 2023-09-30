import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { ProgressCircle } from 'react-native-svg-charts'
import { colors } from '../../style'

export default function ChartGauge() {
  const ProgressGradient = () => (
    <Defs key={'progressGradient'}>
      <LinearGradient
        id={'progressGradient'}
        x1={'0%'}
        y1={'0%'}
        x2={'100%'}
        y2={'0%'}
      >
        <Stop offset={'0%'} stopColor={colors.purple_2} />
        <Stop offset={'50%'} stopColor={'rgba(245,220,250)'} />
        <Stop offset={'100%'} stopColor={colors.purple_0} />
      </LinearGradient>
    </Defs>
  )

  
  return (
    <View style={styles.container}>  
      <ProgressCircle 
        style={styles.graphStyle} 
        progress={0.8} 
        backgroundColor={'#ECECEC'} 
        progressColor={'url(#progressGradient)'}
        startAngle={3.8}
        endAngle={8.8}
        strokeWidth={30}
        cornerRadius={45}
      >
        <ProgressGradient/>
      </ProgressCircle>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{"Weekly Goal\nAchievement"}</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>64</Text>
          <Text style={styles.valueUnit}>%</Text>
        </View>
        <View style={styles.image}></View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  graphStyle: { 
    height: 200,
    width: 200,
  },
  innerContainer: {
    position: 'absolute',
    top: 47,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 500,
  },
  valueContainer: {
    flexDirection: 'row',
  },
  value: {
    fontSize: 40,
    fontWeight: 700,
  },
  valueUnit: {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 14
  },
  image: {
    marginTop: 15,
    borderWidth: 1,
    width: 60,
    height: 30,
  },
})
