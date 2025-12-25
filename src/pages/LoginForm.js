import React from "react";
import "./css/LoginForm.module.css";
import { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";    

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate.push("/add");
    }
  }, []);

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate.push("/add");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form>
        <div className="title">
          <h1>Login Form</h1>
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="text-center">
          <button class="btn btn-primary" onClick={login} type="submit">
            Login
          </button>
        </div>
        {/* <button type="button" class="btn btn-primary" onClick={login} type="submit">
          Login
        </button> */}
      </form>
    </div>
  );
}
