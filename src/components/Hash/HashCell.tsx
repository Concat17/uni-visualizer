import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

interface HashProps {
  value: number;
}

const HashCell = ({ value }: HashProps) => {
  return (
    <View style={styles.wrapper}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 40,
    height: 30,
    backgroundColor: "#d1e8d7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 0.5,
  },
});

export default HashCell;
