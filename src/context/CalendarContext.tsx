import { createContext } from "react";
import VIEW from "../enum/CalendarType";

export const CalendarContext = createContext(VIEW.SEVEN_DAY);