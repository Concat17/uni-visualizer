import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface TopBlockProps {
  insertFunc: (value: number) => void;
  findFunc: (value: number) => void;
  deleteFunc: (value: number) => void;
}

const TopBlock = ({ insertFunc, findFunc, deleteFunc }: TopBlockProps) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <Icon.Button
          name="plus"
          onPress={() => insertFunc(+value)}
          style={styles.button}
          iconStyle={{
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        ></Icon.Button>
        <Icon.Button
          style={styles.button}
          name="search1"
          onPress={() => findFunc(+value)}
        ></Icon.Button>
        <Icon.Button
          style={styles.button}
          name="close"
          onPress={() => deleteFunc(+value)}
        ></Icon.Button>
        {/* <Button title="Insert" onPress={() => insertFunc(+value)}></Button> */}
        {/* <Button title="Delete" onPress={() => deleteFunc(+value)}></Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "12%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  controls: {
    flexDirection: "row",
    marginLeft: 10,

    width: 360,
    justifyContent: "space-between",
  },
  input: {
    height: 30,
    width: 190,
    borderColor: "gray",

    borderWidth: 1,
  },
  button: {
    height: 30,
    width: 50,
  },
});

export default TopBlock;
