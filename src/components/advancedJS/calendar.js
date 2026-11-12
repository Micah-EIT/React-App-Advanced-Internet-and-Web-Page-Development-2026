import { useState, useEffect } from 'react';
import { fetchBookings } from '../../fetchBookings';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function RepairCalendar(props){
    // States
    const [currentView, setCurrentView] = useState('month');
    const [currentDate, setCurrentDate] = useState(undefined);
    const [events, setEvents] = useState([])

    // Data
    const localizer = momentLocalizer(moment)
    let retrievedData = fetchBookings(); 

    // Functions and methods
    // Create calendar events from bookings table on component mount
    useEffect(() => {
        createEvents()
    }, []);

    // Create a calendar event for each booking in the bookings table
    const createEvents = async () => {
        let bookings = await fetchBookings(); 
        let events = []

        // If there are no errors retreiving the booking, create events for each booking
        if (!retrievedData.error) {
            // Each event is is shown with the client's name and scheduled using the repair date
            bookings.data.forEach( (booking) => {
                events.push({
                id: booking.id,
                title: `${booking.first_name} ${booking.last_name}`,
                start: new Date(booking.repair_date),
                end: new Date(booking.repair_date).addHours(1),
            })
            })
        }

        setEvents(events)
    }

    {/* 
      * Adds the specified number of hours to a date object
      * @param {int} hours - The number of hours to add to the date
      */}
    Date.prototype.addHours = function(hours) {
        this.setTime(this.getTime() + (hours*60*60*1000));
        return this;
    }

    // UI
    return (
        <div>
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onView={setCurrentView}
            view={currentView}
            date={currentDate}
            onNavigate={date => {setCurrentDate(date)}}
            style={{ height: 500 }}
            />
        </div>
    )
}

export default RepairCalendar