import React, { useState } from "react";
import styles from "./css/Attendance.module.css";

const initialAttendance = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "B.Tech",
    status: "Present",
    percentage: 72,
  },
  {
    id: 2,
    name: "Anita Verma",
    course: "MBA",
    status: "Present",
    percentage: 88,
  },
  {
    id: 3,
    name: "Karan Singh",
    course: "BCA",
    status: "Absent",
    percentage: 65,
  },
];

export default function Attendance() {
  const [attendance, setAttendance] = useState(initialAttendance);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    course: "",
    status: "Present",
    percentage: 0,
  });

  // KPIs
  const totalStudents = attendance.length;
  const presentToday = attendance.filter(a => a.status === "Present").length;
  const absentToday = attendance.filter(a => a.status === "Absent").length;
  const overallAttendance = Math.round(
    attendance.reduce((sum, a) => sum + a.percentage, 0) / totalStudents
  );
  const defaulters = attendance.filter(a => a.percentage < 75).length;

  function openModal(record) {
    setForm(record);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setAttendance(
      attendance.map(a => (a.id === form.id ? form : a))
    );

    closeModal();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Attendance Management</h1>

      {/* KPIs */}
      <div className={styles.kpis}>
        <div className={styles.kpiCard}>
          <h4>Total Students</h4>
          <p>{totalStudents}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Present Today</h4>
          <p>{presentToday}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Absent Today</h4>
          <p>{absentToday}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Overall Attendance</h4>
          <p>{overallAttendance}%</p>
        </div>
      </div>

      {/* Insights */}
      <div className={styles.insights}>
        <div className={styles.insightCard}>
          <h4>Attendance Defaulters</h4>
          <p>{defaulters} students below 75%</p>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableHeader}>
        <h2>Student Attendance</h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Status</th>
            <th>Attendance %</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.course}</td>
              <td>
                <span
                  className={
                    record.status === "Present"
                      ? styles.present
                      : styles.absent
                  }
                >
                  {record.status}
                </span>
              </td>
              <td>{record.percentage}%</td>
              <td>
                <button
                  onClick={() => openModal(record)}
                  className={styles.edit}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Update Attendance</h3>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <input value={form.name} disabled />
              <input value={form.course} disabled />

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>

              <input
                name="percentage"
                type="number"
                placeholder="Attendance %"
                value={form.percentage}
                onChange={handleChange}
              />

              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.cancel}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.save}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
