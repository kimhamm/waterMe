import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SlideWeeksButton() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dates = [
    {
      fdow: '20230915', // 첫 주의 시작 날짜 (YYYYMMDD 형식)
      ldow: '20230921', // 첫 주의 끝 날짜 (YYYYMMDD 형식)
    },
    {
      fdow: '20230908', 
      ldow: '20230914', 
    },
    {
      fdow: '20230901', 
      ldow: '20230907', 
    },
    {
      fdow: '20230825', 
      ldow: '20230831',
    },
  ];

  console.log(dates[currentIndex])

  const nextDate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const prevDate = () => {
    if (currentIndex < dates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.arrowButton,
          { left: -20, opacity: currentIndex === dates.length - 1 ? 0.5 : 1 },
        ]}
        onPress={prevDate}
        disabled={currentIndex === dates.length - 1}
      >
        <Text style={styles.arrowText}>{"<"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.arrowButton,
          { right: -20, opacity: currentIndex === 0 ? 0.5 : 1 },
        ]}
        onPress={nextDate}
        disabled={currentIndex === 0}
      >
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>
      <Text style={styles.dateText}>
        {/* 데이터 형식에 맞게 수정 */}
        {dates[currentIndex]?.fdow.substring(4, 6)}.
        {dates[currentIndex]?.fdow.substring(6, 8)} ~
        {dates[currentIndex]?.ldow.substring(4, 6)}.
        {dates[currentIndex]?.ldow.substring(6, 8)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -18 }],
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
