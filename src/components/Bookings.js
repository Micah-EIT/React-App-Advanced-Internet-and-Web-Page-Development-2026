// Imports
import { supabase } from './supabaseClient.js';
import { useEffect, useState } from 'react';
import dropdownItems from "./data/dropdownItems.json";

// Component Function
function Bookings() {
    // State
    const [sortBy, setSortBy] = useState("id");
    const [sortAscDesc, setSortAscDesc] = useState("Asc");
    const [filterWarranty, setFilterWarranty] = useState("All");
    const [filterMake, setFilterMake] = useState("All");
    const [filterFault, setFilterFault] = useState("All");

    const [bookings, setBookings] = useState([]);
    const [bookingsToDisplay, setBookingsToDisplay] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // Functions
    {/* 
      * Fetches bookings from the Supabase database
      */}
    const fetchBookings = async () => {
      try {
        // Start loading while waiting for data
        setLoading(true);
        // Get all data from bookings table
        const { data, error } = await supabase.from('bookings').select('*');
        
        // Handle errors
        if (error) throw error;
        // Update bookings with data
        setBookings(data);
        sortBookings(sortBy, sortAscDesc, data);
      }
      // Log error
      catch (error) {
        setError(error.message);
        console.error('Error fetching bookings:', error.message)
      }
      finally {
        // End loading
        setLoading(false)
      }
    };

    // Fetch bookings on component mount
    useEffect(() => {
      fetchBookings(); 
    }, []);

    {/* 
      * Filters bookings based on keywords
      */}
    const searchBookings = (keyword, bookings) => {
        {/* Return all questions if no keyword has been entered */}
        let filteredBookings = []

        if (keyword) {
            {/* Return all questions where the question or answer contains the keyword */}
            let filteredBookings = []

            bookings.forEach( (booking) => 
            {
                if (containsKeyword(booking, keyword)) {
                    filteredBookings.push(booking)
                }
            })

            setBookingsToDisplay(filteredBookings)
            return
        }
        
        setBookingsToDisplay(bookings)
    }

    const containsKeyword = (object, keyword) => {
        let values = Object.values(object)
        let containsKeyword = false

        values.forEach((value) => {
            if (value) {
                if (value.toString().toLowerCase().includes(keyword.toLowerCase())) {
                    containsKeyword = true
                }
            }
        })

        return containsKeyword
    }

    const sortBookings = (sortBy, sortAscDesc, bookings) => {
        let sortedBookings = bookings

        if (sortedBookings) {
            if (sortBy.includes('name')) {
              sortedBookings = sortedBookings.sort(
                (booking1, booking2) => (booking1[sortBy].localeCompare(booking2[sortBy]))
              );
            }
            else {
              sortedBookings = sortedBookings.sort(
                (booking1, booking2) => (booking1[sortBy] > booking2[sortBy]) ? 1: -1
              );
            }

            if (sortAscDesc === 'Desc') {
                sortedBookings = sortedBookings.reverse();
            }
        }

        setBookingsToDisplay(sortedBookings)
    }

    const filterBookings = (warranty, make, fault, bookings) => {
        let filteredBookings = bookings

        if (warranty !== 'All') {
            filteredBookings = bookings.filter((booking) => booking.has_warranty.toString() === warranty);
        }

        if (make !== 'All') {
            filteredBookings = filteredBookings.filter((booking) => booking.make === make);
        }

        if (fault !== 'All') {
            filteredBookings = filteredBookings.filter((booking) => booking.fault === fault);
        }

        setBookingsToDisplay(filteredBookings)
    }

    // UI
    return (
    <>
        <div style={{minHeight: '60vh'}}>
            <div className="m-3">
            <h1 className='mb-3'>Bookings</h1>
            <div>
             <form>
               <div className='d-flex flex-column flex-lg-row align-items-end'>
                 <div className='col-lg-6 col-12 me-2'>
                    <input
                    type="text"
                    id="bookings-search"
                    name="bookings-search"
                    className='form-control mb-3' 
                    onChange={((event) => searchBookings(event.target.value, bookings))}>
                   </input>
                 </div>
                 <div className='col-lg-2 col-5 me-2'>
                    Sort: 
                    <div className='d-flex flex-row'>
                      <select
                        id="sort-by-select"
                        name="sort-by-select"
                        className='form-control mb-3' 
                        onChange={(event) => {
                            setSortBy(event.target.value); 
                            sortBookings(event.target.value, sortAscDesc, bookingsToDisplay);
                        }}>
                        <option value="id">ID</option>
                        <option value="first_name">First name</option>
                        <option value="last_name">Last name</option>
                        <option value="repair_date">Repair Date</option>
                        <option value="created_at">Invoice Date</option>
                      </select>
                      <select
                        id="sort-asc/desc-select"
                        name="sort-asc/desc-select"
                        className='form-control mb-3' 
                        onChange={(event) => {
                            setSortAscDesc(event.target.value); 
                            sortBookings(sortBy, event.target.value, bookingsToDisplay);
                        }}>
                        <option value="Asc">Ascending</option>
                        <option value="Desc">Descending </option>
                      </select>
                    </div>
                 </div>
                 <div className='col-lg-1 col-5'>
                   <div className="dropdown">
                      <button className="form-control text-start dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Menu
                      </button>
                      <ul className="dropdown-menu p-2">
                        <li className='d-flex flex-row align-items-center mb-2'>
                            Warranty: 
                            <select
                              id="sort-warranty-select"
                              name="sort-warranty-select"
                              className='form-control ms-2' 
                              onChange={(event) => {
                                  setFilterWarranty(event.target.value); 
                                  filterBookings(event.target.value, filterMake, filterFault, bookings);
                            }}>
                                <option value="All">All</option>
                                <option value="true">Has Warranty</option>
                                <option value="false">No Warranty</option>
                            </select>
                        </li>
                        <li className='d-flex flex-row align-items-center mb-2'>
                            Make:
                            <select
                            id="filter-make-select"
                            name="filter-make-select"
                            className='form-control ms-2'
                            onChange={(event) => {
                                setFilterMake(event.target.value); 
                                filterBookings(filterWarranty, event.target.value, filterFault, bookings);
                            }}>
                                <option value="All">All</option>
                                {dropdownItems['make'].map((make) => {
                                    return (<option key={make} value={make}>{make}</option>)
                                })}
                            </select>
                        </li>
                        <li className='d-flex flex-row align-items-center mb-2'>
                            Fault
                            <select
                            id="filter-fault-select"
                            name="filter-fault-select"
                            className='form-control ms-2'
                            onChange={(event) => {
                                setFilterFault(event.target.value); 
                                filterBookings(filterWarranty, filterMake, event.target.value, bookings);
                            }}>
                                <option value="All">All</option>
                                {dropdownItems['fault'].map((fault) => {
                                    return (<option key={fault} value={fault}>{fault}</option>)
                                })}
                            </select>
                        </li>
                      </ul>
                  </div>
                 </div>
               </div>
             </form>
           </div>

            <div className='grid grid-cols-2'>
              {loading ? (<p>Retrieving bookings ...</p>) : error ? (<p>Error: {error}</p>) : (
                bookingsToDisplay.map((booking) => (
                  <div key={booking.id} className="card me-3 mb-3 p-3">
                    <h2 className='mb-3'>{`${booking.title} ${booking.first_name} ${booking.last_name}`}</h2>
                    <div className='d-flex flex-column flex-lg-row'>
                      <div className='col-12 col-lg-4 fs-5'>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Job number: `}</p>
                          <p className='col-8'>{booking.id}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Invoice date: `}</p>
                          <p className='col-8'>{`${new Date(booking.created_at).toISOString().split("T")[0]} ${new Date(booking.created_at).toTimeString().split("G")[0]}`}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Street: `}</p>
                          <p className='col-8'>{booking.street}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Suburb: `}</p>
                          <p className='col-8'>{booking.suburb}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`City: `}</p>
                          <p className='col-8'>{booking.city}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Postcode: `}</p>
                          <p className='col-8'>{booking.suburb}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Email: `}</p>
                          <p className='col-8'>{booking.email}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Phone number: `}</p>
                          <p className='col-8'>{booking.phone_number}</p>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 fs-5'>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Purchase date: `}</p>
                          <p className='col-8'>{booking.purchase_date}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Repair date: `}</p>
                          <p className='col-8'>{`${new Date(booking.repair_date).toISOString().split("T")[0]} ${new Date(booking.repair_date).toLocaleTimeString()}`}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Has warranty: `}</p>
                          <p className='col-8'>{booking.has_warranty ? 'Yes': 'No'}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`IMEI number: `}</p>
                          <p className='col-8'>{booking.imei}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Make: `}</p>
                          <p className='col-8'>{booking.make}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Model number: `}</p>
                          <p className='col-8'>{booking.model_number}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Fault: `}</p>
                          <p className='col-8'>{booking.fault}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Description: `}</p>
                          <p className='col-8'>{booking.description}</p>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 fs-5'>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Courtesy phone: `}</p>
                          <p className='col-8'>{booking.courtesy_phone}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Courtesy charger: `}</p>
                          <p className='col-8'>{booking.courtesy_charger}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Bond: `}</p>
                          <p className='col-8'>{`$${booking.bond}`}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Service fee: `}</p>
                          <p className='col-8'>{`$${booking.service_fee}`}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Total (without GST): `}</p>
                          <p className='col-8'>{`$${booking.total_without_gst}`}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`GST: `}</p>
                          <p className='col-8'>{`$${booking.gst}`}</p>
                        </div>
                        <div className="row">
                          <p className='col-4 fw-bold'>{`Total (with GST): `}</p>
                          <p className='col-8'>{`$${booking.total_with_gst}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
          </div>
        </div>
    </>
    )
}

export default Bookings