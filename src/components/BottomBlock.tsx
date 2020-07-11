import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Slider from "@react-native-community/slider";

interface BottomBlockProps {
  skipBackDisabled: boolean;
  skipBackFunc: () => void;
  isPaused: boolean;
  pauseFunc: () => void;
  stepForwardDisabled: boolean;
  stepForwardFunc: () => void;
  stepBackDisabled: boolean;
  stepBackFunc: () => void;
  skipForwardDisabled: boolean;
  skipForwardFunc: () => void;
}

const BottomBlock = ({
  skipBackDisabled,
  skipBackFunc,
  isPaused,
  pauseFunc,
  stepForwardDisabled,
  stepForwardFunc,
  stepBackDisabled,
  stepBackFunc,
  skipForwardDisabled,
  skipForwardFunc,
}: BottomBlockProps) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        {/* <Icon.Button name="facebook" onPress={() => {}}>
          Login with Facebook
        </Icon.Button> */}
        {/* banckward */}
        <Icon.Button
          name="banckward"
          disabled={skipBackDisabled}
          style={
            skipBackDisabled
              ? { backgroundColor: "#abc4eb" }
              : { backgroundColor: "#226ee6" }
          }
          onPress={skipBackFunc}
        ></Icon.Button>
        <Icon.Button
          name="stepbackward"
          disabled={stepBackDisabled}
          style={
            stepBackDisabled
              ? { backgroundColor: "#abc4eb" }
              : { backgroundColor: "#226ee6" }
          }
          onPress={stepBackFunc}
        ></Icon.Button>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#11FFFF"
          maximumTrackTintColor="#000000"
        />
        {isPaused ? (
          <Icon.Button name="caretright" onPress={pauseFunc}></Icon.Button>
        ) : (
          <Icon.Button name="pause" onPress={pauseFunc}></Icon.Button>
        )}
        <Icon.Button
          name="stepforward"
          disabled={stepForwardDisabled}
          style={
            stepForwardDisabled
              ? { backgroundColor: "#abc4eb" }
              : { backgroundColor: "#226ee6" }
          }
          onPress={stepForwardFunc}
        ></Icon.Button>
        <Icon.Button
          name="forward"
          disabled={skipForwardDisabled}
          style={
            skipForwardDisabled
              ? { backgroundColor: "#abc4eb" }
              : { backgroundColor: "#226ee6" }
          }
          onPress={skipForwardFunc}
        ></Icon.Button>
        {/* <Button title="SkipBack" onPress={() => {}}></Button> */}
        {/* <Button
          title="StepBack"
          disabled={stepBackDisabled}
          onPress={stepBackFunc}
        ></Button> */}
        {/* <Button
          title={isPaused ? "Play" : "Pause"}
          onPress={pauseFunc}
        ></Button> */}
        {/* <Button
          title="StepForward"
          disabled={stepForwardDisabled}
          onPress={stepForwardFunc}
        ></Button>
        <Button title="SkipForward" disabled onPress={() => {}}></Button> */}
      </View>
    </View>
  );
};
const disabled = { backgroundColor: "#abc4eb" };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "15%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
  },
  controls: {
    height: 40,
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 30,
    width: "30%",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default BottomBlock;
