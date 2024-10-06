import { useState, useEffect, useMemo } from "react";
import { useAppSelector } from "../hooks";

const useFilteredExpenses = () => {
  const expenses = useAppSelector((state) => state.expense.expenses);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === "") {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(
        expenses.filter((expense) => expense.category === category),
      );
    }
  };

  const totalAmount = useMemo(() => {
    return filteredExpenses.reduce(
      (total, expense) => total + expense.amount,
      0,
    );
  }, [filteredExpenses]);

  return {
    filteredExpenses,
    selectedCategory,
    handleCategoryChange,
    totalAmount,
  };
};

export default useFilteredExpenses;
