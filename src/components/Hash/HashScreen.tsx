import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";

import { HashContainer } from "../../containers/HashContainer";

import TopBlock from "../TopBlock";
import HashCell from "./HashCell";
import HashColumn from "./HashColumn";

const HashScreen = () => {
  const { hash, insertInHash } = HashContainer.useContainer();

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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <TopBlock insertFunc={insertInHash} />
      <Text>Halo</Text>
      <View style={styles.hash}>
        {hash.map((col, i) => {
          return (
            //<Button key={i} title={i.toString()} onPress={() => {}}></Button>
            //<HashCell key={i} value={i}></HashCell>
            <HashColumn key={i} index={i} values={col} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#737373",
  },
  hash: {
    position: "absolute",
    flexDirection: "row",
    left: 20,
    bottom: 20,
  },
});

export default HashScreen;
