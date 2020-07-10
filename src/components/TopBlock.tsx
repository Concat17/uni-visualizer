import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface TopBlockProps {
  insertFunc: (value: number) => void;
  deleteFunc: (value: number) => void;
}

const TopBlock = ({ insertFunc, deleteFunc }: TopBlockProps) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <Button title="Insert" onPress={() => insertFunc(+value)}></Button>
        <Button title="Delete" onPress={() => deleteFunc(+value)}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    backgroundColor: "#fff",
  },
  controls: {
    flexDirection: "row",
  },
  input: {
    height: 30,
    width: "30%",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default TopBlock;
