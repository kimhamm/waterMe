import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {
  Text,
  View,
  Dimensions
} from 'react-native';

export default function ChartWaterdrop() {

    const data = [
      {
        empty: 0.5,
        cherries: 0.5,
        dates: 0,
      },
      {
        empty: 0.5,
        cherries: 0.42,
        dates: 0.08,
      },
      {
        empty: 0.565,
        cherries: 0.405,
        dates: 0.03,           
      },
      {
        empty: 0.53,
        cherries: 0.4,
        dates: 0.07,     
      },
    ]

    const colors = ['#cc66ff', '#eeccff', 'rgba(255,255,255,0.2']
    const keys = ['cherries', 'dates', 'empty']
    const svgs = [
      { onPress: () => console.log('cherries') },
      { onPress: () => console.log('dates') },
    ]

    return ( 
      <View style={{
        alignItems: 'center',
      }}>
        <View style={{
          height: 250, 
          width: 250,
          borderRadius: 150,
          overflow: 'hidden',
        }}>
          <StackedAreaChart
            style={{ height: 250,  }}
            data={data}
            keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={false}
            svgs={svgs}
          />
        </View>
      </View>
    )
  }


