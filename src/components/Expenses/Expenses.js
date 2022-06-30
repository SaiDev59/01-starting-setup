import Card from '../UI/Card';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
    
  return (
    <Card className="expensesTab">
      <ExpenseItem
        expenseName={props.exD[0].title}
        expenseAmount={props.exD[0].amount}
        dateOfExpense={props.exD[0].date}
      />
      <ExpenseItem
        expenseName={props.exD[1].title}
        expenseAmount={props.exD[1].amount}
        dateOfExpense={props.exD[1].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseName={props.exD[2].title}
        expenseAmount={props.exD[2].amount}
        dateOfExpense={props.exD[2].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseName={props.exD[3].title}
        expenseAmount={props.exD[3].amount}
        dateOfExpense={props.exD[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;