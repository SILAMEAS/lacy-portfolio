import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const languages = [
  "Khmer – Native",
  "English – Normal",
];

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
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

const LanguagesPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Languages</Text>
    {languages.map((item) => (
      <Text key={item} style={styles.listItem}>• {item}</Text>
    ))}
  </View>
);

export default LanguagesPdf;
