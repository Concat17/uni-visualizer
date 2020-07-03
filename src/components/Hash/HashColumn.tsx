import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import HashCell from "./HashCell";

interface HashColumnProps {
  index: number;
  values: number[];
}

const HashColumn = ({ index, values }: HashColumnProps) => {
  return (
    <View style={styles.wrapper}>
      <HashCell value={index}></HashCell>
      {values.map((value, i) => {
        return (
          <HashCell
            key={`${value}_${i * Math.random()}`}
            value={value}
          ></HashCell>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column-reverse",
  },
});

export default HashColumn;
