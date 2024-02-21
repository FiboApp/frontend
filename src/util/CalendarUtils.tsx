export const getToday = () : Date => new Date();
export const getWeek = (date : Date) : Array<Date> => {
  const today : Date = date
  let week : Array<Date> = [today]
  for(let i = 0; i < 6; i++) {
    week.push(getNextDay(week[i]))
  }
  return week
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
