import React, { useState } from 'react';

function ExpenseHistory() {
  // Mocked data; in production, fetch from backend
  const [history] = useState([
    { category: 'Meals', date: '2025-10-03', amount: 600, status: 'Approved' },
    { category: 'Travel', date: '2025-09-28', amount: 1200, status: 'Pending' }
  ]);

  return (
    <div>
      <h2>Expense History</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th><th>Date</th><th>Amount</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((exp, idx) => (
            <tr key={idx}>
              <td>{exp.category}</td>
              <td>{exp.date}</td>
              <td>{exp.amount}</td>
              <td>{exp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseHistory;
