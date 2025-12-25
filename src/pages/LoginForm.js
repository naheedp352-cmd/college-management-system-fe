import React, { useEffect, useState } from "react";
import styles from "./css/LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, [navigate]);

  async function login(e) {
    e.preventDefault();

    const item = { email, password };

    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const result = await response.json();
    if (response.status !== 201 && response.status !== 200) {
      alert("Login failed. Please check your credentials.");
      return;
    }
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/dashboard");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>
        <p>Email: john@mail.com</p>
        <p>Password: changeme</p>
      </div>
    </div>
  );
}
