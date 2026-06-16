import { useState } from 'react'
import { HabitForm } from './components/HabitForm'

import { HabitList } from './components/HabitList'
export type Habit = {
  id: string;
  title: string;
  createdAt: string;
  completedDates: string[];
}

function App() {

  return (
    <>
    <HabitForm/>
    </>
  )
}

export default App
