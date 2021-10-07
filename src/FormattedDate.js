import React from "react";

export default function FormattedDate(props) {
    let date = new Date(props);
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let months = [
    "January", 
    "Febuary", 
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
  
  
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()]
  let hours = props.date.getHours();
  let amOrPm ="AM";
  let numberDay = date.getDate();
    
//need to figure out how to fix the number day to populate   
  
  
  if (hours >= 12) {
    amOrPm = "PM";
    hours = hours - 12;
  }
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }


  return (
    <div>
      {day} {month} {numberDay},  {hours}:{minutes}{amOrPm}
    </div>
  );
}