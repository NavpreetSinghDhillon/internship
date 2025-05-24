// src/pages/SearchPage/SearchPage.js
import React, { useState, useEffect, useMemo } from "react";
import { fetchInternships } from "../../api/internshipApi"; // [cite: 2]
import useFilter from "../../components/hooks/useFilter"; // [cite: 4]
import Filters from "../../components/Filters/Filters"; // [cite: 3, 4]
import InternshipList from "../../components/InternshipList/InternshipList";
import styles from "./SearchPage.css";

const SearchPage = () => {
  const [allInternships, setAllInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the custom filter hook [cite: 4]
  const { filteredItems, filters, updateFilter } = useFilter(allInternships);

  useEffect(() => {
    const getInternships = async () => {
      setLoading(true);
      try {
        const data = await fetchInternships(); // [cite: 2]
        setAllInternships(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch internships. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getInternships();
  }, []);

  // Extract unique filter options from all internships [cite: 3, 4]
  const availableOptions = useMemo(() => {
    const profiles = new Set();
    const locations = new Set();
    const durations = new Set(); // Storing as numbers

    allInternships.forEach((internship) => {
      if (internship.profile_name) {
        profiles.add(internship.profile_name); // [cite: 3]
      }
      if (internship.location_names) {
        internship.location_names.forEach((loc) => {
          if (loc.name) locations.add(loc.name); // [cite: 3]
        });
      }
      if (internship.duration) {
        durations.add(internship.duration); // [cite: 4]
      }
    });

    // Sort durations numerically
    const sortedDurations = Array.from(durations).sort((a, b) => a - b);

    return {
      profiles: Array.from(profiles).sort(),
      locations: Array.from(locations).sort(),
      durations: sortedDurations,
    };
  }, [allInternships]);

  if (loading) {
    return <div className={styles.loading}>Loading internships...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.searchPageContainer}>
      <Filters
        filters={filters} // [cite: 3, 4]
        updateFilter={updateFilter} // [cite: 3, 4]
        availableOptions={availableOptions} // [cite: 3, 4]
      />
      <InternshipList internships={filteredItems} /> {/* [cite: 2] */}
    </div>
  );
};

export default SearchPage;
