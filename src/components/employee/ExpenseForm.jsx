import React, { useState } from 'react';

function ExpenseForm() {
  const [category, setCategory] = useState('Meals');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Expense submitted! (demo)');
    setCategory('Meals');
    setAmount('');
    setDate('');
    setDescription('');
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Submit Expense</h2>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="Meals">Meals</option>
        <option value="Travel">Travel</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
