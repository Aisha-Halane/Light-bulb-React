import React from "react";
import { createRoot } from "react-dom/client";

import Light from "./Components/Light";

import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
  <div>
    <Light/>
  </div>

)