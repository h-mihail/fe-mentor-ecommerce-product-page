import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./output.css";

import App from "./components/App.jsx";
import { Layout } from "./components/Layout.jsx";

const Main = () => {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/fe-mentor-ecommerce-product-page"
      : "";
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={`${basePath}`} element={<Layout />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
