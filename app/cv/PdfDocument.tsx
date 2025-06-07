// components/cv/PdfDocument.tsx
import React from "react";
import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import Summary from "@/components/cv/Summary";
import ProfilePdf from "@/components/cv/pdf/ProfilePdf";
import SummaryPdf from "@/components/cv/pdf/SummaryPdf";
import SkillsPdf from "@/components/cv/pdf/Skills copy";
import ExperiencePdf from "@/components/cv/pdf/ExperiencePdf";
import EducationPdf from "@/components/cv/pdf/EducationPdf";
import TrainingPdf from "@/components/cv/pdf/TrainingPdf";
import ProjectsPdf from "@/components/cv/pdf/ProjectsPdf";
import LanguagesPdf from "@/components/cv/pdf/LanguagesPdf";
// Import other Pdf* components for Skills, Experience, etc.

const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 12 },
  section: { marginBottom: 10 },
});

const PdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <ProfilePdf />
    <SummaryPdf/>
    <SkillsPdf/>
    <ExperiencePdf/>
    <EducationPdf/>
    <TrainingPdf/>
    <ProjectsPdf/>
    <LanguagesPdf/>
      {/* <View style={styles.section}>
        <ProfilePdf />
        <SummaryPdf />
      </View>
      <View style={styles.section}>
        <SummaryPdf />
      </View>
      <View style={styles.section}>
        <SkillsPdf />
      </View>
      <View style={styles.section}>
        <ExperiencePdf />
      </View>
      <View style={styles.section}>
        <EducationPdf />
      </View>
      <View style={styles.section}>
        <TrainingPdf />
      </View>
      <View style={styles.section}>
        <ProjectsPdf />
      </View>
      <View style={styles.section}>
        <LanguagesPdf />
      </View> */}
    </Page>
  </Document>
);

export default PdfDocument;
