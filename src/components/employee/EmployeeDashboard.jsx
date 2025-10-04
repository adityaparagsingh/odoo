import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseHistory from './ExpenseHistory';
import './Employee.css';

function EmployeeDashboard() {
  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>
      <ExpenseForm />
      <ExpenseHistory />
    </div>
  );
}

export default EmployeeDashboard;
