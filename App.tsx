import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HashScreen from "./src/components/HashScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HashScreen />
      <StatusBar style="auto" backgroundColor="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
