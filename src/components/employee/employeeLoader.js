// src/loaders/employeeLoader.js

import axios from "axios";

// Loader function to fetch employee data
export async function employeeLoader() {
  try {
    // Fetch data from the API
    const response = await axios.get(`https://restaurantapi.bssoln.com/api/Employee/datatable`);
    // Return the data in a format that can be accessed using useLoaderData
    return response.data.data;
  } catch (error) {
    // Handle errors by returning null or an empty array, you can also customize error handling
    console.error("Error fetching employees:", error);
    throw new Error("Failed to load employees data.");
  }
}
