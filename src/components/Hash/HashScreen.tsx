import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AnimationContainer } from "../../containers/Animation";
import { HashContainer } from "../../containers/HashContainer";

import TopBlock from "../TopBlock";
import HashColumn from "./HashColumn";
import BottomBlock from "../BottomBlock";

const HashScreen = () => {
  const {
    hash,
    insertInHash,
    deleteFromHash,
    columnCount,
    history,
    setHistory,
  } = HashContainer.useContainer();

  const {
    blinkingAnimation,
    handleBlinkingAnimation,
  } = AnimationContainer.useContainer();

  const [expresstion, setExpression] = useState("");
  const [blinkingCol, setBlinkingCol] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  //const [value, setValue] = useState(0);

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  async function changeScreenOrientationPortrait() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  }

  useEffect(() => {
    changeScreenOrientation();
    //changeScreenOrientationPortrait();
  });

  function insertinon(value: number) {
    const col = value % columnCount;
    setHistory([...history, ["insert", value]]);
    handleBlinkingAnimation();
    //setValue(value);
    if (isPaused) {
      if (animationStep === 0) {
        setExpression(
          `Inserting element: ${value}    ${value} % ${columnCount} = ${col}`
        );
        setAnimationStep(1);
      }
    } else {
      setExpression(
        `Inserting element: ${value}    ${value} % ${columnCount} = ${col}`
      );
      setBlinkingCol(col);
      insertInHash(value);
    }
  }

  function stepForward() {
    const value = history[history.length - 1][1];
    const col = value % columnCount;
    if (animationStep === 1) {
      setBlinkingCol(col);
      handleBlinkingAnimation();
      setAnimationStep(2);
    } else if (animationStep === 2) {
      insertInHash(value);
      setAnimationStep(0);
    }
  }

  function stepBack() {
    if (animationStep === 0) {
      const value = history[history.length - 1][1];
      deleteFromHash(value);
      setAnimationStep(2);
    } else if (animationStep === 2) {
      const value = history[history.length - 1][1];
      const col = value % columnCount;
      setExpression(
        `Inserting element: ${value}    ${value} % ${columnCount} = ${col}`
      );
      handleBlinkingAnimation();
      setBlinkingCol(col);
      setAnimationStep(1);
    } else if (animationStep === 1) {
      const value = history[history.length - 1][1];
      const col = value % columnCount;
      setHistory(history.slice(0, -1));
      setAnimationStep(0);
    }
  }
  console.log(blinkingCol);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <TopBlock insertFunc={insertinon} deleteFunc={deleteFromHash} />
      <Text>{expresstion}</Text>
      <View style={styles.hash}>
        {hash.map((col, i) => {
          return (
            <HashColumn
              key={i}
              index={i}
              values={col}
              isBlinking={i === blinkingCol}
            />
          );
        })}
      </View>
      <BottomBlock
        isPaused={isPaused}
        stepBackDisabled={history.length === 0}
        stepForwardDisabled={history.length === 0 || animationStep === 0}
        pauseFunc={() => setIsPaused(!isPaused)}
        stepForwardFunc={() => stepForward()}
        stepBackFunc={() => stepBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#737373",
  },
  hash: {
    height: "80%",
    flexDirection: "row",
    left: 20,
    bottom: 30,
  },
});

export default HashScreen;
