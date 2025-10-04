import React, { useState } from 'react';

function ApprovalsList() {
  const [requests, setRequests] = useState([
    { subject: 'Food', owner: 'Sarah', status: 'Pending', amount: 600 },
    { subject: 'Travel', owner: 'Mark', status: 'Pending', amount: 1200 }
  ]);

  function approveReq(idx) {
    const updated = requests.slice();
    updated[idx].status = 'Approved';
    setRequests(updated);
  }

  function rejectReq(idx) {
    const updated = requests.slice();
    updated[idx].status = 'Rejected';
    setRequests(updated);
  }

  return (
    <div>
      <h2>Approvals to Review</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th><th>Owner</th><th>Status</th><th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, idx) => (
            <tr key={idx}>
              <td>{req.subject}</td>
              <td>{req.owner}</td>
              <td>{req.status}</td>
              <td>{req.amount}</td>
              <td>
                <button disabled={req.status !== 'Pending'}
                  onClick={() => approveReq(idx)}>Approve</button>
                <button disabled={req.status !== 'Pending'}
                  onClick={() => rejectReq(idx)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApprovalsList;
