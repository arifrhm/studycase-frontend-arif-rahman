import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    // Logic for user registration
    // For example, if registration is successful, set isLoggedIn to true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic for user logout
    // For example, set isLoggedIn to false
    setLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Selamat datang! Anda berhasil login.</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Sudah punya akun? <button onClick={() => navigate("/login")}>Login</button>
      </p>
    </div>
  );
};

export default Register;
