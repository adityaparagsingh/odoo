import React, { useState, useEffect } from 'react';
import './Manager.css';

function ApprovalsList() {
  const [requests, setRequests] = useState([
    { subject: 'Food', owner: 'Sarah', status: 'Pending', amount: 600 },
    { subject: 'Travel', owner: 'Mark', status: 'Pending', amount: 1200 },
    { subject: 'Transportation', owner: 'Aditya', status: 'Pending', amount: 5200 },
    { subject: 'Travel', owner: 'John', status: 'Pending', amount: 1000 },
  ]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedReqs = localStorage.getItem('requests');
    const savedHist = localStorage.getItem('history');
    if (savedReqs) setRequests(JSON.parse(savedReqs));
    if (savedHist) setHistory(JSON.parse(savedHist));
  }, []);

  useEffect(() => {
    localStorage.setItem('requests', JSON.stringify(requests));
    localStorage.setItem('history', JSON.stringify(history));
  }, [requests, history]);

  function approveReq(idx) {
    const updated = [...requests];
    updated[idx].status = 'Approved';
    setRequests(updated);
    const log = {
      action: 'Approved',
      owner: updated[idx].owner,
      subject: updated[idx].subject,
      time: new Date().toLocaleString(),
    };
    setHistory([...history, log]);
    alert(`${updated[idx].owner}'s request Approved ✅`);
  }

  function rejectReq(idx) {
    const updated = [...requests];
    updated[idx].status = 'Rejected';
    setRequests(updated);
    const log = {
      action: 'Rejected',
      owner: updated[idx].owner,
      subject: updated[idx].subject,
      time: new Date().toLocaleString(),
    };
    setHistory([...history, log]);
    alert(`${updated[idx].owner}'s request Rejected ❌`);
  }

  return (
    <div className="manager-dashboard">
            <h1>Manager Dashboard</h1> 
      <div className="section-card approvals-section">
        <h2>Approvals to Review</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr key={idx}>
                <td>{req.subject}</td>
                <td>{req.owner}</td>
                <td>
                  <span className={`status-badge ${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>
                </td>
                <td>${req.amount}</td>
                <td>
                  <button
                    disabled={req.status !== 'Pending'}
                    onClick={() => approveReq(idx)}
                  >
                    Approve
                  </button>
                  <button
                    disabled={req.status !== 'Pending'}
                    onClick={() => rejectReq(idx)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section-card action-history">
        <h2>Action History</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Owner</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, i) => (
              <tr key={i}>
                <td>{h.time}</td>
                <td>{h.owner}</td>
                <td>{h.subject}</td>
                <td>
                  <span className={`status-badge ${h.action.toLowerCase()}`}>
                    {h.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApprovalsList;
