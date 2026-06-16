
import { HabitCard } from "./HabitCard"

import type { Habit } from "@/App"
export type HabitListType = {
    habits: Habit[];
    onToggle: (id: string,  dateStr: string) => void
};
export const HabitList = ({habits,onToggle}:HabitListType)=>{
return (
    <>
    {habits.map((habit:Habit)=>(
        <HabitCard habit={habit} onToggle={onToggle} key={habit.id}/>
    ))}
    </>
)
}