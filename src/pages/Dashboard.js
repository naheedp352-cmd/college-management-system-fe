import React from "react";
import styles from "./css/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.heading}>Dashboard</h1>

      {/* KPI Cards */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Students</h3>
          <p>1,245</p>
        </div>

        <div className={styles.card}>
          <h3>Total Faculty</h3>
          <p>87</p>
        </div>

        <div className={styles.card}>
          <h3>Courses</h3>
          <p>42</p>
        </div>

        <div className={styles.card}>
          <h3>Today Attendance</h3>
          <p>92%</p>
        </div>
      </div>
    </div>
  );
}
