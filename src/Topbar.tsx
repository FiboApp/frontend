import React from 'react';
import { View, Text, StyleSheet,Button, Image, TouchableHighlight} from 'react-native';

const Topbar = ({changeCalendarView}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.leftElement, {flexDirection: 'row'}]}>
        <Button onPress={() => changeCalendarView(1)} title="1 day"/>
        <Button onPress={() => changeCalendarView(3)} title="3 day"/>
        <Button onPress={() => changeCalendarView(7)} title="7 day"/>

      </View>
      <View style={styles.rightElement}>
        <Image source={require('../assets/pf-icon.png')} />
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
  },
  leftElement: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightElement: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Topbar;
