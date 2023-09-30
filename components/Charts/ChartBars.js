import { Text, View, StyleSheet } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'
import { colors } from '../../style'

export default function ChartBars() {

  const currentDate = '20230906'
  const data = [ 
    { date: '20230901', value: 1400, }, 
    { date: '20230902', value: 1500, }, 
    { date: '20230903', value: 1800, }, 
    { date: '20230904', value: null, }, 
    { date: '20230905', value: 4000, }, 
    { date: '20230906', value: 1800, }, 
    { date: '20230907', value: null, }, 
  ]
  const maxValue = data.reduce((max, item) => {
    if (item.value !== null && item.value > max) {
      return item.value;
    }
    return max;
  }, Number.NEGATIVE_INFINITY);

  const goal = 2000

  const goalLineTopPosition = `${100 - Math.round(goal / maxValue * 100)}%`


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{"Average daily intake"}</Text>
        <Text style={styles.value}>{1,600}ml</Text>
      </View>
      <BarChart
        style={styles.graphStyle}
        data={data}
        gridMin={0}
        svg={{ fill: colors.purple_0, opacity: 0.5 }}
        spacingInner={0.5}
        contentInset={{ left: 20, right: 20 }}
        yAccessor={({ item }) => {
          if(item.date === currentDate) item.svg = { fill : colors.purple_2 } 
          return item.value
        }}
      >
        <View
          style={[styles.goalLine, {top: goalLineTopPosition}]}
        />
      </BarChart>
      <XAxis
        style={styles.axis}
        data={ data }
        labelStyle={ { color: '#EEEDEA' } }
        contentInset={{ left: 20, right: 20 }}
        svg={{ fontSize: 10, fill: colors.gray_3 }}
        xAccessor={({item}) => item.date}
        formatLabel={(value) => {
          return value !== currentDate ? `${value.substr(4,2)}.${value.substr(6,2)}` : 'Today'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 320,
    padding: 0,
  },
  graphStyle: { 
    flex: 1,
  },
  axis: {
    borderTopWidth: 1,
    borderTopColor: '#EEEDEA',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  goalLine: {
    borderTopWidth: 1,
    borderTopColor: '#E5E1DA',
    width: '100%', 
    position: 'relative',
    borderStyle: 'dashed',
  },
  innerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 16, 
  },
  value: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 20
  },

})
