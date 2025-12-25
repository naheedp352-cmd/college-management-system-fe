import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/AdminSidebar.module.css";

export default function AdminSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.heading}>College Admin</h2>

      <nav className={styles.menu}>
        <NavLink to="/dashboard" className={styles.link}>
          Dashboard
        </NavLink>

        <NavLink to="/students" className={styles.link}>
          Students
        </NavLink>

        <NavLink to="/faculty" className={styles.link}>
          Faculty
        </NavLink>

        <NavLink to="/courses" className={styles.link}>
          Courses
        </NavLink>

        <NavLink to="/attendance" className={styles.link}>
          Attendance
        </NavLink>
      </nav>
    </aside>
  );
}
