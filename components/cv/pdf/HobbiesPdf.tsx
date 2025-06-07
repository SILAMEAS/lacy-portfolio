import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const hobbies = [
  "Exploring new programming technologies",
  "Cloning and researching modern apps",
  "Open-source contribution and continuous learning",
];

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
    marginBottom: 40,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 4,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 11,
    marginLeft: 12,
    marginBottom: 4,
  },
});

const HobbiesPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Hobbies</Text>
    {hobbies.map((item) => (
      <Text key={item} style={styles.listItem}>• {item}</Text>
    ))}
  </View>
);

export default HobbiesPdf;
