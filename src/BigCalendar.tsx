import { Calendar } from 'react-native-big-calendar'
import { Dimensions } from 'react-native';
import { useContext } from 'react';
import { CalendarContext } from './context/CalendarContext';
const events = [
  {
    title: 'Meeting',
    start: new Date(2024, 2, 4, 10, 0),
    end: new Date(2024, 2, 4, 10, 30),
  },
  {
    title: 'Coffee break',
    start: new Date(2024, 2, 4, 15, 45),
    end: new Date(2024, 2, 4, 16, 30),
  },
]
const windowHeight = Dimensions.get('window').height;


export default function BigCalendar() {
  const calendarView = useContext(CalendarContext)
  console.log(calendarView);
  return (
  <Calendar events={events} 
            height={windowHeight} 
            onPressCell={(e) => console.log(e)} 
            onChangeDate={([start, end]) => console.log(start, end)}
            mode={calendarView}
            theme={{}}
            headerContainerStyle={{height: 72 }}
            headerComponentStyle={{backgroundColor: 'blue'}}
            // headerContentStyle={{backgroundColor:'yellow'}}
            />
  )
}