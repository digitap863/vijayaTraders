import React, { useEffect, useState } from "react";
import axios from "axios";
import "./login.css";

import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [error, setErrror] = useState(false);

  const navigete = useNavigate();
  const submit = async () => {
    console.log(name, password, "fmdfknv");
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post("/api/admin/login", { name, password });
      localStorage.setItem("adminToken", data);
      navigete("/adminHome");
    } catch (error) {
      setErrror(true);
    }
  };

  const adminToken = localStorage.getItem("adminToken");
  useEffect(() => {
    if (adminToken) {
      navigete("/admin");
    }
  }, []);

  return (
    <section class="login_section">
      <div class="loginform">
        <h2>ADMIN LOGIN</h2>
        <div class="form_login">
          <input
            type="text"
            name="username"
            class="login_fields"
            placeholder="user name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Username</label>
          <br />
          <input
            type="password"
            name="password1"
            class="login_fields"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <label>Password</label>
          <br />
          {error && (
            <p className="text-danger">Email and Password Do Not Match</p>
          )}
          <button onClick={submit} class="login_submit">
            Login
          </button>
          <br />
        </div>
      </div>
    </section>
  );
}

export default Login;
