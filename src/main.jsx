import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { WeatherApp } from "./WeatherApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <WeatherApp />
    </React.StrictMode>
);
