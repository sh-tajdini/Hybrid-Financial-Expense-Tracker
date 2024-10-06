import { combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "./reducers/Expense/expenseReducer";

const rootReducer = combineReducers({
  expense: expenseReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
