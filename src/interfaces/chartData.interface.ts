export default interface ChartDataInterface {
  labels: string[]
  datasets: DatasetInterface[]
}

interface DatasetInterface {
  label: string
  data: number[]
  backgroundColor: string[]
  borderColor: string[]
  borderWidth: number
}
