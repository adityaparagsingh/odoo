import React from 'react';
import ApprovalsList from './ApprovalsList';
import './Manager.css';

function ManagerDashboard() {
  return (
    <div className="manager-dashboard">
      <h1>Manager Dashboard</h1>
      <ApprovalsList />
    </div>
  );
}

export default ManagerDashboard;
