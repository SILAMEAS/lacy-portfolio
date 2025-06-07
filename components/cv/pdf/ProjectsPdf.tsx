import React from "react";
import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

const projects = [
  "WOWNOW – Full stack delivery system (Spring Boot + Next.js)",
  "Portfolio Website – Built with NestJS and Next.js",
  "Discord Clone – Built with Next.js and Prisma",
  "Trello Board Clone – Built with Next.js",
  "Farmskin Website – Real business site (Next.js + Spring Boot)",
  "AI Email Template Generator – Next.js + Convex + AI",
  "Signature Project - https://certigna.io"
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
  link: {
    color: 'blue',
    textDecoration: 'underline',
  }
});

const ProjectsPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Notable Projects</Text>
    {projects.map((item) => {
      const urlMatch = item.match(/(https?:\/\/[^\s]+)/);
      if (urlMatch) {
        const [url] = urlMatch;
        const textBeforeUrl = item.replace(url, '').trim();
        return (
          <Text key={item} style={styles.listItem}>
            • {textBeforeUrl}{" "}
            <Link src={url} style={styles.link}>
              {url}
            </Link>
          </Text>
        );
      }
      return <Text key={item} style={styles.listItem}>• {item}</Text>;
    })}
  </View>
);

export default ProjectsPdf;
