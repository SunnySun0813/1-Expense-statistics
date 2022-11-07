import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car Insurance1", amount: 291.67, date: new Date(2021, 1, 28) },
  { title: "Car Insurance2", amount: 292.67, date: new Date(2021, 2, 28) },
  { title: "Car Insurance3", amount: 293.67, date: new Date(2021, 3, 28) }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses=>{return [expense,...prevExpenses]});  
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  ); 
}

export default App;
