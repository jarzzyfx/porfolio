import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DrawerContextProvider } from "./contexts/contextsProviders/DrawercontextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DrawerContextProvider>
        <Layout />
      </DrawerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
