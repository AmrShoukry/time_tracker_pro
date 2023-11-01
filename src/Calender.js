import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React, { useState, useEffect } from "react";


import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css'
import hasExccededDeadline from './UtilityFunctions';


const localizer = momentLocalizer(moment);



// class MyCalendar extends Component {

//     const [data, setData] = useState(null)

//     useEffect(() => {
//         fetch('http://localhost:8000/projects')
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             setData(data)
//         });
//     }, [])

//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment().add(1, "days").toDate(),
//         title: "Some title",
//       }
//     ]
//   };

//   render() {
//     return (
//       <div className="MyCalendar">
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           style={{ height: "95vh", width: "95%", margin: "2.5vh auto" }} // Adjust width and center
//         />
//       </div>
//     );
//   }
// }

// export default MyCalendar;



const MyCalendar = () => {

    const [data, setData] = useState(null)
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/projects')
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.forEach((project) => {
                if (hasExccededDeadline(project["to"]))
                {
                    project["late"] = 1;
                }
            })
            setData(data)
            setEvents(data.map((project) => ({
                start: new Date(project["from"]),
                end: new Date(project["to"]),
                title: project["headline"],
                color: detectColor(project)
            })))
    
        });
    }, [])

    function detectColor(project)
    {
        if (project["completed"] === 1)
        {
            return "#0db857"
        }
        else
        {
            if (project["late"] === 1)
            {
                return "#b3180c"
            }
            else
            {
                return "#095de3"
            }
        }
    }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: event.color,
    };
    return {
      style,
    };
  };



    return ( 
        <div className="MyCalendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          eventPropGetter={eventStyleGetter}
          style={{ height: "95vh", width: "95%", margin: "2.5vh auto" }} // Adjust width and center
        />
      </div>
     );
}
 
export default MyCalendar;