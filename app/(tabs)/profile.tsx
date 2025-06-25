import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "@/components/Themed";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
