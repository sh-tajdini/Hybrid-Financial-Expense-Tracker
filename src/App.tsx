import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/add-expense" element={<ExpenseForm />} />
            <Route path="/edit-expense/:id" element={<ExpenseForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
