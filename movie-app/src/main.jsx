import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import StarRating from "./StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/*
    burasi RatingStar componentini hazirlarken kullandigimiz kisimdi
    <StarRating maxRating={20} color="red" />
    <StarRating maxRating={10} size={20} color="green" />
    <StarRating maxRating={10} size={30} color="black" /> */}
  </StrictMode>
);
