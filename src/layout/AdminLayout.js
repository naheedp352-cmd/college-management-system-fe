import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout() {
  return (
    <>
      <Navbar />
      <AdminSidebar />

      <main
        style={{
          marginLeft: "240px",
          //marginTop: "64px",
          padding: "24px",
          background: "#f5f6fa",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
