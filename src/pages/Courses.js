import React, { useState } from "react";
import styles from "./css/Course.module.css";

const initialCourses = [
  {
    id: 1,
    name: "Data Structures",
    code: "CS201",
    department: "Computer Science",
    faculty: "Dr. Amit Kumar",
    status: "Active",
  },
  {
    id: 2,
    name: "Database Management",
    code: "CS301",
    department: "Computer Science",
    faculty: "",
    status: "Active",
  },
  {
    id: 3,
    name: "Business Economics",
    code: "MBA102",
    department: "Management",
    faculty: "Prof. Neha Jain",
    status: "Inactive",
  },
];

export default function Courses() {
  const [courses, setCourses] = useState(initialCourses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    code: "",
    department: "",
    faculty: "",
    status: "Active",
  });

  // KPIs
  const totalCourses = courses.length;
  const activeCourses = courses.filter(c => c.status === "Active").length;
  const departments = new Set(courses.map(c => c.department)).size;
  const newCourses = 4; // mock
  const unassignedCourses = courses.filter(c => !c.faculty).length;

  function openModal(course = null) {
    if (course) setForm(course);
    else
      setForm({
        id: null,
        name: "",
        code: "",
        department: "",
        faculty: "",
        status: "Active",
      });
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
      setCourses(courses.map(c => (c.id === form.id ? form : c)));
    } else {
      setCourses([...courses, { ...form, id: Date.now() }]);
    }

    closeModal();
  }

  function deleteCourse(id) {
    if (window.confirm("Delete this course?")) {
      setCourses(courses.filter(c => c.id !== id));
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Course Management</h1>

      {/* KPIs */}
      <div className={styles.kpis}>
        <div className={styles.kpiCard}>
          <h4>Total Courses</h4>
          <p>{totalCourses}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Active Courses</h4>
          <p>{activeCourses}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>Departments</h4>
          <p>{departments}</p>
        </div>
        <div className={styles.kpiCard}>
          <h4>New Courses</h4>
          <p>{newCourses}</p>
        </div>
      </div>

      {/* Insights */}
      <div className={styles.insights}>
        <div className={styles.insightCard}>
          <h4>Unassigned Courses</h4>
          <p>{unassignedCourses} courses without faculty</p>
        </div>
      </div>

      {/* Table Header */}
      <div className={styles.tableHeader}>
        <h2>Courses</h2>
        <button onClick={() => openModal()} className={styles.addBtn}>
          + Add Course
        </button>
      </div>

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Code</th>
            <th>Department</th>
            <th>Faculty</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.department}</td>
              <td>{course.faculty || "—"}</td>
              <td>
                <span
                  className={
                    course.status === "Active"
                      ? styles.active
                      : styles.inactive
                  }
                >
                  {course.status}
                </span>
              </td>
              <td className={styles.actions}>
                <button
                  onClick={() => openModal(course)}
                  className={styles.edit}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCourse(course.id)}
                  className={styles.delete}
                >
                  Delete
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
            <h3>{form.id ? "Edit Course" : "Add Course"}</h3>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <input
                name="name"
                placeholder="Course Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="code"
                placeholder="Course Code"
                value={form.code}
                onChange={handleChange}
                required
              />
              <input
                name="department"
                placeholder="Department"
                value={form.department}
                onChange={handleChange}
                required
              />
              <input
                name="faculty"
                placeholder="Assigned Faculty (optional)"
                value={form.faculty}
                onChange={handleChange}
              />

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

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
