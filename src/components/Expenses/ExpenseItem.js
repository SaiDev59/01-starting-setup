import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
    return (
        <Card className = "expense-item">
            <ExpenseDate dateOfExpense = {props.dateOfExpense}/>
            <div className = "expense-item__description">
                <h2>{props.expenseName}</h2>
                <div className = "expense-item__price">{props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem; 