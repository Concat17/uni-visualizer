import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const HashScreen = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  useEffect(() => {
    changeScreenOrientation();
  });

  return (
    <View style={styles.container}>
      <Text>Halo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f205",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HashScreen;
