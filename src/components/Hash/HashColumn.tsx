import React, { useEffect } from "react";
import { Animated, StyleSheet } from "react-native";

import HashCell from "./HashCell";

interface HashColumnProps {
  index: number;
  values: number[];
  isBlinking?: boolean;
}

const HashColumn = ({ index, values, isBlinking }: HashColumnProps) => {
  return (
    <Animated.View style={styles.wrapper}>
      <HashCell value={index} isBlinking={isBlinking}></HashCell>
      {values.map((value, i) => {
        return (
          <HashCell
            key={`${value}_${i}`}
            value={value}
            isBlinking={false}
          ></HashCell>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column-reverse",
    //paddingTop: 100,
  },
});

export default HashColumn;
