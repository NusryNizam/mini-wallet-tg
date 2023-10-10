export default interface EntriesByMonthInterface {
  month: string
  year: string
  entries: TotalEntryInterface[]
}

interface TotalEntryInterface {
    _id: 'income' | 'expense'
    total: number
}
