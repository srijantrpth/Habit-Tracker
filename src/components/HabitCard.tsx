import { CheckboxCard } from "@chakra-ui/react"
import type{ Habit } from "../App"

type HabitCardProps = {
  habit: Habit;
  onToggle: (id: string, dateStr: string) => void;
};

export const HabitCard = ({ habit, onToggle }: HabitCardProps) => {
  const todayStr = new Date().toISOString().split('T')[0]

  return (
    <CheckboxCard.Root checked={habit.completedDates.includes(todayStr)} onCheckedChange={()=>(onToggle(habit.id, todayStr))}>
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Content>
          <CheckboxCard.Label>
            {habit.title}
          </CheckboxCard.Label>
        </CheckboxCard.Content>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  )
}