// src/api/internshipApi.js
const API_URL = "https://internshala.com/hiring/search"; // [cite: 2]

export const fetchInternships = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.internships; // Assuming the API returns an object with an 'internships' array
  } catch (error) {
    console.error("Error fetching internships:", error);
    return [];
  }
};
