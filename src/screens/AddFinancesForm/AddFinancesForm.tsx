import { ChangeEvent, FormEvent, useState } from 'react'
import './AddFinancesForm.css'
import CustomButton from '../../components/CustomButton/CustomButton'
// import { Link } from 'react-router-dom'

const AddFinancesForm = () => {
  const [formData, setFormData] = useState({
    financeType: '',
    category: '',
    amount: '',
    date: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div className="AddFinancesForm">
      <h2 className="title">Add Finances</h2>
      <form className="add-finances-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="financeType">Finance Type</label>
          <input
            type="financeType"
            id="financeType"
            name="financeType"
            required
            onChange={(e) => handleInput(e)}
            value={formData.financeType}
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category">
            <option value={formData.category}>Rent</option>
          </select>
          {/* <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => handleInput(e)}
            value={formData.password}
          /> */}
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            step={0.01}
            min={0.01}
            id="amount"
            name="amount"
            required
            onChange={(e) => handleInput(e)}
            value={formData.amount}
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            onChange={(e) => handleInput(e)}
            value={formData.date}
          />
        </div>
        <br />
        <CustomButton isSubmitType={true}>Add</CustomButton>
      </form>      
    </div>
  )
}

export default AddFinancesForm
