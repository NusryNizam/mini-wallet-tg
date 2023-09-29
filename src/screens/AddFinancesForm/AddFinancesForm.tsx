import { ChangeEvent, useState } from 'react'
import './AddFinancesForm.css'
import CustomButton from '../../components/CustomButton/CustomButton'
// import { TelegramContext } from '../../context/TelegramContext'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const AddFinancesForm = () => {
  // let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  // useEffect(() => {
  //   setNavigationPath('')
  //   Telegram.BackButton.show().onClick(goBack)
  //   Telegram.MainButton.show()
  //     .enable()
  //     .setText('Save')
  //     .onClick(() => handleSubmit())
  // }, [navigateTo])

  // function goBack() {
  //   navigate(-1)
  // }

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

  const handleSubmit = () => {
    console.log(formData)
    // Telegram.setItem('laptop', 300000)
    // Telegram.PopupParams.title = 'Are you sure?'
    // Telegram.PopupParams.description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    // const okBtn = {text: 'Bleh', type: 'ok'}
    // Telegram.PopupParams.buttons = [okBtn]

    // Telegram.showPopup()
    // navigate('../')
  }
  return (
    <div className="AddFinancesForm">
      <h2 className="title">Add Finances</h2>
      <form className="add-finances-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="financeType">Finance Type</label>
          <input
            type="text"
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
