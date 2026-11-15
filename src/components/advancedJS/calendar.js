// Imports
import { useState, useEffect } from 'react';
import { fetchBookings } from '../../fetchBookings';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Component function
function RepairCalendar(){
    // States
    const [currentView, setCurrentView] = useState('month');
    const [currentDate, setCurrentDate] = useState(undefined);
    const [events, setEvents] = useState([]);

    const localizer = momentLocalizer(moment);

    // Functions and methods
    // Create calendar events from bookings table data on component mount
    useEffect(() => {
        // Create a calendar event for each booking in the bookings table
        const createEvents = async () => {
            const repairTime = 60 // Estimated repair time, in minutes, used to schedule event end time
            let bookings = await fetchBookings(); 
            let events = [];

            // If there are no errors retreiving the bookings, create events for each booking
            if (!bookings.error) {
                bookings.data.forEach( (booking) => {
                    events.push({
                        id: booking.id,
                        // The title of the event is the client's name
                        title: `${booking.first_name} ${booking.last_name}`,
                        // The time of the event is the repair date and time
                        start: new Date(booking.repair_date),
                        // End time is set to the repair time + 1 hour
                        end: new Date(booking.repair_date).getTime() + (repairTime*60*1000),
                    });
                });
            };

            setEvents(events);
        }

        createEvents();
    }, []);

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
    );
};

export default RepairCalendar;