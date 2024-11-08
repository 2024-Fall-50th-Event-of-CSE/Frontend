import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <main className="w-full h-screen max-w-[600px] p-[10px] mx-auto border-[1px] border-red-500">
            <Outlet />
        </main>
    );
}
