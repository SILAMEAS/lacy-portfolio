import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const education = [
  "BSc in Computer Science, Royal University of Phnom Penh (2019–2023)",
  "Pannasastra University (English – 2019–2020)",
  "ANT Institute (C++/OOP – 2019–2020)",
  "Chea Sim Samaki High School (2013–2019)",
  "Ou Bek Korm Primary School (2008–2013)",
];

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
    marginBottom: 12,
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

const EducationPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Education</Text>
    {education.map((item) => (
      <Text key={item} style={styles.listItem}>• {item}</Text>
    ))}
  </View>
);

export default EducationPdf;
