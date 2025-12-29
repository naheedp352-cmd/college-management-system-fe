import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import EmployeeRegistration from "./pages/EmployeeRegistration";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Default app entry */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginForm />} />
      </Route>

      {/* Protected admin routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee/registration" element={<EmployeeRegistration />} />
          <Route path="/students" element={<Students />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
        </Route>
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
