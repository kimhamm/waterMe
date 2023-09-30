import { Text, View, StyleSheet } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function ChartStackedBars() {
  const data = {
    labels: ["Test1", "Test1", "Test1", "Test1", "Test1", "Test1", "Test1"],
    legend: ["L1", "L2", "L3", "L4", "L5", "L6", "L7"],
    data: [
      [60, 60, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };

  const chartConfig = {
    backgroundGradientFrom: "rgba(0,0,0,0)", // 투명 배경
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "rgba(0,0,0,0)", // 투명 배경
    backgroundGradientToOpacity: 0,
    color: (opacity) => `rgba(0, 0, 0, 0)`, 
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  
  const screenWidth = Dimensions.get("window").width;


  return (
    <View style={styles.container}>

      <StackedBarChart
        style={styles.graphStyle}
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  graphStyle: {

  }
})
