import { StyleSheet, Text, View } from "react-native";
import Donates from "../../SampleData";

import CardComponent from "../components/CardComponent";

export default function DonateList() {
  return (
    <View style={styles.container}>
      <CardComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
