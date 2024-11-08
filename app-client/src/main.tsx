import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/apps/index.css";
import App from "@/apps/App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
