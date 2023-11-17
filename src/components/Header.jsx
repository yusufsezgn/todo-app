import { useState } from "react";

const Header = () => {
  let currentDate, daysOfWeek, date, monthsOfYear, hour, message;

  date = new Date();
  hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    message = "Good morning";
  } else if (hour >= 12 && hour < 15) {
    message = "Have a nice day";
  } else if (hour >= 15 && hour < 18) {
    message = "Good afternoon";
  } else {
    message = "Good evening";
  }

  daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  monthsOfYear = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];

  currentDate = {
    dayString: daysOfWeek[date.getDay()],
    dayInt: date.getDate(),
    month: monthsOfYear[date.getMonth()],
    message: message,
  };

  const [time, setTime] = useState(currentDate);

  return (
    <div className="w-full h-32 sm:bg-black bg-white flex sm:flex-row flex-col items-center justify-center sm:justify-between md:px-8 sm:px-3 px-0 rounded-t-lg sm:shadow-lg">
      <div className="sm:w-1/2 w-full h-full flex flex-col gap-4 justify-center sm:items-start items-center">
        <div className="flex sm:items-end items-center sm:justify-start justify-center relative sm:w-64 w-full">
          <span className="sm:inline hidden text-[28px] font-bold text-white">
            {time.message}
          </span>
        </div>
        <div className="flex">
          <span className="md:text-base sm:inline hidden text-sm font-semibold text-white opacity-80">
            Let`s talk about what you`re going to do today
          </span>
        </div>
      </div>
      <div className="sm:w-1/2 bg-black w-1/2 sm:py-0 py-3 sm:rounded-none rounded-md h-full flex flex-col justify-center sm:items-end items-center">
        <div className="sm:w-20 w-full flex flex-col justify-center items-center gap-1">
          <div className="w-full flex items-center justify-center">
            <span className="text-sm font-medium opacity-80 text-white">
              {time.dayString}
            </span>
          </div>
          <div className="w-full flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{time.dayInt}</span>
          </div>
          <div className="w-full flex items-center justify-center">
            <span className="text-sm font-medium text-white opacity-80">
              {time.month}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
