import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, Animated } from "react-native";

import { createContainer } from "unstated-next";

export const AnimationContainer = createContainer(() => {
  const [blinkingAnimation, setBlinkingAnimation] = useState(
    new Animated.Value(1)
  );

  const handleBlinkingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkingAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(blinkingAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      { iterations: 4 }
    ).start();
  };
  return { blinkingAnimation, handleBlinkingAnimation };
});
