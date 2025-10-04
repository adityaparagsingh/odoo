import React, { useState } from 'react';

function ExpensesOverview() {
  const [expenses] = useState([
    { employee: 'Sarah', category: 'Meals', date: '2025-10-03', amount: 600, status: 'approved' },
    { employee: 'Mark', category: 'Travel', date: '2025-10-01', amount: 1200, status: 'pending' }
  ]);

  return (
    <div>
      <h2>Expenses Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th><th>Category</th><th>Date</th><th>Amount</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, idx) => (
            <tr key={idx}>
              <td>{exp.employee}</td>
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

export default ExpensesOverview;
