import React, { useState } from 'react';

function UsersManagement() {
  const [users, setUsers] = useState([
    { name: 'Sarah', role: 'manager', email: 'manager@company.com' },
    { name: 'Mark', role: 'employee', email: 'employee@company.com' }
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('employee');

  function addUser(e) {
    e.preventDefault();
    setUsers([...users, { name, role, email }]);
    setName('');
    setEmail('');
    setRole('employee');
  }

  return (
    <div>
      <h2>Users Management</h2>
      <form onSubmit={addUser}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.email}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersManagement;
