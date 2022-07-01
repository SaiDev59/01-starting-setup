import React, {useState} from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
    const [title, setTitle] = useState(props.expenseName)
    const clickHandler = () => {
        setTitle("Updated!!");
        console.log(title);
    }
    return (
        <Card className = "expense-item">
            <ExpenseDate dateOfExpense = {props.dateOfExpense}/>
            <div className = "expense-item__description">
                <h2>{title}</h2>
                <div className = "expense-item__price">{props.expenseAmount}</div>  
            </div>
            <button onClick = {clickHandler}>Click To Update!</button>
        </Card>
    );
}

export default ExpenseItem;