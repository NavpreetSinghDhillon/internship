// src/hooks/useFilter.js
import { useState, useEffect, useCallback } from "react";

const useFilter = (initialItems = []) => {
  const [items, setItems] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState(initialItems);
  const [filters, setFilters] = useState({
    profile: [],
    location: [],
    duration: [],
  });

  useEffect(() => {
    setItems(initialItems);
    setFilteredItems(initialItems);
    // Reset filters when initialItems change, if necessary
    // setFilters({ profile: [], location: [], duration: [] });
  }, [initialItems]);

  const applyFilters = useCallback(() => {
    let currentFiltered = [...items];

    // Filter by Profile [cite: 3]
    if (filters.profile.length > 0) {
      currentFiltered = currentFiltered.filter((item) =>
        filters.profile.some(
          (profile) =>
            item.profile_name &&
            item.profile_name.toLowerCase().includes(profile.toLowerCase())
        )
      );
    }

    // Filter by Location [cite: 3]
    if (filters.location.length > 0) {
      currentFiltered = currentFiltered.filter((item) =>
        filters.location.some(
          (loc) =>
            item.location_names &&
            item.location_names.some(
              (loc_name) =>
                loc_name.name &&
                loc_name.name.toLowerCase().includes(loc.toLowerCase())
            )
        )
      );
    }

    // Filter by Duration [cite: 4] (Assuming duration is in months, e.g., 1, 2, 3...)
    if (filters.duration.length > 0) {
      currentFiltered = currentFiltered.filter((item) =>
        filters.duration.includes(String(item.duration))
      );
    }

    setFilteredItems(currentFiltered);
  }, [items, filters]);

  useEffect(() => {
    applyFilters(); // Re-apply filters whenever filters or items change
  }, [filters, items, applyFilters]);

  const updateFilter = useCallback((filterType, value, isChecked) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType] || [];
      if (isChecked) {
        return {
          ...prevFilters,
          [filterType]: [...currentValues, value],
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: currentValues.filter((item) => item !== value),
        };
      }
    });
  }, []);

  return { filteredItems, filters, updateFilter };
};

export default useFilter;
