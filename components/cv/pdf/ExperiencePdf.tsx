import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const experiences = [
  {
    title: "Frontend Developer - ALLWEB Company IT (2022–Present)",
    details: [
      "Developed frontend UI for business and e-commerce websites",
      "Integrated REST APIs and managed UI state using Redux Toolkit",
    ],
  },
  {
    title: "Frontend Intern - ANT School (2021 - 7 months)",
    details: [
      "Learned basic web development and contributed to internal tools",
      "Built small projects with HTML, CSS, and JavaScript",
    ],
  },
  {
    title: "Freelance Projects (6 months)",
    details: [
      "Delivered responsive websites using React and Tailwind CSS",
      "Worked on RESTful API integration and mobile responsiveness",
    ],
  },
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
  experienceTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  detailItem: {
    fontSize: 11,
    marginLeft: 12,
    marginBottom: 2,
  },
  detailsList: {
    marginBottom: 8,
  },
});

const ExperiencePdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Experience</Text>
    {experiences.map((exp) => (
      <View key={exp.title} style={styles.detailsList}>
        <Text style={styles.experienceTitle}>{exp.title}</Text>
        {exp.details.map((detail, idx) => (
          <Text key={idx} style={styles.detailItem}>• {detail}</Text>
        ))}
      </View>
    ))}
  </View>
);

export default ExperiencePdf;
