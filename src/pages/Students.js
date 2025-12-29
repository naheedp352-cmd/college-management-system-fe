import React, { useState } from "react";
import styles from "./css/StudentDashboard.module.css";

const initialStudents = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", course: "B.Tech", status: "Active", attendance: 72 },
  { id: 2, name: "Anita Verma", email: "anita@gmail.com", course: "MBA", status: "Active", attendance: 88 },
  { id: 3, name: "Karan Singh", email: "karan@gmail.com", course: "BCA", status: "Inactive", attendance: 65 },
];

export default function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", email: "", course: "", status: "Active", attendance: 0 });

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "Active").length;
  const newAdmissions = 8; // mock
  const attendanceToday = "91%";
  const defaulters = students.filter(s => s.attendance < 75).length;

  function openModal(student = null) {
    if (student) setForm(student);
    else setForm({ id: null, name: "", email: "", course: "", status: "Active", attendance: 0 });
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

    if (form.id) {
      setStudents(students.map(s => (s.id === form.id ? form : s)));
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }

    closeModal();
  }

  function deleteStudent(id) {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Student Management</h1>

      {/* KPI SECTION */}
      <div className={styles.kpis}>
        <div className={styles.kpiCard}>
          <h4>Total Students</h4>
          <p>{totalStudents}</p>
        </div>

        <div className={styles.kpiCard}>
          <h4>Active Students</h4>
          <p>{activeStudents}</p>
        </div>

        <div className={styles.kpiCard}>
          <h4>New Admissions</h4>
          <p>{newAdmissions}</p>
        </div>

        <div className={styles.kpiCard}>
          <h4>Attendance Today</h4>
          <p>{attendanceToday}</p>
        </div>
      </div>

      {/* OPERATIONAL INSIGHTS */}
      <div className={styles.insights}>
        <div className={styles.insightCard}>
          <h4>Attendance Defaulters</h4>
          <p>{defaulters} students below 75%</p>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className={styles.tableHeader}>
        <h2>Students</h2>
        <button onClick={() => openModal()} className={styles.addBtn}>
          + Add Student
        </button>
      </div>

      {/* TABLE */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <span className={student.status === "Active" ? styles.active : styles.inactive}>
                  {student.status}
                </span>
              </td>
              <td>{student.attendance}%</td>
              <td className={styles.actions}>
                <button onClick={() => openModal(student)} className={styles.edit}>Edit</button>
                <button onClick={() => deleteStudent(student.id)} className={styles.delete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>{form.id ? "Edit Student" : "Add Student"}</h3>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required />
              <input name="attendance" type="number" placeholder="Attendance %" value={form.attendance} onChange={handleChange} />

              <select name="status" value={form.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className={styles.modalActions}>
                <button type="button" onClick={closeModal} className={styles.cancel}>
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