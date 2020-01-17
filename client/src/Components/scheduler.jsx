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
  updateDate
} from "../actions/dateActions";
import PropTypes from "prop-types";

import "./scheduler.scss"; // webpack must be configured to do this

class Scheduler extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      datess: []
    };
    //this.toggle = this.toggle.bind(this);
  }*/

  /*
  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }*/

  /*  static propTypes = {
    auth: PropTypes.object.isRequired
  };*/

  //componentDidUpdate()
  componentDidMount() {
    // For API
    //var obj = JSON.parse(this.props);

    //console.log("Scheduler didUpdate: " + JSON.stringify((this.props.auth.user.userDates)? this.props.auth.user.userDates : '' ));
    //store.dispatch(loadUser());
    /*if(this.props.auth.user){
      this.setState({
        datess: this.props.auth.user.userDates
      })
    }*/

    //console.log(this.state.datess);
    //this.props.getDates(this.props._id);
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
            right: "dayGridMonth,timeGridWeek,timeGridDay"
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

        {/*
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Dodavanje događaja</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup style={{marginLeft:'25%'}}>
                    <Input type="text" name="name" id="dogadjaj" placeholder="Naziv događaja" onChange={this.onChange} style={{marginTop: '15px'}} />
                    <Button color="primary" style={{marginTop: '15px', marginRight: '15px'}} >Dodaj događaj</Button>
                    <Button color="secondary" onClick={this.toggle} style={{marginTop: '15px'}} >Odustani</Button>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
            */}
      </div>
    );
  }

  /*
  onSubmit = (e) => {
    console.log("2bla"+ e.target.value)
    e.preventDefault();
    const newDate = {
      id: id,
      name: this.state.name
    }
  }*/

  eventClicked = (index, e) => {
    //console.log(index.event.extendedProps._id);

    confirmAlert({
      title: "Odaberite",
      message: "Želite li obrisati event ili urediti?",
      buttons: [
        {
          label: "Obrisati",
          onClick: () => {
            this.props.deleteDate(index.event.extendedProps._id);
            alert("Obrisali ste event.");
          }
        },
        {
          label: "Natrag"
        }
      ]
    });
    //alert("Event Clicked" + arg.event.start);
  };

  handleEventResize = eventBj => {
    console.log("Resize event triggered.");

    const updatedEvent = {
      _id: eventBj.event.extendedProps._id,
      title: eventBj.event.title,
      start: eventBj.event.start,
      end: eventBj.event.end,
      allDay: eventBj.event.allDay
    };

    this.props.updateDate(updatedEvent);
    /*console.log(eventBj);

    const idd = this.state.calendarEvents.findIndex((event) =>{
      return event.id == eventBj.event.id;
    }); 
    
    const updateEvent = Object.assign([], this.state.calendarEvents[idd]);

    updateEvent.end = eventBj.event.end;

    const updateEvents = Object.assign([], this.state.calendarEvents);

    updateEvents[idd] = updateEvent;

    this.setState({calendarEvents: updateEvents});
    console.log(this.state.calendarEvents);*/
  };

  handleDateClick = arg => {
    console.log(arg);

    let ime = window.prompt("Naziv eventa?");

    if (ime) {
      alert("Rezervirali ste događaj u trajanju od jedan sat.");

      const newEvent = {
        title: ime,
        start: arg.date
      };

      this.props.addDate(newEvent);

      /*      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          id: nextId(),
          title: ime,
          start: arg.date
        //})
      });*/
    }
  };

  handleEventDrop = (eventBj, date) => {
    console.log("Event drop\n");
    console.log(eventBj.event);

    /*
    const idd = this.state.calendarEvents.findIndex((event) =>{
      return event.id == eventBj.event.id;
    }); 
    
    const updateEvent = Object.assign([], this.state.calendarEvents[idd]);
  
    updateEvent.start = eventBj.event.start;
    updateEvent.end = eventBj.event.end;
  
    const updateEvents = Object.assign([], this.state.calendarEvents);
  
    updateEvents[idd] = updateEvent;
  
    this.setState({calendarEvents: updateEvents});
    console.log(this.state.calendarEvents);*/
    let updatedEvent;
    if (eventBj.event.end) {
      updatedEvent = {
        _id: eventBj.event.extendedProps._id,
        title: eventBj.event.title,
        start: eventBj.event.start,
        end: eventBj.event.end,
        allDay: eventBj.event.allDay
      };
    } else {
      updatedEvent = {
        _id: eventBj.event.extendedProps._id,
        title: eventBj.event.title,
        start: eventBj.event.start,
        allDay: eventBj.event.allDay
      };
    }

    this.props.updateDate(updatedEvent);
  };
}

Scheduler.propTypes = {
  getDates: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  date: state.date
});

export default connect(mapStateToProps, {
  getDates,
  deleteDate,
  addDate,
  updateDate
})(Scheduler);
