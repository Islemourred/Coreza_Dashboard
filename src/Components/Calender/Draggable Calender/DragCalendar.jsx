import React, { Fragment, useEffect } from 'react';
import { Col } from 'reactstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { H4 } from '../../../AbstractElements';
import { initialstate } from './DragData';
import { Dragging_Event } from '../../../Constant';

const DragCalendar = () => {
  const state = initialstate;
  useEffect(() => {
    let draggableEl = document.getElementById('external-events');
    new Draggable(draggableEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        let title = eventEl.getAttribute('title');
        let id = eventEl.getAttribute('data');
        return {
          title: title,
          id: id
        };
      }
    });
  }, []);
  const eventClick = (eventClick) => {
    Swal.fire({
      title: eventClick.event.title,
      html:
        `<div className="table-responsive theme-scrollbar">
                <table className="table">
                <tbody>
                <tr >
                <td>Title</td>
                <td><strong>` +
        eventClick.event.title +
        `</strong></td>
                </tr>
                <tr >
                <td>Start Time</td>
                <td><strong> ` + eventClick.event.start + ` </strong></td>
                </tr>
                </tbody>
                </table>
                </div>`,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Remove Event',
      cancelButtonText: 'Close'
    }).then(result => {
      if (result.value) {
        eventClick.event.remove();
        Swal.fire('Deleted!', 'Your Event has been deleted.', 'success');
      }
    });
  };
  return (
    <Fragment>
      <Col xxl={3} lg={12}>
        <div id="external-events" >
          <H4 attrH4={{className: 'mb-3 f-22'}}>{Dragging_Event}</H4>
          {state.events.map(event => (
            <div className={`fc-event w-100 b-r-6 text-start mb-2 btn ${event.bgClass}`} title={event.title} data={event.id} key={event.id} >
              <i className={`fa ${event.iconClass} me-2`}></i>
              {event.title}
            </div>
          ))}
        </div>
      </Col>
      <Col xxl={9} lg={12}>
        <div className="demo-app-calendar" id="mycalendartest">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            rerenderDelay={10}
            eventDurationEditable={false}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, interactionPlugin]}
            weekends={state.calendarWeekends}
            events={state.calendarEvents}
            eventClick={eventClick}
          />
        </div>
      </Col>
    </Fragment>
  );
};
export default DragCalendar;