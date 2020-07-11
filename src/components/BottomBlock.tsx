import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Slider from "@react-native-community/slider";

import { AnimationContainer } from "../containers/AnimationContainer";

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
  const { setDuration } = AnimationContainer.useContainer();

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
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
          onValueChange={(value) => setDuration(value)}
          style={{ width: 200, height: 40 }}
          minimumValue={1000}
          maximumValue={100}
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
      </View>
    </View>
  );
};

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
