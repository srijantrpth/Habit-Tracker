export const calculateStreak = (completedDates: string[]): number => {
if(completedDates.length==0) return 0;

let currentStreak = 0;

const currentDate = new Date();

while(true){
    const dateString = currentDate.toISOString().split('T')[0]
    if(completedDates.includes(dateString)){
        currentStreak++;
        currentDate.setDate(currentDate.getDate()-1)
    }
    else{
        if(currentStreak==0){
            const todayStr = new Date().toISOString().split('T')[0];
            if(dateString==todayStr){
                currentDate.setDate(currentDate.getDate()-1);
                continue;

            }
        }
        break;
    }
}
return currentStreak;
}
