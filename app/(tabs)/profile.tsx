import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { View, Text } from "@/components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function ProfileScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  }, [name]);
  const getName = async () => {
    try {
      console.log("hello");
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        // value previously stored
        setName(value);
      } else {
        console.log("no name");
      }
    } catch (e) {
      // error reading value
      console.log("No name for user", e);
    }
  };
  const setUserName = async () => {
    try {
      const jsonValue = JSON.stringify("david");
      await AsyncStorage.setItem("name", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {name} </Text>
      <TouchableOpacity onPress={() => getName()}>
        <Text style={styles.title}>Press to get name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUserName()}>
        <Text style={styles.title}>set name</Text>
      </TouchableOpacity>
      <Text style={styles.title}> </Text>
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
