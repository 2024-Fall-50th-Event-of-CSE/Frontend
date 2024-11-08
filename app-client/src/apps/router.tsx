import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
        </Route>
    )
);
