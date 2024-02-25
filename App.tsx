import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Topbar from './src/Topbar';
import MyCalendar from './src/MyCalendar';
import { createContext } from 'react';
import VIEW from './src/enum/CalendarType';
import { CalendarContext } from './src/context/CalendarContext';
export default function App() {
  const [calendarView, setCalendarView] = useState(VIEW.SEVEN_DAY);
  const changeCalendarView = (view : VIEW) => {
    setCalendarView(view);
  }
  
  return (
    <View style={styles.container}>
      <View style={{marginTop: 48}}>
        <Topbar changeCalendarView={changeCalendarView}/>
        <View style={{marginRight: 8}}>
          {/* <TimelineCalendarScreen/> */}
          <CalendarContext.Provider value={calendarView}>
            <MyCalendar/>

          </CalendarContext.Provider>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
