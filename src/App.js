import { Button } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routers/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
