import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Forecast from "./component/forecast/Forecast";
import Monitor from "./component/monitor/Monitor";
import Analysis from "./component/analysis/Analysis";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
