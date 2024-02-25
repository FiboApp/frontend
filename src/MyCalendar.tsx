import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { range } from 'lodash';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getToday, getWeek, getMonthDayFormat, getYearMonthDayFormat, getThreeDays, getSingleDay, getNearestSunday, stringToDate } from './util/CalendarUtils';
import { CalendarContext } from './context/CalendarContext';
import { timelineEvents } from './mock/timelineEvents.tsx';
import VIEW from './enum/CalendarType';
import { Event } from './types/Event.d.tsx';
import { FilterEvents } from './util/FilterEvents.tsx';


const times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

const MyCalendar = () => {
  const calendarView = useContext(CalendarContext)
  const [calendarMatrix, setCalendarMatrix] = useState<{ time: String, date: String }[][]>();
  const [events, setEvents] = useState<Event[]>([]);
  // TODO: render event

  useEffect(() => {
    if (calendarView == VIEW.SEVEN_DAY) {
      console.log("Building 7 day matrix")
      setCalendarMatrix(buildWeeklyMatrix(getNearestSunday(getToday())));
    }
    if (calendarView == VIEW.THREE_DAY) {
      setCalendarMatrix(buildThreeDayMatrix(getToday()));
    }
    if (calendarView == VIEW.ONE_DAY) {
      setCalendarMatrix(buildDailyMatrix(getToday()));
    }
    if (calendarMatrix) {
      const eventsToDisplay = FilterEvents(timelineEvents,
        {
          start: stringToDate(calendarMatrix[1][0].date,
            "00:00"),
          end: stringToDate(calendarMatrix[calendarMatrix.length - 1][calendarMatrix[calendarMatrix.length - 1].length - 1].date,
            "23:59")
        })
      setEvents(eventsToDisplay);
      console.log(eventsToDisplay)
    }
  }, [calendarView])
 
  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {calendarMatrix && calendarMatrix.map((row: Array<any>, oindex) => {
            return <View style={[styles.flexHorizontal]} key={oindex}>
              <View style={{ width: 40, marginTop: -6, marginLeft: 4, marginRight: 4 }}>
                <Text style={{ fontSize: 12 }}>{row[0].time}</Text>
              </View>
              {row.map((block : {date:String, time:String}, iindex : number) => {

                return (
                  <View key={iindex} style={{ flex: 1 }}>
                    {block.time === ""
                      ? <Text style={{ marginBottom: 16, alignSelf: 'center' }}>{block.date}</Text>
                      : <View onTouchStart={() => { console.log(block) }} style={styles.box}>
                        <View style={{ flex: 1 }}>
                          {events.map((event : Event, index: number) => {
                            console.log('event: ', event)
                            console.log('time:', event.start.getHours())
                            console.log(parseInt(block.time.slice(0, 2) ), event.start.getHours())
                            if (block.date === getYearMonthDayFormat(event.start) && parseInt(block.time.slice(0, 2) ) == event.start.getHours()) {
                              console.log("should print out")
                              return (
                                <View style={{ flex: 1, position: 'relative' }}>
                                  <View style={styles.eventbox}>
                                    <Text style={{ fontSize: 10, textAlign: 'center' }}>{event.title}</Text>
                                  </View>
                                </View>
                              )
                            }
                          })}
                        </View>
                      </View>
                    }
                  </View>
                );
              })
              }
            </View>
          }
          )
          }

        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  time: {
    width: 60,
    marginLeft: 8,
    marginRight: 2,
    marginBottom: 24,
    textAlign: 'right',
  },
  box: {
    height: 36,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'black',
  },
  eventbox: {
    position: 'absolute',
    // width: 20,
    height: 40,
    backgroundColor: 'lightgrey'
  },
  flexHorizontal: {
    flexDirection: 'row',
  },
  flexVertical: {
    flexDirection: 'column',
  }


})

const buildWeeklyMatrix = (startDay: Date) => {
  let days = getWeek(startDay);
  let calendarMatrix = times.map((time, index) => {
    return days.map((date: Date, index: Int32) => { return { time: time, date: getYearMonthDayFormat(date) } })
  })
  calendarMatrix.unshift(days.map((date: Date, index: Int32) => { return { time: "", date: getMonthDayFormat(date) } }));
  return calendarMatrix
}
const buildThreeDayMatrix = (startDay: Date) => {
  let days = getThreeDays(startDay);
  let calendarMatrix = times.map((time, index) => {
    return days.map((date: Date, index: Int32) => { return { time: time, date: getYearMonthDayFormat(date) } })
  })
  calendarMatrix.unshift(days.map((date: Date, index: Int32) => { return { time: "", date: getMonthDayFormat(date) } }));
  return calendarMatrix
}
const buildDailyMatrix = (startDay: Date) => {
  let days = getSingleDay(startDay);
  let calendarMatrix = times.map((time, index) => {
    return days.map((date: Date, index: Int32) => { return { time: time, date: getYearMonthDayFormat(date) } })
  })
  calendarMatrix.unshift(days.map((date: Date, index: Int32) => { return { time: "", date: getMonthDayFormat(date) } }));
  return calendarMatrix
}



export default MyCalendar;