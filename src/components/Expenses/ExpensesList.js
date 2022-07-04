import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
function ExpensesList (props) {
  if (props.item.length ===0) {
    return (
        <h2 className="expenses-list__fallback">No expenses this year!!!!</h2>
    )
  }
  return (
    <ul className = 'expenses-list'>
       {props.item.map((expense) => {
        return (<ExpenseItem
          key={expense.id}
          expenseName={expense.title}
          expenseAmount={expense.amount}
          dateOfExpense={expense.date}
        />);
      })} 
    </ul>
    
  )
}

export default ExpensesList;

