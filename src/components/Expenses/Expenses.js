import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  function yearChangeHandler(changedYear) {
    setFilteredYear(changedYear);
  }
  const filteredExpenses = props.exD.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  
  return (
    <div>
      <Card className="expensesTab">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList item = {filteredExpenses}/>

      </Card>
    </div>
  );
}

export default Expenses;
