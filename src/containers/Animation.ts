import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, Animated } from "react-native";

import { createContainer } from "unstated-next";

export const AnimationContainer = createContainer(() => {
  const [blinkingAnimation, setBlinkingAnimation] = useState(
    new Animated.Value(1)
  );

  const [duration, setDuration] = useState(500);

  const handleBlinkingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkingAnimation, {
          toValue: 0,
          duration: duration,
          useNativeDriver: false,
        }),
        Animated.timing(blinkingAnimation, {
          toValue: 1,
          duration: duration,
          useNativeDriver: false,
        }),
      ]),
      { iterations: 2 }
    ).start();
  };
  return { blinkingAnimation, handleBlinkingAnimation, duration };
});
