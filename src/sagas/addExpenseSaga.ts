import { put, takeEvery } from "redux-saga/effects";
import { ExpenseActionType } from "../schema/expense";
import {
  AddExpense,
  failedAddExpense,
  successfulAddExpense,
} from "../reducers/Expense/expenseReducer";

function* onAddExpense(action: ExpenseActionType): Generator {
  try {
    const id = Math.floor(Math.random() * 1000);
    yield put({
      type: successfulAddExpense.type,
      payload: {
        ...action.payload,
        id,
      },
    });
  } catch (error) {
    console.error("Error adding Expense", error);
    yield put({ type: failedAddExpense.type, payload: {} });
  }
}

export default function* addExpenseSaga(): Generator {
  yield takeEvery(AddExpense.type, onAddExpense);
}
