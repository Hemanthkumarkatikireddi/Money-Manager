// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteButton} = props
  const {id, title, value, type} = details

  const deleteBtn = () => {
    deleteButton(id)
  }

  return (
    <li className="transaction-list">
      <p className="text">{title}</p>
      <p className="text">{value}</p>
      <p className="text">{type}</p>
      <button
        // testid="delete"
        type="button"
        className="text"
        onClick={deleteBtn}
      >
        <img
          className="delete-btn"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
