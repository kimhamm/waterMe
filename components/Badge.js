import React, {useEffect, useRef} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {LottieView, AnimatedLottieView} from 'lottie-react-native';


// Lottie는 expo sdk 최신 버전에서 사용할 수 있습니다. v6.1.2 
// snack에서는 expo sdk 최신 버전을 사용할 수 없는 관계로 작업 보류




export default function Badge({autoplay = true, loop = true, speed = 1.5}) {
  const animation = require('../assets/BadgeLottie.json')

  const lottieRef = useRef(null);
  useEffect(() => {
    lottieRef.current?.reset();
    setTimeout(() => {
        lottieRef.current?.play();
    }, 0)

  }, []);

  return (
    <View>
      <AnimatedLottieView
          source={animation}
          autoPlay={autoplay}
          loop={loop}
          speed={speed}
          ref={lottieRef}
      />
    </View>
  );
}
