import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../calendar/calendar";

const time = ["08:00", "10:00", "12:00", "14:00", "16:00"];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (
    <div className="times">
      {time.map((times) => {
        return (
          <div>
            <button className="timeBtn" onClick={(e) => displayInfo(e)}>
              {" "}
              {times}{" "}
            </button>
          </div>
        );
      })}
      <div>
        {info
          ? `Your deadline is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
}

export default Times;
