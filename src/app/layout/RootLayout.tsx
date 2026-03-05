import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";  

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />           {/* ← All page content renders here */}
      </main>
      {/* Optional: Footer later */}
    </div>
  );
}