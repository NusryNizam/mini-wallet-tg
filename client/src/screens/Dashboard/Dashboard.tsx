import { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import './Dashboard.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { TelegramContext } from '../../context/TelegramContext'
import axios from 'axios'
import apiUrl from '../../utils/base'
import EntriesByMonthInterface from '../../interfaces/entriesByMonth.interface'
import ChartDataInterface from '../../interfaces/chartData.interface'
import { ToastContainer, toast } from 'react-toastify'
import monthsAndYears from '../../utils/constants'

ChartJS.register(ArcElement, Tooltip, Legend)
const Dashboard = () => {
  const currentDate = new Date()

  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  const [chartData, setChartData] = useState<ChartDataInterface>({
    labels: ['Expense', 'Income'],
    datasets: [
      {
        label: 'Amount',
        data: [3000, 5000],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  })

  const [monthlyIncomeTotal, setMonthlyIncomeTotal] = useState(0)
  const [monthlyExpenseTotal, setMonthlyExpenseTotal] = useState(0)

  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.toLocaleString('default', { month: 'long' })
  )
  const [selectedMonthNumber, setSelectedMonthNumber] = useState(
    currentDate.getMonth() + 1
  )
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())

  useEffect(() => {
    getEntriesByMonth(selectedYear, selectedMonthNumber)
  }, [selectedMonthNumber, selectedYear])

  const getEntriesByMonth = (year: number, month: number) => {
    axios
      .get<EntriesByMonthInterface>(`${apiUrl}/entries/${year}/${month}`)
      .then((res) => {
        let expense = 0
        let income = 0
        res.data.entries.map((entry) => {
          if (entry._id === 'expense') {
            expense = entry.total
            setMonthlyExpenseTotal(entry.total)
          }

          if (entry._id === 'income') {
            income = entry.total
            setMonthlyIncomeTotal(entry.total)
          }
        })

        const updatedDataset = {
          ...chartData.datasets[0], // Copy the existing dataset properties
          data: [expense, income], // Update the data property with new values
        }

        const updatedChartData: ChartDataInterface = {
          ...chartData,
          datasets: [updatedDataset], // Replace the datasets array with the updated dataset
        }

        setChartData(updatedChartData)
      })
      .catch((err) => {
        console.log(err)
        toast.error(`Error: ${err.message}`)
      })
  }

  useEffect(() => {
    setNavigationPath('/main/finances/add')
    Telegram.BackButton.hide()
    Telegram.MainButton.hide()
  }, [navigateTo])

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement

    if (name === 'month') {
      setSelectedMonthNumber(parseInt(value))
      const [month] = monthsAndYears.months.filter(month => month.id === parseInt(value))
      setSelectedMonth(month.name)
    }

    if (name === 'year') {
      setSelectedYear(parseInt(value))
    }
  }
  return (
    <div className="Dashboard">
      <h2 className="title">Dashboard</h2>
      <div className="card-container">
        <Card
          title="Income & Expenses"
          subtitle={`${selectedMonth} ${selectedYear}`}
        >
          <Pie data={chartData} />
          <div className="row">
            <div>
              <small>Expense</small>
              <h2>${monthlyExpenseTotal}</h2>
            </div>
            <div>
              <small>Income</small>
              <h2>${monthlyIncomeTotal}</h2>
            </div>
          </div>
        </Card>
        <form>
          <p style={{marginBottom: '10px'}}>Select to filter:</p>
          <select
            className="select"
            name="month"
            id="month"
            required
            onChange={handleChange}
            value={selectedMonthNumber}
          >
            {monthsAndYears.months.map((month) => (
              <option key={month.id} value={month.id}>
                {month.name}
              </option>
            ))}
          </select>
          <select
            className="select"
            name="year"
            id="year"
            required
            onChange={handleChange}
            value={selectedYear}
          >
            {monthsAndYears.years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Dashboard