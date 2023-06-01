import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../calendar/calendar.css";
import Time from "../admin/Time";
import Sidebar from "../admin/sidebar";

const Calendar1 = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="app">
            <h1 className="header text-center my-5">Calendar</h1>
            <div className="d-flex justify-content-center mb-2">
              <Calendar
                onChange={setDate}
                value={date}
                onClickDay={() => setShowTime(true)}
              />
            </div>

            {date.length > 0 ? (
              <p>
                <span>Start:</span>
                {date[0].toDateString()}
                &nbsp; &nbsp;
                <span>End:</span>
                {date[1].toDateString()}
              </p>
            ) : (
              <p className="d-flex justify-content-center mt-2">
                <span>Default selected date:</span>
                {date.toDateString()}
              </p>
            )}
            <p className="d-flex justify-content-center">
              <Time showTime={showTime} date={date} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar1;
