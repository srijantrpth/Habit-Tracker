import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Input, Button
} from '@chakra-ui/react'

export type HabitFormType = {
onAdd: (title: string)=>void
};

export const HabitForm = ({onAdd}:HabitFormType)=>{
const [habit, setHabit] = useState<string>("");
    return (
        <>
        <form onSubmit={(e)=>{
            if(habit.trim()=="") return;
            e.preventDefault();
            onAdd(habit);
            setHabit("")
        }}>
        <FormControl>
  <FormLabel>Habit Title</FormLabel>
  <Input value={habit} onChange={(e)=>setHabit(e.target.value)} placeholder='Enter the Habit: ' type='text'  />
  <FormHelperText>Make sure to follow it.</FormHelperText>
<Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
  
</FormControl>
</form>

        </>
    )
}