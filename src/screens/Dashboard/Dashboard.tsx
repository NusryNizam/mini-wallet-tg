import Card from '../../components/Card/Card'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h2 className="title">Dashboard</h2>
      <div className="card-container">
        <Card title="Expenses"></Card>
        <Card title="Income"></Card>
      </div>
    </div>
  )
}

export default Dashboard
