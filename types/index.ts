type Day = 'Today' | 'Tomorrow'

export type Task = {
  id: number
  createdAt: string
  title: string
  description: string
  labels: {}
  checklist: null
  createdByAccountId: number | null
  assignedToAccountId: number | null
  projectId: number | null
  assignedDay: Day
}
