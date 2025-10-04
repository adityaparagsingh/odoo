import React, { useState } from 'react';

function ApprovalRules() {
  const [rule, setRule] = useState('percentage');
  const [percentage, setPercentage] = useState(60);
  const [specificApprover, setSpecificApprover] = useState('');

  return (
    <div>
      <h2>Approval Rules</h2>
      <div>
        <label>
          <input type="radio" value="percentage" checked={rule === 'percentage'} onChange={() => setRule('percentage')} />
          Percentage
        </label>
        <input type="number" min="1" max="100" value={percentage} onChange={e => setPercentage(e.target.value)} disabled={rule !== 'percentage'} />%
      </div>
      <div>
        <label>
          <input type="radio" value="specific" checked={rule === 'specific'} onChange={() => setRule('specific')} />
          Specific Approver
        </label>
        <input type="text" placeholder="Approver name" value={specificApprover} onChange={e => setSpecificApprover(e.target.value)} disabled={rule !== 'specific'} />
      </div>
      <div>
        <label>
          <input type="radio" value="hybrid" checked={rule === 'hybrid'} onChange={() => setRule('hybrid')} />
          Hybrid
        </label>
        <span>Approve by {percentage}% OR {specificApprover || 'Approver'}</span>
      </div>
    </div>
  );
}

export default ApprovalRules;
