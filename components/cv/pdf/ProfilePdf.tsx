// components/PdfProfile.tsx
import React from "react";
import { Document, Page, Text, View, Image, Link, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  profileContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  infoContainer: { marginLeft: 20, flex: 1 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 4 },
  role: { color: "#2563eb", marginBottom: 4 }, // blue-600
  location: { marginBottom: 8 },
  link: { color: "#3b82f6", textDecoration: "underline", marginBottom: 4 },
});

const ProfilePdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          src="https://media.licdn.com/dms/image/v2/D5603AQGpLqWf-a-p1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722511483957?e=2147483647&v=beta&t=_mB_0xBgvLpp8_iVAg0Joz1f8Qhyg5VAXgF-iHwWtVc"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Meas Sila</Text>
          <Text style={styles.role}>Frontend Developer</Text>
          <Text style={styles.location}>Phnom Penh, Cambodia</Text>

          <Link style={styles.link} src="https://sila-portfolio.vercel.app/">
            Portfolio: https://sila-portfolio.vercel.app/
          </Link>
          <Link style={styles.link} src="https://github.com/SILAMEAS">
            GitHub: https://github.com/SILAMEAS
          </Link>
          <Link style={styles.link} src="https://kh.linkedin.com/in/meas-sila-204b1031b">
            LinkedIn: https://kh.linkedin.com/in/meas-sila-204b1031b
          </Link>
        </View>
      </View>
    </Page>
  </Document>
);

export default ProfilePdf;
