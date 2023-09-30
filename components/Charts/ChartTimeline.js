import { Text, View, StyleSheet } from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {colors} from '../../style'

const screenWidth = Dimensions.get("window").width;


export default function ChartTimeline() {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu"], // 더 많은 월 추가
    datasets: [
      {
        data: [70, 69, 70, 71, 70.5], // 더 많은 데이터 포인트 추가
        color: (opacity = 1) => `${colors.gray_1}`, // optional
        strokeWidth: 1 // optional
      }
    ],

  };


  const chartConfig = {
    backgroundGradientFrom: "rgba(0,0,0,0)", // 투명 배경
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "rgba(0,0,0,0)", // 투명 배경
    backgroundGradientToOpacity: 0,
    color: (opacity) => `rgba(0, 0, 0, 0)`, 
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
    fillShadowGradientFromOpacity: 0,
    fillShadowGradientToOpacity: 0,
  };

  const dotColor = (dataPoint, dataset) => {
    // 여기에서 데이터 포인트마다 원하는 색상을 반환할 수 있습니다.
    let color = colors.purple_1
    if(dataset >= 4) color = colors.purple_3
    return color; // 예제로 회색 색상을 반환
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        style={styles.graphStyle}
        width={screenWidth}
        height={100}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={chartConfig}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLines={false}
        withVerticalLabels={false}
        withHorizontalLines={false}
        withHorizontalLabels={false}
        fromZero={false}
        onDataPointClick={() => console.log('clicked!')}
        bezier
        getDotColor={dotColor} // 데이터 포인트 색상 설정
      /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    position: 'relative',
    left: -16,
    flex: 1,
  },
  graphStyle: {
    paddingRight: -5,
    paddingVertical: 25,
  }
})

