import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logika autentikasi pengguna
    // Misalnya, jika autentikasi berhasil, atur isLoggedIn menjadi true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Logika logout pengguna
    // Misalnya, atur isLoggedIn menjadi false
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
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
