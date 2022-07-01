import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense () {
    const setDataHandler = (expenseData) => {
        const totalExpense = {
            ...expenseData,
            id : Math.random()
        }
        console.log(totalExpense);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm setData = {setDataHandler}/>
        </div>
    )
}

export default NewExpense