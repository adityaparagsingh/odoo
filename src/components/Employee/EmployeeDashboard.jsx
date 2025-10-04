import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseHistory from "./ExpenseHistory";
import "./Employee.css";

function EmployeeDashboard() {
  const [expenses, setExpenses] = useState([
    { category: "Meals", date: "2025-10-03", amount: 600, status: "Approved" },
    { category: "Travel", date: "2025-09-28", amount: 1200, status: "Pending" },
  ]);

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, status: "Pending" };
    setExpenses([...expenses, newExpense]);
  };

  const countByStatus = (status) =>
    expenses.filter((exp) => exp.status === status).length;

  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>

      {/* ✅ Add the three status cards here */}
      <div className="expense-status-summary">
        <div className="expense-status-card pending">
          <span className="status-icon">⏳</span>
          <div>
            <div className="status-title">Pending</div>
            <div className="status-value">{countByStatus("Pending")}</div>
          </div>
        </div>

        <div className="expense-status-card approved">
          <span className="status-icon">✅</span>
          <div>
            <div className="status-title">Approved</div>
            <div className="status-value">{countByStatus("Approved")}</div>
          </div>
        </div>

        <div className="expense-status-card rejected">
          <span className="status-icon">❌</span>
          <div>
            <div className="status-title">Rejected</div>
            <div className="status-value">{countByStatus("Rejected")}</div>
          </div>
        </div>
      </div>

      {/* Your form and history components */}
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseHistory history={expenses} />
    </div>
  );
}

export default EmployeeDashboard;
