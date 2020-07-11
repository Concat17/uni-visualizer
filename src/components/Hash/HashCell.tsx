import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, Animated } from "react-native";

import { AnimationContainer } from "../../containers/Animation";
import { HashContainer } from "../../containers/HashContainer";

interface HashProps {
  value: number;
  isBlinking: boolean | undefined;
}

const HashCell = ({ value, isBlinking }: HashProps) => {
  const { blinkingAnimation } = AnimationContainer.useContainer();
  const [moveAnim, setMoveAnim] = useState(new Animated.Value(0));

  const handleMoveAnimation = useCallback(() => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [moveAnim]);

  const animatedStyle = {
    opacity: blinkingAnimation,
  };

  const moveAnime = {
    transform: [
      {
        translateY: moveAnim,
      },
    ],
  };
  // useEffect(()=>{
  //   if(value === foundCell)}

  // })

  return (
    <Animated.View
      style={
        isBlinking
          ? [styles.wrapper, animatedStyle, moveAnime]
          : [styles.wrapper, moveAnime]
      }
    >
      <Text style={styles.text}>{value}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 0.5,
    backgroundColor: "#5176b0",
    opacity: 1,
  },
  text: {
    color: "#ffffff",
  },
});

export default HashCell;
