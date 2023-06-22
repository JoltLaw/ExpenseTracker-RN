import { createContext } from "react";
import { useState } from "react";
import expenseItem from "../../models/expenseItem";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (reason, amount, date) => {},
  removeExpense: (id) => {},
  updateExpense: (id, reason, amount, date) => {},
});

function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState([
    { reason: "book", amount: 40, date: "08-19-04" },
  ]);

  function addExpense(reason, amount, date) {
    const newExpense = expenseItem(reason, amount, date);
    setExpenses((prevState) => [...prevState, newExpense]);
  }

  function updateExpense(id, reason, amount, date) {
    const updatedExpense = expenseItem(reason, amount, date);
    setExpenses((prevState) => {
      const updatedExpenses = [...prevState];
      updatedExpenses[id] = updatedExpense;
      return updatedExpenses;
    });
  }

  function removeExpense(id) {
    setExpenses((prevState) =>
      prevState.filter((expense) => prevState.indexOf(expense) !== id)
    );
  }

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
