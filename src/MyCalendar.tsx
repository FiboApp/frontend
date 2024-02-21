import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { range } from 'lodash';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import React from 'react';
import { getToday, getWeek, getMonthDayFormat, getYearMonthDayFormat } from './util/CalendarUtils';


enum VIEW {
  ONE_DAY = 1,
  THREE_DAY = 3,
  SEVEN_DAY = 7,
}

const MyCalendar = ({calendarView}: {calendarView : VIEW}) => {
  const times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  // TODO: render event
  let weekly = getWeek(getToday());

  console.log('calendarView: ', calendarView)
  let calendarMatrix = times.map((time, index) => {
    return weekly.map((date: Date, index: Int32) => { return { time: time, date: getYearMonthDayFormat(date) } })
  })
  calendarMatrix.unshift(weekly.map((date: Date, index: Int32) => { return { time: "", date: getMonthDayFormat(date) } }));

  const event = {
    start: `1 09:20:00`,
    end: `1 12:00:00`,
    title: 'Merge Request to React Native Calendars',
    summary: 'Merge Timeline Calendar to React Native Calendars'
  }
  console.log(event);
  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {calendarMatrix.map((row: Array<any>, oindex) => {
            return <View style={[styles.flexHorizontal]} key={oindex}>
              <View style={{ width: 40, marginTop: -6, marginLeft: 4, marginRight: 4 }}>
                <Text style={{ fontSize: 12 }}>{row[0].time}</Text>
              </View>
              {row.map((block, iindex) => {

                return (
                  <View key={block.date + block.time} style={{ flex: 1 }}>
                    {block.time === ""
                      ? <Text style={{ marginBottom: 16, alignSelf: 'center' }}>{block.date}</Text>
                      : <View onTouchStart={() => { console.log(block) }} style={styles.box}>
                        <View style={{ flex: 1 }}>
                          {block.time === `01:00` &&
                            (
                              <View style={{flex: 1, position:'relative'}}>
                                <View style={styles.eventbox}></View>
                                <View style={styles.eventbox}></View>
                              </View>
                            )
                          }

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
        {/* 

        <View style={[styles.flexHorizontal, {}]}>
   
          <View style={[styles.flexHorizontal, { flex: 1 }]} >
            {weekly.map((date: Date, oindex: Int32) => {
              return (
                <View key={oindex}>
                  <View onTouchStart={() => console.log("day: ", date)}>
                    {times.map((time, iindex) => {
                      return (
                        <View key={time}>
                        
                          {iindex === 0 && <Text>{getMonthDayFormat(date)}</Text>}
                          <View style={oindex === 0 && {flexDirection: 'row'}}>
                            {oindex === 0 && <Text>{time}</Text>}
                          </View>

                            <View onTouchStart={() => console.log("time: ", time)} style={[styles.flexVertical]}>
                              <View style={[styles.box, { width: "100%", height: 32 }]}>
                              </View>
                            </View>

                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>

        </View> */}

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
    position:'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'lightgrey'
  },
  flexHorizontal: {
    flexDirection: 'row',
  },
  flexVertical: {
    flexDirection: 'column',
  }


})

export default MyCalendar;