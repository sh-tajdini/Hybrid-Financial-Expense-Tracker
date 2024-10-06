import React from "react";
import { DeleteExpense } from "../reducers/Expense/expenseReducer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ExpenseChart from "./ExpenseChart";

// import "./ExpenseList.css";
import useFilteredExpenses from "./useFilteredExpenses";

const ExpenseList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    filteredExpenses,
    selectedCategory,
    handleCategoryChange,
    totalAmount,
  } = useFilteredExpenses();

  const handleDelete = (id: number) => {
    const expenseToDelete = filteredExpenses.find(
      (expense) => expense.id === id,
    );
    if (expenseToDelete) {
      dispatch(DeleteExpense(expenseToDelete));
    }
  };

  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>

      <div className="form-group">
        <label htmlFor="categorySelect">Filter by Category</label>
        <select
          id="categorySelect"
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="text-center mt-3">
        <Link
          className="btn btn-primary"
          to="/add-expense"
          style={{ padding: "0.5rem 1rem" }}
        >
          Add Expense
        </Link>
      </div>

      {filteredExpenses.length === 0 ? (
        <p className="text-center">No expenses added yet!</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {filteredExpenses.map((expense) => (
              <li
                key={expense.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{expense.title}</h5>
                  <p className="mb-1">Amount: ${expense.amount}</p>
                  <p className="mb-0">
                    Date: {new Date(expense.date).toLocaleDateString()}
                  </p>
                  <p>Category: {expense.category}</p>
                </div>
                <div>
                  <Link
                    to={`/edit-expense/${expense.id}`}
                    className="btn btn-info btn-sm mx-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-amount">
            <h4>Total Amount:</h4>
            <h2>${totalAmount.toFixed(2)}</h2>
          </div>
        </>
      )}

      <ExpenseChart filteredExpenses={filteredExpenses} />
    </div>
  );
};

export default ExpenseList;
