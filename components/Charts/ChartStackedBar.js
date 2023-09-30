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
import {colors} from '../../style'

export default function ChartStackedBar() {

  const legend = ["Alcohol", "Beverage", "Tea", "Coffee", "Water",]

  const data = {
    labels: ["Daily Intake Composition"],
    data: [
      [10, 60, 60, 60, 60],
    ],
    barColors: [ colors.peach_2, colors.peach_1, colors.purple_3, colors.purple_2, colors.purple_0, ]
  };


  const chartConfig = {
    backgroundGradientFrom: "rgba(0,0,0,0)", // 투명 배경
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "rgba(0,0,0,0)", // 투명 배경
    backgroundGradientToOpacity: 0,
    color: (opacity) => `rgba(0, 0, 0, 0)`, 
    barPercentage: 2,
    labelColor: (opacity = 1) => 'white',
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <StackedBarChart
          style={styles.graphStyle}
          data={data}
          width={screenWidth / 2}
          height={270}
          chartConfig={chartConfig}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLines={false}
          withVerticalLabels={false}
          withHorizontalLines={false}
          withHorizontalLabels={false}
          showLegend={false}
        />
      </View>
      <View style={styles.legendContainer}>
        {[...legend]?.reverse().map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[styles.legendBox, {backgroundColor: data.barColors[legend.length - index - 1]}]} 
            />
            <Text style={styles.legendText}>{item}</Text>
          </View>
        ))}
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chartContainer: {
    width: '50%',
    height: 225,
    overflow: 'hidden',
  },
  graphStyle: {
    height: '100%',
    position: 'absolute',
    left: -30,
  },
  legendContainer: {
    flexGrow: 1,
    height: 225,
    justifyContent: 'center',
    paddingVertical: 40,
    paddingLeft: 40,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  legendBox: {
    width: 16,
    height: 10,
    marginRight: 8,
    borderRadius: 4,
  },
  legendText: {
    color: colors.gray_4,
    fontSize: 10,
  }
})



