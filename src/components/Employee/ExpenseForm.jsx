import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState("Meals"); // Default value: Meals
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !date || !description) return;

    onAddExpense({
      category,
      amount: parseFloat(amount),
      date,
      description,
    });

    // Reset form
    setCategory("Meals");
    setAmount("");
    setDate("");
    setDescription("");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Submit Expense</h2>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Select a Category --
        </option>
        <option value="Meals">Meals</option>
        <option value="Travel">Travel</option>
        <option value="Accommodation">Accommodation</option>
        <option value="Transportation">Transportation</option>
        <option value="Office Supplies">Office Supplies</option>
        <option value="Client Entertainment">Client Entertainment</option>
        <option value="Training">Training</option>
        <option value="Utilities">Utilities</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Description */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
