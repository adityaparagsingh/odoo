import React, { useState } from 'react';
import './AdminView.css';

export default function UserDashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleSubmit = () => {
    if (!form.date || !form.description || !form.category || !form.amount) return;
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        ...form,
        status: 'Pending'
      }
    ]);
    setForm({ date: '', description: '', category: '', amount: '' });
  };

  const countStatus = (status) =>
    expenses.filter(e => e.status === status).length;

  return (
    <div className="user-dashboard">
      <header className="company-header">
        <div className="logo"></div>
        <div>
          <h2>Company</h2>
          <span>USD</span>
        </div>
      </header>

      <section className="card">
        <h2>My Expenses</h2>
        <p>Submit and track your expense claims</p>

        <div className="status-summary">
          <div className="status-box yellow">
            <div>Pending</div>
            <strong>{countStatus("Pending")}</strong>
          </div>
          <div className="status-box green">
            <div>Approved</div>
            <strong>{countStatus("Approved")}</strong>
          </div>
          <div className="status-box red">
            <div>Rejected</div>
            <strong>{countStatus("Rejected")}</strong>
          </div>
        </div>

        <button className="blue-btn" onClick={handleSubmit}>+ New Expense</button>

        <div className="new-expense-form">
          <input
            type="date"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
          />
          <input
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
          />
        </div>

        <table className="main-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr><td colSpan="5">No expenses yet. Click "New Expense" to submit your first claim.</td></tr>
            ) : (
              expenses.map(exp => (
                <tr key={exp.id}>
                  <td>{exp.date}</td>
                  <td>{exp.description}</td>
                  <td>{exp.category}</td>
                  <td>${exp.amount}</td>
                  <td>{exp.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
