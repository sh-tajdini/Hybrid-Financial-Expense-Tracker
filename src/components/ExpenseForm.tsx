import React from "react";

import "./ExpenseForm.css";
import { useParams } from "react-router-dom";
import useExpenseForm from "./useExpenseForm";

const ExpenseForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    title,
    setTitle,
    amount,
    setAmount,
    date,
    setDate,
    category,
    setCategory,
    handleSubmit,
  } = useExpenseForm();

  return (
    <div className="expense-form">
      <h2>{id ? "Edit Expense" : "Add Expense"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
