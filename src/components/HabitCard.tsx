import { CheckboxCard } from "@chakra-ui/react"
import type{ Habit } from "../App"
import { calculateStreak } from "@/utils";
type HabitCardProps = {
  habit: Habit;
  onToggle: (id: string, dateStr: string) => void;
};




export const HabitCard = ({ habit, onToggle }: HabitCardProps) => {
  const todayStr = new Date().toISOString().split('T')[0]
  const streakCount = calculateStreak(habit.completedDates)

  return (
    <CheckboxCard.Root checked={habit.completedDates.includes(todayStr)} onCheckedChange={()=>(onToggle(habit.id, todayStr))}>
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Content>
          <CheckboxCard.Label>
            {habit.title}
            Streak Count: {streakCount}
          </CheckboxCard.Label>
        </CheckboxCard.Content>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  )
}