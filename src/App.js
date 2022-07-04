import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Books',
    amount: 500,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'backcase', amount: 300, date: new Date(2022, 1, 12) },
  {
    id: 'e3',
    title: 'Movies',
    amount: 1200,
    date: new Date(2022, 5, 28),
  },
  {
    id: 'e4',
    title: 'Snacks',
    amount: 500,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expense);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses exD = {expenses}></Expenses>
    </div>
  );
}

export default App;
