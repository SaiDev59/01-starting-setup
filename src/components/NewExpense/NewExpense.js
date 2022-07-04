import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const SaveNewExpenseHandler = (expenseData) => {
    let expenseWithId = {
      ...expenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseWithId);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false); 
  }
  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={startEditingHandler}>Add new Expense!</button>
      ) : (
        <ExpenseForm cancel = {cancelHandler} onSaveNewExpense={SaveNewExpenseHandler} />
      )}
    </div>
  );
}

export default NewExpense;
