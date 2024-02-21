import { StyleSheet, Text, View } from 'react-native';
import TimelineCalendarScreen from './src/Calendar'
import { useEffect, useState } from 'react';
import ICAL from 'ical';
import Topbar from './src/Topbar';
import MyCalendar from './src/MyCalendar';
import { Calendar } from 'react-native-calendars';

// google calenda rapi key - AIzaSyDUVaFfMLWVCg0Stc-g2Ak42Ck6o8lRDBY

enum VIEW {
  ONE_DAY = 1,
  THREE_DAY = 3,
  SEVEN_DAY = 7,
}

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
          <MyCalendar calendarView={calendarView}/>
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
