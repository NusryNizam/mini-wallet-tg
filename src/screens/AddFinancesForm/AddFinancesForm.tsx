import { Context, useContext, useState } from 'react'
import './AddFinancesForm.css'
import CustomButton from '../../components/CustomButton/CustomButton'
import { TelegramContext } from '../../context/TelegramContext'
import { AuthContext, AuthContextType } from '../../context/AuthContext'
import axios from 'axios'
import apiUrl from '../../utils/base'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// import { TelegramContext } from '../../context/TelegramContext'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const categories = ['Income', 'Expense']

const AddFinancesForm = () => {
  let { Telegram } = useContext(TelegramContext)
  let { currentUserId } = useContext<AuthContextType>(
    AuthContext as Context<AuthContextType>
  )

  const navigate = useNavigate()

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
    user: currentUserId,
    name: '',
    category: 'income',
    amount: '',
    date: '',
  })

  const handleInput = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData)
    e.preventDefault()

    const { name, category, amount, date } = formData
    if (name === '' || category === '' || amount === '' || date === '') {
      Telegram.showAlert('Please fill all the fields')
      return
    }

    axios.post(`${apiUrl}/entries`, formData)
    .then(res => {
      toast.success(res.data.message)
      navigate('/main/finances')
    })
    .catch(err => {
      console.log(err)
      toast.error(`Error: ${err.data.message}`)
    })
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
      <form className="add-finances-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => handleInput(e)}
            value={formData.name}
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" onChange={handleInput}>
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
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
      <ToastContainer position="top-right" />
    </div>
  )
}

export default AddFinancesForm
