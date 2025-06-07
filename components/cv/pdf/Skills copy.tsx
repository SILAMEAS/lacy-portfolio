import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const skills = [
  { label: "Frontend", value: "JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, MUI, ShadCN, NativeBase" },
  { label: "Backend", value: "Django REST Framework, Spring Boot, Node.js, NestJS, Express.js" },
  { label: "Full Stack", value: "Next.js, MERN Stack" },
  { label: "Mobile Development", value: "React Native, Flutter" },
  { label: "API & CMS", value: "Strapi, Convex" },
  { label: "Databases", value: "PostgreSQL (Neon, Aiven), MongoDB, MySQL" },
  { label: "Tools", value: "Git, GitHub, Figma, Trello, Jira, Vercel, Render, Railway, UptimeRobot, Clerk, Swagger, Kinde, Cloudinary" },
  { label: "ORM", value: "Prisma, TypeORM" },
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
    marginBottom: 3,
  },
  label: {
    fontWeight: "bold",
  },
});

const SkillsPdf = () => (
  <View style={styles.section}>
    <Text style={styles.header}>Technical Skills</Text>
    {skills.map(({ label, value }) => (
      <Text key={label} style={styles.listItem}>
        <Text style={styles.label}>{label}:</Text> {value}
      </Text>
    ))}
  </View>
);

export default SkillsPdf;
