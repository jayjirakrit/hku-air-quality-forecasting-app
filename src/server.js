const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

const BACKEND_VM_INTERNAL_IP = process.env.BACKEND_VM_INTERNAL_IP || "10.170.0.30";
const BACKEND_VM_PORT = process.env.BACKEND_VM_PORT || "8000";

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));

// --- API Proxy Routes ---
app.get("/api/stations", async (req, res) => {
  try {
    const backendUrl = `http://${BACKEND_VM_INTERNAL_IP}:${BACKEND_VM_PORT}/api/stations`;
    console.log(`[Proxy] GET /api/stations -> ${backendUrl}`);
    const backendResponse = await axios.get(backendUrl);
    res.status(backendResponse.status).json(backendResponse.data);
  } catch (error) {
    console.error(`[Proxy Error] GET /api/stations: ${error.message}`);
    handleProxyError(error, res);
  }
});

// Proxy route for /api/forecast-air-quality (POST)
app.post("/api/forecast-air-quality", async (req, res) => {
  try {
    const backendUrl = `http://${BACKEND_VM_INTERNAL_IP}:${BACKEND_VM_PORT}/api/forecast-air-quality`;
    console.log(`[Proxy] POST /api/forecast-air-quality -> ${backendUrl}`);
    // Forward the request body
    const backendResponse = await axios.post(backendUrl, req.body);
    res.status(backendResponse.status).json(backendResponse.data);
  } catch (error) {
    console.error(
      `[Proxy Error] POST /api/forecast-air-quality: ${error.message}`
    );
    handleProxyError(error, res);
  }
});

// Proxy route for /api/real-time-air-quality (GET)
app.get("/api/real-time-air-quality", async (req, res) => {
  try {
    // Forward query parameters if any (e.g., ?station=station_1)
    const backendUrl = `http://${BACKEND_VM_INTERNAL_IP}:${BACKEND_VM_PORT}/api/real-time-air-quality`;
    console.log(`[Proxy] GET /api/real-time-air-quality -> ${backendUrl}`);
    const backendResponse = await axios.get(backendUrl, { params: req.query });
    res.status(backendResponse.status).json(backendResponse.data);
  } catch (error) {
    console.error(
      `[Proxy Error] GET /api/real-time-air-quality: ${error.message}`
    );
    handleProxyError(error, res);
  }
});

// Proxy route for /api/recommendations (POST)
// Note: Your client-side code shows a POST, but the example response is hardcoded.
// If it's truly a POST to the backend, it might expect a body (e.g., AirQualityData).
app.post("/api/recommendations", async (req, res) => {
  try {
    const backendUrl = `http://${BACKEND_VM_INTERNAL_IP}:${BACKEND_VM_PORT}/api/recommendations`;
    console.log(
      `[Proxy] POST /api/recommendations -> ${backendUrl} with body:`,
      req.body
    );
    // Forward the request body
    const backendResponse = await axios.post(backendUrl, req.body);
    res.status(backendResponse.status).json(backendResponse.data);
  } catch (error) {
    console.error(`[Proxy Error] POST /api/recommendations: ${error.message}`);
    handleProxyError(error, res);
  }
});

// Helper function to handle proxy errors
function handleProxyError(error, res) {
  if (error.response) {
    // The backend responded with a status code outside of 2xx range
    console.error("Backend Response Data:", error.response.data);
    console.error("Backend Response Status:", error.response.status);
    res.status(error.response.status).json(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received (e.g., network issue, backend not running)
    console.error(
      "No response received from backend. Request details:",
      error.request
    );
    res
      .status(503)
      .json({ error: "Backend service unavailable or unreachable." });
  } else {
    // Something else happened in setting up the request
    console.error("Error during proxy request setup:", error.message);
    res.status(500).json({ error: "Internal server error during proxying." });
  }
}

// --- Start the Server ---
// App Engine provides the port via the PORT environment variable.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App Engine Node.js proxy server listening on port ${PORT}`);
  console.log(
    `Backend target: http://${BACKEND_VM_INTERNAL_IP}:${BACKEND_VM_PORT}`
  );
});
