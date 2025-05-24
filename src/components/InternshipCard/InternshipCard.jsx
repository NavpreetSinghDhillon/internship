// src/components/InternshipCard/InternshipCard.js
import React from "react";
import styles from "./InternshipCard.css";

const InternshipCard = ({ internship }) => {
  if (!internship) return null;

  const {
    id,
    profile_name, // [cite: 3]
    company_name,
    stipend,
    start_date,
    duration, // [cite: 4]
    location_names, // [cite: 3]
    is_fresh_opening,
    posted_on,
  } = internship;

  const formattedStipend =
    stipend && stipend.salary ? `₹${stipend.salary}` : "N/A";
  const formattedLocations =
    location_names && location_names.length > 0
      ? location_names.map((loc) => loc.name).join(", ")
      : "Remote";

  return (
    <div className={styles.card}>
      {is_fresh_opening && <div className={styles.freshTag}>Fresh Opening</div>}
      <h3 className={styles.profileName}>{profile_name}</h3> {/* [cite: 3] */}
      <p className={styles.companyName}>{company_name}</p>
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span className={styles.icon}>📍</span>
          <p>{formattedLocations}</p> {/* [cite: 3] */}
        </div>
        <div className={styles.detailItem}>
          <span className={styles.icon}>💰</span>
          <p>{formattedStipend}</p>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.icon}>⏳</span>
          <p>
            {duration} {duration > 1 ? "months" : "month"}
          </p>{" "}
          {/* [cite: 4] */}
        </div>
        <div className={styles.detailItem}>
          <span className={styles.icon}>🗓️</span>
          <p>{start_date}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.postedOn}>Posted: {posted_on}</span>
        <a
          href={`https://internshala.com/internship/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewDetailsBtn}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default InternshipCard;
