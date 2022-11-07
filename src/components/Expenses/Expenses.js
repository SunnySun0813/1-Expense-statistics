import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('0');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = filteredYear === '0' ? props.items : props.items.filter((expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  }))

  return (
      <Card className="expenses">
        <ExpensesFilter onChangeFiler={filterChangeHandler} selected={filteredYear}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
  );
}

export default Expenses;
