import React, { useState } from "react";
import styles from "./css/Faculty.module.css";

const initialFaculty = [
  { id: 1, name: "Dr. Amit Kumar", email: "amit@college.edu", department: "Computer Science", status: "Active" },
  { id: 2, name: "Prof. Neha Jain", email: "neha@college.edu", department: "Management", status: "Active" },
  { id: 3, name: "Dr. Rohit Mehra", email: "rohit@college.edu", department: "Mathematics", status: "Inactive" },
];

export default function Faculty() {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", email: "", department: "", status: "Active" });

  const totalFaculty = faculty.length;
  const activeFaculty = faculty.filter(f => f.status === "Active").length;
  const newJoinees = 3; // mock
  const departments = new Set(faculty.map(f => f.department)).size;
  const onLeaveToday = 2; // mock

  function openModal(member = null) {
    if (member) setForm(member);
    else setForm({ id: null, name: "", email: "", department: "", status: "Active" });
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
      setFaculty(faculty.map(f => (f.id === form.id ? form : f)));
    } else {
      setFaculty([...faculty, { ...form, id: Date.now() }]);
    }

    closeModal();
  }

  function deleteFaculty(id) {
    if (window.confirm("Delete this faculty member?")) {
      setFaculty(faculty.filter(f => f.id !== id));
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Faculty Management</h1>

      {/* KPIs */}
      <div className={styles.kpis}>
        <div className={styles.kpiCard}>
          <h4>Total Faculty</h4>
          <p>{totalFaculty}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Active Faculty</h4>
          <p>{activeFaculty}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>New Joinees</h4>
          <p>{newJoinees}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Departments</h4>
          <p>{departments}</p>
        </div>
      </div>

      {/* Insights */}
      <div className={styles.insights}>
        <div className={styles.insightCard}>
          <h4>Faculty on Leave Today</h4>
          <p>{onLeaveToday} members</p>
        </div>
      </div>

      {/* Table Header */}
      <div className={styles.tableHeader}>
        <h2>Faculty List</h2>
        <button onClick={() => openModal()} className={styles.addBtn}>
          + Add Faculty
        </button>
      </div>

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {faculty.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.department}</td>
              <td>
                <span className={member.status === "Active" ? styles.active : styles.inactive}>
                  {member.status}
                </span>
              </td>
              <td className={styles.actions}>
                <button onClick={() => openModal(member)} className={styles.edit}>Edit</button>
                <button onClick={() => deleteFaculty(member.id)} className={styles.delete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>{form.id ? "Edit Faculty" : "Add Faculty"}</h3>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />

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
