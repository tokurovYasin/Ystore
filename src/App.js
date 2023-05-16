import { Button } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routers/MainRoutes";
import PrimarySearchAppBar from "./components/Navbar/Navbar2";
import Navbar3 from "./components/Navbar/Navbar3";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <PrimarySearchAppBar />
      <Navbar3 />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
