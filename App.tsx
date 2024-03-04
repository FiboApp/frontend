import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Topbar from './src/Topbar';
import { CalendarContext } from './src/context/CalendarContext';
import BigCalendar from './src/BigCalendar';
import { Mode } from 'react-native-big-calendar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  const [calendarView, setCalendarView] = useState<Mode>("week");
  const changeCalendarView = (view: Mode) => {
    setCalendarView(view);
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>

        <View style={styles.container}>
          <View style={{ marginTop: 48 }}>
            <Topbar changeCalendarView={changeCalendarView} />
            <View style={{ marginRight: 8 }}>
              <CalendarContext.Provider value={calendarView} >
                <BigCalendar />
              </CalendarContext.Provider>
            </View>
            <View style={styles.layerTop}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button>Talk</Button>
              </View>
            </View>
          </View>

        </View>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layerTop: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    bottom: '10%',
  }
});
