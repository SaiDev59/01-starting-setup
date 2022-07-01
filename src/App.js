import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Books',
      amount: 500,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', title: 'Phone', amount: 30000, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Movies',
      amount: 1200,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Snacks',
      amount: 500,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses exD = {expenses}></Expenses>
    </div>
  );
}

export default App;
