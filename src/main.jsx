import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer } from 'react-toastify';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from "./routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <BrowserRouter>
    <AppRouter />
    <ToastContainer />
  </BrowserRouter>
  //</StrictMode>,
);
