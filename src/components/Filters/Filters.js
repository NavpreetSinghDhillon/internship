// src/components/Filters/Filters.js
import React from "react";
import styles from "./Filters.css";

const Filters = ({ filters, updateFilter, availableOptions }) => {
  return (
    <div className={styles.filtersContainer}>
      <h3>Filters</h3>
      <div className={styles.filterSection}>
        <h4>Profile</h4> {/* [cite: 3] */}
        {availableOptions.profiles.map((profile) => (
          <label key={profile} className={styles.filterItem}>
            <input
              type="checkbox"
              checked={filters.profile.includes(profile)}
              onChange={(e) =>
                updateFilter("profile", profile, e.target.checked)
              }
            />
            {profile}
          </label>
        ))}
      </div>

      <div className={styles.filterSection}>
        <h4>Location</h4> {/* [cite: 3] */}
        {availableOptions.locations.map((location) => (
          <label key={location} className={styles.filterItem}>
            <input
              type="checkbox"
              checked={filters.location.includes(location)}
              onChange={(e) =>
                updateFilter("location", location, e.target.checked)
              }
            />
            {location}
          </label>
        ))}
      </div>

      <div className={styles.filterSection}>
        <h4>Duration (in months)</h4> {/* [cite: 4] */}
        {availableOptions.durations.map((duration) => (
          <label key={duration} className={styles.filterItem}>
            <input
              type="checkbox"
              checked={filters.duration.includes(String(duration))}
              onChange={(e) =>
                updateFilter("duration", String(duration), e.target.checked)
              }
            />
            {duration} {duration === 1 ? "month" : "months"}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
