import { CheckboxCard } from "@chakra-ui/react"
import type{ Habit } from "../App"

type HabitCardProps = {
  habit: Habit;
  onToggle: (id: string, dateStr: string) => void;
};

export const HabitCard = ({ habit, onToggle }: HabitCardProps) => {
  return (
    <CheckboxCard.Root>
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