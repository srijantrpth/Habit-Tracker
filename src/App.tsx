import { useEffect, useState } from 'react'
import { HabitForm } from './components/HabitForm'
import { HabitList } from './components/HabitList'

export type Habit = {
  id : string;
  title: string;
  createdAt: string;
  completedDates: string[];
};

function App() {


  
const [habits, setHabits] = useState<Habit[]>( ()=>{
 const response =  localStorage.getItem("habits_data")
if(response){
  return JSON.parse(response)
}
return []
} )
useEffect(()=>{
localStorage.setItem("habits_data", JSON.stringify(habits))
},[habits])

const handleAdd = (title: string)=> {
  setHabits((habits)=>[...habits, {id: crypto.randomUUID(),title: title, createdAt: new Date().toISOString().split('T')[0], completedDates: []}])
}
const handleToggle = (id: string,dateStr: string)=> {
  setHabits((prevHabits)=>{
    return prevHabits.map((habit)=>habit.id === id ? (habit.completedDates.includes(dateStr) ? {...habit,completedDates: habit.completedDates.filter((item)=>item!=dateStr)}: {...habit, completedDates: [...habit.completedDates, dateStr]}) : habit)
  })
}

  return (
    <>
    <HabitForm onAdd={handleAdd}/>
    <HabitList habits={habits} onToggle={handleToggle}/>
    </>
  )
}

export default App
