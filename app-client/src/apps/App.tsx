import { RouterProvider } from "react-router-dom";
import { router } from "@/apps/router";

export default function App() {
    return <RouterProvider router={router} />;
}
