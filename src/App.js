import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/exercise/:id", element: <ExerciseDetails /> },
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />

      <App />

      <Footer />
    </Box>
  );
};

export default AppWrapper;
