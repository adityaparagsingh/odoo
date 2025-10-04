import React from 'react';
import UsersManagement from './UsersManagement';
import ApprovalRules from './ApprovalRules';
import ExpensesOverview from './ExpensesOverview';
import './Admin.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Panel</h1>
      <UsersManagement />
      <ApprovalRules />
      <ExpensesOverview />
    </div>
  );
}

export default AdminDashboard;
