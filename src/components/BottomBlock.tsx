import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface BottomBlockProps {
  isPaused: boolean;
  stepBackDisabled: boolean;
  stepForwardDisabled: boolean;
  pauseFunc: () => void;
  stepForwardFunc: () => void;
  stepBackFunc: () => void;
}

const BottomBlock = ({
  isPaused,
  pauseFunc,
  stepBackDisabled,
  stepForwardDisabled,
  stepForwardFunc,
  stepBackFunc,
}: BottomBlockProps) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        {/* <Icon.Button name="facebook" onPress={() => {}}>
          Login with Facebook
        </Icon.Button> */}
        {/* banckward */}
        <Icon.Button name="banckward" onPress={() => {}}></Icon.Button>
        <Button title="SkipBack" onPress={() => {}}></Button>
        <Button
          title="StepBack"
          disabled={stepBackDisabled}
          onPress={stepBackFunc}
        ></Button>
        <Button
          title={isPaused ? "Play" : "Pause"}
          onPress={pauseFunc}
        ></Button>
        <Button
          title="StepForward"
          disabled={stepForwardDisabled}
          onPress={stepForwardFunc}
        ></Button>
        <Button title="SkipForward" disabled onPress={() => {}}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "10%",
    backgroundColor: "#fff",
    justifyContent: "center",
    left: 0,
    right: 0,
    bottom: 0,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    height: 30,
    width: "30%",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default BottomBlock;
