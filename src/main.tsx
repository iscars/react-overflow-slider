import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Examples from "@/examples";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Examples />
  </StrictMode>,
);
