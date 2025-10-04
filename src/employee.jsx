import React, { useState, useEffect } from 'react';
import './Employee.css';

const categories = [
  'Travel',
  'Food',
  'Supplies',
  'Accommodation',
  'Other'
];

export default function Employee() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [merchant, setMerchant] = useState('');
  const [description, setDescription] = useState('');
  const [currencies, setCurrencies] = useState([]);

  // Fetch currencies from REST Countries API
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=currencies')
      .then(res => res.json())
      .then(data => {
        const uniqueCurrencies = new Set();
        data.forEach(country => {
          if (country.currencies) {
            Object.keys(country.currencies).forEach(cur => uniqueCurrencies.add(cur));
          }
        });
        const currencyList = Array.from(uniqueCurrencies).sort();
        setCurrencies(currencyList);
        // Set default currency to first item
        if (currencyList.length > 0) setCurrency(currencyList[0]);
      })
      .catch(err => console.error('Error fetching currencies:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense submitted!\nAmount: ${amount} ${currency}\nCategory: ${category}`);
  };

  return (
    <div className="employee-modal">
      <form className="expense-form" onSubmit={handleSubmit}>
        <h2>Submit New Expense</h2>

        <div className="expense-row">
          <div className="expense-col">
            <label>Amount</label>
            <div className="with-icon">
              {/* <span className="input-icon"></span> */}
              <input
                type="number"
                min="0"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="expense-col">
            <label>Currency</label>
            <select value={currency} onChange={e => setCurrency(e.target.value)} required>
              {currencies.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="expense-row">
          <div className="expense-full">
            <label>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} required>
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="expense-row">
          <div className="expense-full">
            <label>Expense Date</label>
            <div className="with-icon">
              <span className="input-icon">
                {/* Calendar SVG */}
              </span>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="expense-row">
          <div className="expense-full">
            <label>Merchant Name</label>
            <input
              type="text"
              placeholder="Restaurant, store, etc."
              value={merchant}
              onChange={e => setMerchant(e.target.value)}
            />
          </div>
        </div>

        <div className="expense-row">
          <div className="expense-full">
            <label>Description</label>
            <textarea
              placeholder="Brief description of the expense"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <div className="expense-upload-box">
          <div className="icon-box">
            {/* Upload SVG */}
          </div>
          <div>
            <div className="ocr-title">OCR Receipt Scanner</div>
            <div className="ocr-desc">Feature coming soon - Upload receipt for auto-fill</div>
          </div>
        </div>

        <div className="expense-footer">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="primary-btn">Submit Expense</button>
        </div>
      </form>
    </div>
  );
}
