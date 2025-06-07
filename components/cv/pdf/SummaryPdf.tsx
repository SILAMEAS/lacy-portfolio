import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

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
  paragraph: {
    fontSize: 11,
    marginBottom: 8,
    lineHeight: 1.4,
  },
});

const SummaryPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>About Me</Text>
    <Text style={styles.paragraph}>
      Passionate and motivated Frontend Developer with a Bachelor's degree in
      Computer Science from the Royal University of Phnom Penh. Skilled in
      developing responsive and scalable web and mobile applications using
      modern technologies like JavaScript, TypeScript, React, and Next.js.
    </Text>
    <Text style={styles.paragraph}>
      Experienced in backend development with Django REST Framework, Node.js,
      NestJS, and Spring Boot. Comfortable working across the full stack and
      integrating third-party tools like Strapi and Convex. Always eager to
      learn new technologies, contribute to open-source projects, and build
      impactful digital solutions.
    </Text>
  </View>
);

export default SummaryPdf;
