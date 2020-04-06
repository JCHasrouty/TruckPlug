import React, {Component} from 'react';
import {render} from "react-dom";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

// const myEventsList = {} 

class Eventpage extends Component {
  constructor() {
    super();
    const now = new Date();
    const events = [
      {
          id: 0,
          title: 'Vegan Street Fair',
          allDay: true,
          start: new Date('April 1, 2020'),
          end: new Date('April 5, 2020'),
          desc: "Vegan street vendors come together.",
      },

      {
          id: 1,
          title: 'Meet The Trucks',
          allDay: true,
          start: new Date('April 3, 2020'),
          end: new Date('April 5, 2020'),
          desc: "Gang of trucks come together at the park."
      },

      {
          id: 2,
          title: 'A Day At The Park',
          allDay: false,
          start: new Date('April 10, 2020 10:00:00'),
          end: new Date('April 12, 2020 17:00:00'),
      },

      {
          id: 3,
          title: 'Trucks at the Echo Plex',
          allDay: false,
          start: new Date('April 15, 2020 19:00:00'),
          end: new Date('April 15, 2020 00:00:00'),
      },

      {
        id: 4,
        title: 'NoHo Meetup',
        allDay: false,
        start: new Date('April 15, 2020 15:00:00'),
        end: new Date('April 15, 2020 00:00:00'),
      },
    
      {
        id: 5,
        title: 'WeHo Vibes',
        allDay: false,
        start: new Date('April 15, 2020 20:00:00'),
        end: new Date('April 15, 2020 03:00:00'),
      },
      
      {
        id: 6,
        title: 'Melrose and Tell Rose',
        allDay: true,
        start: new Date('April 15, 2020'),
        end: new Date('April 15, 2020'),
      },

      {
          id: 7,
          title: 'Beach City',
          allDay: false,
          start: new Date('April 23, 2020 11:00:00'),
          end: new Date('April 24, 2020 18:00:00'),
      },
      {
          id: 8,
          title: 'E3 2020',
          start: new Date('April 28, 2020 10:00:00'),
          end: new Date('April 30, 2020 20:00:00'),
          desc: 'Big conference for important people',
      },
    ]
    this.state = {
      name: 'React',
      events
    };
  }

  render() {
    return (
      <div>
        {/* <p>
          Upcoming Events
        </p> */}
        <div style={{ height: '750px'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}
// function Eventpage() {
//   return (
//     <div className="container-fluid">
//       <div class="row">
//         <div class="column">
//           <div class="column-one">
//             For the structure of this page: <br/>
//             - Find a calendar and fill in the events for each day
//         </div>
//           </div>
//         </div>
//         <div class="column">
//         </div>
//       </div>
//   );
// }

export default Eventpage;
