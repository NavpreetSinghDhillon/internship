// src/components/InternshipList/InternshipList.js
import React from "react";
import InternshipCard from "../InternshipCard/InternshipCard";
import styles from "./InternshipList.css";

const InternshipList = ({ internships }) => {
  if (!internships || internships.length === 0) {
    return (
      <p className={styles.noInternships}>
        No internships found matching your criteria.
      </p>
    );
  }

  return (
    <div className={styles.internshipList}>
      {internships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </div>
  );
};

export default InternshipList;
