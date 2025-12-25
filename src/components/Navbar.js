import React from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user-info");
    navigate("/login");
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.logo}>College Admin</span>
      </div>

      <div className={styles.right}>
        <button onClick={logout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}
