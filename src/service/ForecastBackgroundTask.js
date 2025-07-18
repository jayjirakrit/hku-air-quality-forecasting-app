import React, { useEffect } from "react";
import { getAirQualityForecast } from "./AirQualityService";

const ForecastBackgroundTask = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheKey = "forecast_aq";
        const cacheRaw = localStorage.getItem(cacheKey);
        const cacheResult = cacheRaw ? JSON.parse(cacheRaw) : null;
        const now = new Date();
        const nowDateStr = now.toISOString().split("T")[0];
        let cachedDateStr = null;
        // Cache will valid only same day
        if (cacheResult && cacheResult.date) {
          cachedDateStr = new Date(cacheResult.date)
            .toISOString()
            .split("T")[0];
        }
        const isNextDayOrLater = cachedDateStr !== nowDateStr;
        // Fetch only cache expired or no data
        if (
          !cacheResult ||
          !cacheResult?.data?.length > 0 ||
          isNextDayOrLater
        ) {
          const response = await getAirQualityForecast();
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ date: new Date().toISOString(), data: response })
          );
          console.log("Data updated in localStorage");
        }
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    // Initial fetch on mount
    fetchData();
    // Set interval for every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return null; // Background task only, no UI
};

export default ForecastBackgroundTask;
