import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar as St } from "react-native";

import { HashContainer } from "./src/containers/HashContainer";

import HashScreen from "./src/components/Hash/HashScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <HashContainer.Provider>
        <HashScreen />
      </HashContainer.Provider>
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
