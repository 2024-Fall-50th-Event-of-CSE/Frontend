import HomePage from "@/pages/HomePage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<HomePage />} />
        </Route>
    )
);
