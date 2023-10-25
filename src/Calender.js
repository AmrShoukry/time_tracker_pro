import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css'

const localizer = momentLocalizer(moment);


class MyCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      }
    ]
  };

  render() {
    return (
      <div className="MyCalendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "95vh", width: "95%", margin: "2.5vh auto" }} // Adjust width and center
        />
      </div>
    );
  }
}

export default MyCalendar;
