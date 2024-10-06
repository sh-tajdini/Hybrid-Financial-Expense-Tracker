import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddExpense, EditExpense } from "../reducers/Expense/expenseReducer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";

const useExpenseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const expenses = useAppSelector((state) => state.expense.expenses);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");

  useEffect(() => {
    if (id) {
      const expense = expenses.find((expense) => expense.id === parseInt(id));
      if (expense) {
        setTitle(expense.title);
        setAmount(expense.amount.toString());
        setDate(new Date(expense.date).toISOString().split("T")[0]);
        setCategory(expense.category);
      }
    }
  }, [id, expenses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("All fields are required!");
      return;
    }

    const newExpense = {
      id: id ? parseInt(id) : Math.floor(Math.random() * 1000),
      title,
      amount: parseFloat(amount),
      date: new Date(date),
      category,
    };

    if (id) {
      dispatch(EditExpense(newExpense));
    } else {
      dispatch(AddExpense(newExpense));
    }

    navigate("/");
  };

  return {
    title,
    setTitle,
    amount,
    setAmount,
    date,
    setDate,
    category,
    setCategory,
    handleSubmit,
  };
};

export default useExpenseForm;
