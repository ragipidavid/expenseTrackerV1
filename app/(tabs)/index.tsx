import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container1}>
        <Text style={styles.title}>You've spent $x in the last week</Text>
      </View>
      <ScrollView style={styles.container2}>
        <Text style={styles.title}>You've spent $x in the last week</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {},
});
