
import { HabitCard } from "./HabitCard"
export const HabitList = ({habits,onToggle})=>{
return (
    <>
    {habits.map((habit)=>{
<HabitCard habit key={habit.id}/>
    })}
    </>
)
}