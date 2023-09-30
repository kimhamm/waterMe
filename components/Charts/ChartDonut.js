import { useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Text as SvgText }  from 'react-native-svg'
import { PieChart } from 'react-native-svg-charts'

export default function ChartDonut() {
  const [labelWidth, setLabelWidth] = useState(0)
    const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
        }
      }) 
    const deviceWidth = Dimensions.get('window').width

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <SvgText
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={10}
            stroke={'black'}
            strokeWidth={0.2}
          >
            {data.value}
          </SvgText>
        )
      })
    }
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'90%'}
          innerRadius={'60%'}
          data={data}
          padAngle={0}
          valueAccessor={({ item }) => item.value}
        >
          <Labels/>
        </PieChart>
        <View
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            setLabelWidth(width);
          }}
          style={{
            position: 'absolute',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center'
          }}>
          <Text>11</Text>
          <Text>22</Text>
        </View>
      </View>
    )
}



const styles = StyleSheet.create({
  container: {
    
  },
  graphStyle: {
    borderWidth: 1,

  }
})

