import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar as St } from "react-native";

import { AnimationContainer } from "./src/containers/Animation";
import { HashContainer } from "./src/containers/HashContainer";

import HashScreen from "./src/components/Hash/HashScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <AnimationContainer.Provider>
        <HashContainer.Provider>
          <HashScreen />
        </HashContainer.Provider>
      </AnimationContainer.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: St.currentHeight,
    backgroundColor: "#fff",
  },
});
