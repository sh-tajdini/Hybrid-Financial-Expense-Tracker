import { createSlice } from "@reduxjs/toolkit";
import { ExpenseStoreType } from "../../schema/expense";
import addExpense from "./addExpense";
import editExpense from "./editExpense";
import deleteExpense from "./deleteExpense";

const initialState: ExpenseStoreType = {
  requestPending: false,
  expenses: JSON.parse(localStorage.getItem("expenses") || "[]"),
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    ...addExpense,
    ...editExpense,
    ...deleteExpense,
  },
});
const { actions, reducer } = expenseSlice;
export const { AddExpense, successfulAddExpense, failedAddExpense } = actions;
export const { EditExpense, successfulEditExpense, failedEditExpense } =
  actions;
export const { DeleteExpense, successfulDeleteExpense, failedDeleteExpense } =
  actions;

export default reducer;
