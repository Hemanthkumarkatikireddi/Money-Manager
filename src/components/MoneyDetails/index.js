// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, yourIncome, yourExpenses} = props

  return (
    <div className="balance-boxes">
      <div className="balance-box b-boxes">
        <div className="img-width">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="cash">
          <p className="box-heading-view">Your Balance</p>
          <p
            //   testid="balanceAmount"
            className="value"
          >
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-box b-boxes">
        <div className="img-width">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="cash">
          <p className="box-heading-view ">Your Income</p>
          <p
            //   testid="incomeAmount"
            className="value"
          >
            RS {yourIncome}
          </p>
        </div>
      </div>
      <div className="expenses-box b-boxes">
        <div className="img-width">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="cash">
          <p className="box-heading-view">Your Expenses</p>
          <p
            //   testid="expensesAmount"
            className="value"
          >
            RS {yourExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
