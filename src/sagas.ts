import { all, fork } from "redux-saga/effects";
import addExpenseSaga from "./sagas/addExpenseSaga";
import editExpenseSaga from "./sagas/editExpenseSaga";
import deleteExpenseSaga from "./sagas/deleteExpenseSaga";

function* mySaga(): Generator {
  try {
    yield all([
      fork(addExpenseSaga),
      fork(editExpenseSaga),
      fork(deleteExpenseSaga),
    ]);
  } catch (error) {
    mySaga();
  }
}
export default mySaga;
