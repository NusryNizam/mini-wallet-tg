import { useContext, useEffect } from 'react'
import Card from '../../components/Card/Card'
import './Dashboard.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { TelegramContext } from '../../context/TelegramContext'

ChartJS.register(ArcElement, Tooltip, Legend)
const Dashboard = () => {
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  useEffect(() => {
    setNavigationPath('/main/finances/add')
    Telegram.BackButton.hide()
    Telegram.MainButton.hide()
  }, [navigateTo])

  return (
    <div className="Dashboard">
      <h2 className="title">Dashboard</h2>
      <div className="card-container">
        <Card title="Expenses">
          <Pie data={data} />
        </Card>
        <Card title="Income">
          <Pie data={data} />
        </Card>
        <Card title="Income">
          <Pie data={data} />
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

// Dummy Data
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}
