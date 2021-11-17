import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const dateFilterHandler = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  const filteredItems = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onChooseOfDateFilter={dateFilterHandler}
        />
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
