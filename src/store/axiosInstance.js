import axios from "axios";


const token = sessionStorage.getItem("token");
// Create an Axios instance
const api = axios.create({
  baseURL: "https://restaurantapi.bssoln.com/api",
});

const isTokenExpired = () => {
  const expiryTime = sessionStorage.getItem("refreshTokenExpiryTime");
  console.log(expiryDate);
  if (!expiryTime) return false; // Assume expired if no expiry time is stored
  const expiryDate = new Date(expiryTime);
  return new Date() >= expiryDate; // Check if current time is past expiry
};


// Refresh access token function
export const refreshAccessToken = async () => {
  const refreshToken = sessionStorage.getItem("refreshToken");

  if(!refreshToken || !isTokenExpired()){
    console.log("Ref token no need");
    return sessionStorage.getItem("accessToken");
  }
  try {
    const response = await axios.post("https://restaurantapi.bssoln.com/api/Auth/refreshToken", {
      refreshToken: refreshToken, // Assumes the refresh token is stored locally
    });
    const newToken = "Bearer " + response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;

    const newRefreshTokenExpiryTime = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
}).format(new Date(response.data.refreshTokenExpiryTime));
    // sessionStorage.removeItem("token");
    
    sessionStorage.setItem("token", newToken); 
    sessionStorage.setItem("refreshToken", newRefreshToken); 
    sessionStorage.setItem("token", newRefreshTokenExpiryTime); 
    return newToken;
  } catch (error) {
    console.error("Failed to refresh token", error);
    throw error; // Handle refresh failure
  }
};

// Request interceptor to attach the access token
api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loop
      try {
        const newToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // Retry original request with new token
      } catch (refreshError) {
        // Handle refresh failure (e.g., logout user)
        console.error("Token refresh failed", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export default api;
