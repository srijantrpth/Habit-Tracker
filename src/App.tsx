import { useState } from 'react'
import { HabitForm } from './components/HabitForm'
import { HabitList } from './components/HabitList'

export type Habit = {
  id : string;
  title: string;
  createdAt: string;
  completedDates: string[];
};

function App() {


  
const [habits, setHabits] = useState<Habit[]>([{
  id: "123",
  title: "Drink Water",
  createdAt: "2026-06-06",
  completedDates: ["2026-06-06","2026-06-12","2026-06-18"]

}])

const handleAdd = (title: string)=> {
  setHabits((habits)=>[...habits, {id: crypto.randomUUID(),title: title, createdAt: new Date().toISOString().split('T')[0], completedDates: []}])
}
const handleToggle = (id: string,dateStr: string)=> console.log(`Toggling: ${id}, ${dateStr}`)

  return (
    <>
    <HabitForm onAdd={handleAdd}/>
    <HabitList habits={habits} onToggle={handleToggle}/>
    </>
  )
}

export default App
