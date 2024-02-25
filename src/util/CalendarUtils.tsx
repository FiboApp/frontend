
const mapMonthNameToNumber = (month: string): number => {
  const monthAbbreviations = new Map<string, number>([
    ['Jan', 0], ['Feb', 1], ['Mar', 2], ['Apr', 3], ['May', 4], ['Jun', 5],
    ['Jul', 6], ['Aug', 7], ['Sep', 8], ['Oct', 9], ['Nov', 10], ['Dec', 11]
  ]);

  const monthName = month.slice(0, 3);
  return monthAbbreviations.get(monthName) ?? -1;
};

export const getToday = () : Date => new Date();
export const getWeek = (date : Date) : Array<Date> => {
  const today : Date = date
  let week : Array<Date> = [today]
  for(let i = 0; i < 6; i++) {
    week.push(getNextDay(week[i]))
  }
  return week
}

export const getThreeDays = (date : Date) : Array<Date> => {
  const today : Date = date
  let arr : Array<Date> = [today]
  for(let i = 0; i < 2; i++) {
    arr.push(getNextDay(arr[i]))
  }
  return arr 
}
export const getSingleDay = (date : Date) : Array<Date> => {
  const today : Date = date
  let arr : Array<Date> = [today]
  return arr 
}

export const getNextDay = (date : Date) : Date => {
  const today = date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
}

export const getMonthDayFormat = (date: Date): string => {
  const options : any = { month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const month = formattedDate.split(' ')[0];
  const day = formattedDate.split(' ')[1];
  return `${month.slice(0, 3)} ${day}`;
};


export const getYearMonthDayFormat = (date: Date): string => {
  const options : any = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en', options).format(date);
  return formattedDate.toString()
};

export const getNearestSunday = (date: Date) : Date => {
  let day = date.getDay();
  let diff = date.getDate() - day;
  return new Date(date.setDate(diff));
}
export const stringToDate = (date: String, time: String): Date => {
  const [month, day, year] = date.split(' ');
  const [hours, minutes] = time.split(':');
  let monthInt = mapMonthNameToNumber(month)
  const formattedDate = new Date(parseInt(year), monthInt, parseInt(day.slice(0,-1)), parseInt(hours), parseInt(minutes));
  console.log("formatted:", formattedDate)
  return formattedDate;
};
