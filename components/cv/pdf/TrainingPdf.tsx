import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const training = [
  "2020: C, C++, OOP (RUPP & ANT Institute)",
  "2021: HTML, CSS, JavaScript (Udemy, SoloLearn)",
  "2022: Bootstrap, Tailwind, ReactJS, Express, JSON, PHP, MERN",
  "Currently: Learning Next.js, NestJS, Spring Boot, Django, and Python",
];

const styles = StyleSheet.create({
  section: {
    marginTop: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 4,
    marginBottom: 8,
  },
  list: {
    paddingLeft: 16,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 4,
  },
});

const TrainingPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Training Courses</Text>
    <View style={styles.list}>
      {training.map((item) => (
        <Text key={item} style={styles.listItem}>• {item}</Text>
      ))}
    </View>
  </View>
);

export default TrainingPdf;
