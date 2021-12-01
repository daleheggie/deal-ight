import DailyCard from "../DailyCard";

const WeeklyList = ({today}) => {

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    // let dayOfTheWeek = days[today.getDay()];

    // Compute a new array of days with today as the first entry
    let computedWeek = [];
    for (let i = 0; i < 7; i++) {
        // Modulus operator deals with the index exceeding the length of the array
        computedWeek.push(days[(today.getDay() + i) % 7])
    }

    return(
        
        computedWeek.map(day => {
            return <DailyCard today={day} key={day}/>
        })
        
    );
}

export default WeeklyList