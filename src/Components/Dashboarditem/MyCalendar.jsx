import React from 'react'
import { Calendar, CalendarIcon, CalendarLine, CalendarMain, CalendarPart, DayCalendar, MonthCalendar } from '../../StyleComponent/Dashboard'

export default function MyCalendar() {
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];

const days = new Date();
let dayss = days.getDay()

  return (
   <Calendar>
  <CalendarPart>
  <DayCalendar>{dayss}</DayCalendar>
  <CalendarIcon></CalendarIcon>
  </CalendarPart>
       
    
    <CalendarMain>
    <MonthCalendar>{name}</MonthCalendar>
   <CalendarLine></CalendarLine>
   
    </CalendarMain>
    
   </Calendar>
  )
}
