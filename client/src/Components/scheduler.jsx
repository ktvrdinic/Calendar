import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { connect } from "react-redux";
import {
  getDates,
  deleteDate,
  addDate,
  updateDate,
} from "../actions/dateActions";
import PropTypes from "prop-types";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class Scheduler extends React.Component {
  componentDidMount() {
    this.props.getDates();
  }

  render() {
    const { dates } = this.props.date;

    return (
      <div className="mainCalendar">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          selectable={true}
          editable={true}
          nowIndicator={true}
          droppable={true}
          displayEventTime={true}
          timeZone="UTC"
          eventLimit={true}
          weekends={true}
          navLinks={true} // can click day/week names to navigate views
          eventDrop={this.handleEventDrop}
          eventResize={this.handleEventResize}
          eventClick={this.eventClicked}
          dateClick={this.handleDateClick}
          removeEvents={this.removeEv}
          events={dates}
        />
      </div>
    );
  }

  //
  eventClicked = (index, e) => {
    confirmAlert({
      title: "Odaberite",
      message: "Želite li obrisati event ili urediti?",
      buttons: [
        {
          label: "Obrisati",
          onClick: () => {
            this.props.deleteDate(index.event.extendedProps._id);
            alert("Obrisali ste event.");
          },
        },
        {
          label: "Natrag",
        },
      ],
    });
  };

  // Resize event
  handleEventResize = (eventBj) => {
    let updatedEvent = {
      _id: eventBj.event.extendedProps._id,
      title: eventBj.event.title,
      start: eventBj.event.start,
      end: eventBj.event.end,
      allDay: eventBj.event.allDay,
    };

    this.props.updateDate(updatedEvent);
  };

  handleDateClick = async (arg) => {
    let ime = window.prompt("Naziv eventa?");

    if (ime) {
      alert("Rezervirali ste događaj u trajanju od jedan sat.");

      const newEvent = {
        title: ime,
        start: arg.date,
        allDay: false,
      };

      await this.props.addDate(newEvent);
      await this.props.getDates();
    }
  };

  handleEventDrop = (eventBj, date) => {
    let updatedEvent;
    if (eventBj.event.end) {
      updatedEvent = {
        _id: eventBj.event.extendedProps._id,
        title: eventBj.event.title,
        start: eventBj.event.start,
        end: eventBj.event.end,
        allDay: false,
      };
    } else {
      updatedEvent = {
        _id: eventBj.event.extendedProps._id,
        title: eventBj.event.title,
        start: eventBj.event.start,
        allDay: eventBj.event.allDay,
      };
    }

    this.props.updateDate(updatedEvent);
  };
}

Scheduler.propTypes = {
  getDates: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps, {
  getDates,
  deleteDate,
  addDate,
  updateDate,
})(Scheduler);
