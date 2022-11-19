import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const transactionsList = []

class MoneyManager extends Component {
  state = {
    titleInput: '',
    valueInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionBox: transactionsList,
  }

  onTitle = event => {
    event.preventDefault()
    this.setState({titleInput: event.target.value})
  }

  onAmount = event => {
    event.preventDefault()
    this.setState({valueInput: event.target.value})
  }

  onOption = event => {
    this.setState({optionId: event.target.value})
    console.log(event.target.value)
  }

  addButton = event => {
    event.preventDefault()
    const {titleInput, valueInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      value: parseInt(valueInput),
      type: displayText,
    }
    this.setState(previous => ({
      transactionBox: [...previous.transactionBox, newTransaction],
      titleInput: '',
      valueInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalance = () => {
    const {transactionBox} = this.state
    let balance = 0
    let income = 0
    let expenses = 0

    transactionBox.forEach(eachOne => {
      if (eachOne.type === transactionTypeOptions[0].displayText) {
        income += eachOne.value
      } else {
        expenses += eachOne.value
      }
    })
    balance = income - expenses

    return balance
  }

  getExpenses = () => {
    const {transactionBox} = this.state
    let income
    let expenses = 0

    transactionBox.forEach(eachOne => {
      if (eachOne.type === transactionTypeOptions[1].displayText) {
        if (income >= expenses) {
          expenses += eachOne.value
        }
      }
    })
    return expenses
  }

  income = () => {
    const {transactionBox} = this.state
    let balance = 0

    transactionBox.forEach(eachOne => {
      if (eachOne.type === transactionTypeOptions[0].displayText) {
        balance += eachOne.value
      }
    })
    return balance
  }

  onDelete = id => {
    const {transactionBox} = this.state
    const updateTransactionBox = transactionBox.filter(each => each.id !== id)

    this.setState({transactionBox: updateTransactionBox})
  }

  render() {
    const {titleInput, valueInput, optionId, transactionBox} = this.state
    const balanceAmount = this.getBalance()
    const expensesAmount = this.getExpenses()
    const incomeAmount = this.income()

    return (
      <div className="main-container">
        <div className="content-container">
          <div className="account-holder">
            <h1 className="holder-name">Hi, Richard</h1>
            <p className="description">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            yourIncome={incomeAmount}
            yourExpenses={expensesAmount}
          />
          <div className="transaction-boxes">
            <div className="transaction-box">
              <form className="form-data" onSubmit={this.addButton}>
                <h1 className="box-heading">Add Transaction</h1>
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onTitle}
                  value={titleInput}
                />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  id="amount"
                  placeholder="AMOUNT"
                  onChange={this.onAmount}
                  value={valueInput}
                />
                <label htmlFor="income">INCOME</label>
                <select id="select" value={optionId} onChange={this.onOption}>
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-box">
              <div className="history-main">
                <h1 className="box-heading">History</h1>
                <ul className="head-main">
                  <li className="table-header">
                    <div className="table">
                      <p className="text">Title</p>
                      <p className="text">Amount</p>
                      <p className="text">Type</p>
                      <p className="text"> </p>
                    </div>
                  </li>
                  {transactionBox.map(each => (
                    <TransactionItem
                      key={each.id}
                      details={each}
                      deleteButton={this.onDelete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
