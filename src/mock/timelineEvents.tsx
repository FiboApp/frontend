import {TimelineEventProps, CalendarUtils} from 'react-native-calendars';
import { Event } from '../types/Event.d.tsx';
const EVENT_COLOR = '#e6add8';
const today = new Date();
console.log(today);
export const getDate = (offset = 0) => CalendarUtils.getCalendarDateString(new Date().setDate(today.getDate() + offset));

const currentDate = new Date();

export const timelineEvents : Event[] = [
  {
    title: "Event 1",
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() -2, 10, 0, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 2, 12, 0, 0),
    summary: "This is the first event."
  },
  {
    title: "Event 2",
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 3, 14, 0, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 3, 16, 0, 0),
    summary: "This is the second event."
  },
  {
    title: "Event 3",
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 4, 6, 0, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 4, 7, 0, 0),
    summary: "This is the third event."
    
  },
  {
    title: "Event 3",
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() +2, 10, 0, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2, 12, 0, 0),
    summary: "This is the first event."
  },
  {
    title: "Event 4",
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3, 14, 0, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3, 16, 0, 0),
    summary: "This is the second event."
  },
  {
    title: "Event 5",
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 4, 6, 0, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 4, 7, 0, 0),
    summary: "This is the third event."
  }
];