import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Alert from "./_components/Alert";
import { useAuthStore } from "../../store/auth.store";

export default function HomeTemplate() {
  const alert = useAuthStore((state) => state.alert);
  return (
    <>
      <Header />
      <div className="mt-[var(--header)]">
        <Outlet />
      </div>
      {alert && <Alert color={alert.color} text={alert.text} />}
       {/* <Alert color={'blue'} text={'alert.text'} /> */}
      <Footer />
    </>
  );
}
