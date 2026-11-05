// Imports
import { supabase } from './supabaseClient.js';
import { useEffect, useState } from 'react';

// Component Function
function Bookings() {
  // State
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Functions
  const fetchBookings = async () => {
    try {
      // Start loading while waiting for data
      setLoading(true);
      // Get all data from bookings table
      const { data, error } = await supabase.from('bookings').select('*');
      console.log('Fetched bookings:', data);
      
      // Handle errors
      if (error) throw error;
      // Update bookings with data
      setBookings(data);
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
  }, [])

    // UI
    return (
    <>
        <div style={{minHeight: '60vh'}}>
            <div className="m-3">
            <h1 className='mb-3'>Bookings</h1>
            
            <div className='grid grid-cols-2'>
              {loading ? (<p>Retrieving bookings ...</p>) : error ? (<p>Error: {error}</p>) : (
                bookings.map((booking) => (
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