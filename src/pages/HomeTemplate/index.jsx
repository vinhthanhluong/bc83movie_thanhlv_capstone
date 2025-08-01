import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <div className="mt-[var(--header)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
