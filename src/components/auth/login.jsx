import React, { useState } from 'react';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    // Demo: set admin/employee/manager role for login
    if (email === 'admin@company.com') {
      localStorage.setItem('role', 'admin');
      window.location.href = '/admin';
    } else if (email === 'manager@company.com') {
      localStorage.setItem('role', 'manager');
      window.location.href = '/manager';
    } else if (email.endsWith('@company.com')) {
      localStorage.setItem('role', 'employee');
      window.location.href = '/employee';
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="auth-error">{error}</p>}
      <a href="/signup">Don't have an account? Sign up</a>
    </div>
  );
}

export default Login;
