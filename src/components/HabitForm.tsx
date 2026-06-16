
import { Input,Button  } from "@chakra-ui/react"
export const HabitForm = ({onAdd})=>{
return(


    <>
    <Input placeholder="Enter your Habit: "/>
    <Button type="submit" >Submit</Button>
    </>
)
}