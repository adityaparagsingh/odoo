import React, { useState } from 'react';
import './Auth.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [error, setError] = useState('');

  function handleSignup(e) {
    e.preventDefault();
    localStorage.setItem('role', role);
    if (role === 'admin') window.location.href = '/admin';
    else if (role === 'manager') window.location.href = '/manager';
    else window.location.href = '/employee';
  }

  return (
    <div className="auth-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign up</button>
      </form>
      {error && <p className="auth-error">{error}</p>}
      <a href="/login">Already have an account? Log in</a>
    </div>
  );
}

export default Signup;
