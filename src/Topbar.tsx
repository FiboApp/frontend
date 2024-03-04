import { Icon, Button } from '@ui-kitten/components';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Mode } from 'react-native-big-calendar';

const Topbar = ({ changeCalendarView }: { changeCalendarView: (mode: Mode) => void }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.leftElement, { flexDirection: 'row' }]}>
        <TouchableHighlight>
          <Icon style={styles.menuIcon} name='menu-outline'/>
        </TouchableHighlight>
        {/* <Button onPress={() => changeCalendarView("day")} title="day" /> */}
        {/* <Button onPress={() => changeCalendarView("3days")} title="3days" /> */}
        {/* <Button onPress={() => changeCalendarView("week")} title="week" /> */}

      </View>
      <View style={styles.rightElement}>
        <Image style={{ width: 30, height: 30 }} source={require('../assets/pf-icon.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  leftElement: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightElement: {
    flex: 1,
    alignItems: 'flex-end',
  },
  menuIcon: {
    width: 32,
    height: 32,
  }
});

export default Topbar;
