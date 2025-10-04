import React from "react";

function ExpenseHistory({ history }) {
  return (
    <div>
      <h2>Expense History</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th> {/* ✅ New column */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((exp, idx) => (
            <tr key={idx}>
              <td>{exp.category}</td>
              <td>{exp.date}</td>
              <td>{exp.amount}</td>
              <td>{exp.description}</td> {/* ✅ Show description */}
              <td>{exp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseHistory;
