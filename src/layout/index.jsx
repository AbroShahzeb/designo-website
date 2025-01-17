import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

export const Layout = () => {
  return (
    <main className="w-full min-h-dvh overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
