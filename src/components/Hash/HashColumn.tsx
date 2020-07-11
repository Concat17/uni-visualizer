import React, { useEffect } from "react";
import { Animated, StyleSheet } from "react-native";

import { HashContainer } from "../../containers/HashContainer";

import HashCell from "./HashCell";

interface HashColumnProps {
  index: number;
  values: number[];
  isBlinking?: boolean;
}

const HashColumn = ({ index, values, isBlinking }: HashColumnProps) => {
  const { foundCell, setFoundCell } = HashContainer.useContainer();
  function blinckingCell(value: number) {
    if (value === foundCell) {
      setFoundCell(null);
      return true;
    }
    return false;
  }

  return (
    <Animated.View style={styles.wrapper}>
      <HashCell value={index} isBlinking={isBlinking}></HashCell>
      {values.map((value, i) => {
        return (
          <HashCell
            key={`${value}_${i}`}
            value={value}
            isBlinking={blinckingCell(value)}
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
