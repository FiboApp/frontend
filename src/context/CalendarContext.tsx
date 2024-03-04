import { createContext } from "react";
import { Mode } from "react-native-big-calendar";

export const CalendarContext = createContext<Mode>("week");