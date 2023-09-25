import { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalInputNum() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const scrollViewRef = useRef(null);

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // 1부터 100까지의 숫자 생성

  const handleScroll = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const itemHeight = 25; // 각 숫자 버튼의 높이
    const selectedIndex = Math.floor((contentOffsetY / itemHeight)/2);
    const selectedValue = numbers[selectedIndex];
    setSelectedNumber(selectedValue);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={25} // 숫자 버튼 간격 (높이)
        decelerationRate="fast" // 스크롤 감속 속도
      >
        {numbers.map((number) => (
          <TouchableOpacity
            key={number}
            style={[
              styles.numberButton,
              selectedNumber === number && styles.selectedNumberButton,
            ]}
            onPress={() => {
              // 특정 숫자를 선택하기 위해 스크롤뷰를 스크롤합니다.
              scrollViewRef.current.scrollTo({
                y: number * 25, // 숫자 버튼 간격 (높이)을 곱해줍니다.
                animated: true,
              });
            }}
          >
            <Text style={styles.numberButtonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text>Selected Number: {selectedNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '80%',
    maxHeight: '80%',
  },
  numberButton: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderTopWidth: 1,
    borderColor: 'gray',
  },

  numberButtonText: {
    fontSize: 16,
    color: 'gray',
  },
  selectedNumberButton: {
    backgroundColor: 'blue',
    color: 'black',
  },
});
