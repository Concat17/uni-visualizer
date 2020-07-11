import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AnimationContainer } from "../../containers/AnimationContainer";
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
    setFoundCell,
  } = HashContainer.useContainer();

  const {
    handleBlinkingAnimation,
    duration,
  } = AnimationContainer.useContainer();

  const [expresstion, setExpression] = useState("");
  const [blinkingCol, setBlinkingCol] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  useEffect(() => {
    changeScreenOrientation();
  });

  function playAnimation(
    value: number,
    expresstion: string,
    func: (value: number) => void
  ) {
    const col = value % columnCount;
    setExpression(expresstion);
    setTimeout(() => {
      handleBlinkingAnimation();
      setBlinkingCol(col);
      setTimeout(() => {
        func(value);
        setExpression("");
      }, duration * 4);
    }, duration);
  }

  function handleInsert(value: number) {
    const col = value % columnCount;
    const newExpression = `Inserting element: ${value}    ${value} % ${columnCount} = ${col}`;
    setHistory([...history, ["insert", value]]);
    if (isPaused) {
      if (animationStep === 0) {
        setExpression(newExpression);
        setAnimationStep(1);
      }
    } else {
      playAnimation(value, newExpression, insertInHash);
    }
  }

  function handleDelete(value: number) {
    const col = value % columnCount;
    const newExpression = `Deleting element: ${value}    ${value} % ${columnCount} = ${col}`;
    setHistory([...history, ["delete", value]]);
    if (isPaused) {
      if (animationStep === 0) {
        setExpression(newExpression);
        setAnimationStep(1);
      }
    } else {
      playAnimation(value, newExpression, deleteFromHash);
    }
  }

  function handleFind(value: number) {
    const col = value % columnCount;
    const newExpression = `Finding element: ${value}    ${value} % ${columnCount} = ${col}`;
    playAnimation(value, newExpression, setFoundCell);
  }

  function stepForward() {
    const [action, value] = history[history.length - 1];
    const col = value % columnCount;
    if (action === "insert") {
      if (animationStep === 1) {
        setBlinkingCol(col);
        handleBlinkingAnimation();
        setAnimationStep(2);
      } else if (animationStep === 2) {
        insertInHash(value);
        setAnimationStep(0);
      }
    } else if (action === "delete") {
      if (animationStep === 1) {
        setBlinkingCol(col);
        handleBlinkingAnimation();
        setAnimationStep(2);
      } else if (animationStep === 2) {
        deleteFromHash(value);
        setAnimationStep(0);
      }
    }
  }
  function stepSwitch(
    lastValue: number,
    func: (value: number) => void,
    expression: string
  ) {
    if (animationStep === 0) {
      func(lastValue);
      setAnimationStep(2);
    } else if (animationStep === 2) {
      const col = lastValue % columnCount;
      setExpression(expression);
      handleBlinkingAnimation();
      setBlinkingCol(col);
      setAnimationStep(1);
    } else if (animationStep === 1) {
      setExpression("");
      setHistory(history.slice(0, -1));
      setAnimationStep(0);
    }
  }
  function stepBack() {
    const [action, lastValue] = history[history.length - 1];
    const col = lastValue % columnCount;
    if (action === "insert") {
      const expresstion = `Inserting element: ${lastValue}    ${lastValue} % ${columnCount} = ${col}`;
      stepSwitch(lastValue, deleteFromHash, expresstion);
    } else if (action === "delete") {
      const expresstion = `Delete element: ${lastValue}    ${lastValue} % ${columnCount} = ${col}`;
      stepSwitch(lastValue, insertInHash, expresstion);
    }
  }

  function skipBack() {
    const [action, lastValue] = history[history.length - 1];
    action === "insert" ? deleteFromHash(lastValue) : insertInHash(lastValue);
    setAnimationStep(0);
    setHistory(history.slice(0, -1));
  }

  function skipForward() {
    const [action, lastValue] = history[history.length - 1];
    action === "insert" ? insertInHash(lastValue) : deleteFromHash(lastValue);
    setAnimationStep(0);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <TopBlock
        insertFunc={handleInsert}
        findFunc={handleFind}
        deleteFunc={handleDelete}
      />
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
        skipBackDisabled={history.length === 0}
        skipBackFunc={() => skipBack()}
        isPaused={isPaused}
        stepBackDisabled={history.length === 0 || !isPaused}
        stepForwardDisabled={
          history.length === 0 || animationStep === 0 || !isPaused
        }
        pauseFunc={() => setIsPaused(!isPaused)}
        stepForwardFunc={() => stepForward()}
        stepBackFunc={() => stepBack()}
        skipForwardDisabled={
          history.length === 0 || animationStep === 0 || !isPaused
        }
        skipForwardFunc={() => skipForward()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#abc4eb",
  },
  hash: {
    height: "80%",
    flexDirection: "row",
    left: 20,
    bottom: 50,
  },
});

export default HashScreen;
