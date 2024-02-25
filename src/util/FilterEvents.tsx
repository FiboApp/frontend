import { Event } from '../types/Event.d.tsx';


export const FilterEvents = (events: Event[], interval: { start: Date, end: Date }) => {
  return events.filter((event: Event) => event.start >= interval.start && event.end <= interval.end);
}
