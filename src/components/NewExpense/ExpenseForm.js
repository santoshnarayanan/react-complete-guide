import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
  // The below is maintaing stateseperately for three different entity
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle:'', enteredAmount:'',enteredDate:''
  });
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    
    // setUserInput({
    //   //This ensures other properties are not ignored but needs to be included
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //This is the latest snapshot of how to reterivew states
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   //This ensures other properties are not ignored but needs to be included
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    setUserInput({
      //This ensures other properties are not ignored but needs to be included
      ...userInput,
      enteredDate: event.target.value,
    });
  };


    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control"></div>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" ma="2022-12-31" onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}

export default ExpenseForm;