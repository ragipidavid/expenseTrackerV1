import { FlatList, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    title: "First Item",
    moneySpent: "$20",
  },
  {
    id: "2",
    title: "Second Item",
    moneySpent: "$20",
  },
  {
    id: "3",
    title: "Third Item",
    moneySpent: "$20",
  },
  {
    id: "4",
    title: "Third Item",
    moneySpent: "$20",
  },
  {
    id: "5",
    title: "Third Item",
    moneySpent: "$20",
  },
];

type ItemProps = { title: string; moneySpent: string };

const Item = ({ title, moneySpent }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{moneySpent}</Text>
  </View>
);

export default function ExpensesScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <Text style={styles.title}>You've spent $x in the last week</Text>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} moneySpent={item.moneySpent} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
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
  item: {
    backgroundColor: "#f9c2ff",
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
