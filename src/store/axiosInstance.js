import axios from "axios";

// Create an Axios instance
export const api = axios.create({
  baseURL: "https://restaurantapi.bssoln.com/api/",
});

// Axios request interceptor to add Authorization token to every request
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token; // Attach token to request headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor for handling token refresh on 401 errors
api.interceptors.response.use(
  (response) => response, // Pass successful responses through
  async (error) => {
    const originalRequest = error.config; // Get the original request
    if (
      error.response?.status === 401 &&
      !originalRequest._retry // Prevent infinite loop of retries
    ) {
      originalRequest._retry = true; // Mark the request as retried
      try {
        const refreshResponse = await axios.post(
          "https://restaurantapi.bssoln.com/api/Auth/refreshToken",
          {
            refreshToken: sessionStorage.getItem("refreshToken"), // Retrieve refresh token
          }
        );

        if (refreshResponse.status === 200) {
          const newToken = "Bearer " + refreshResponse.data.accessToken;
          const newRefreshToken = refreshResponse.data.refreshToken;

          // Update session storage with new tokens
          sessionStorage.setItem("token", newToken);
          sessionStorage.setItem("refreshToken", newRefreshToken);

          // Update the Authorization header with the new token
          originalRequest.headers.Authorization = newToken;

          // Retry the original request with the new token
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        dispatch(modalActions.id("Login Error"))
        throw refreshError; // Forward the refresh error for further handling
      }
    }

    return Promise.reject(error); // Pass other errors through
  }
);
