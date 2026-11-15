// Imports
import UploadFile from "./advancedJS/uploadPhoto.js"
import PhotoGallery from "./advancedJS/uploadedPhotoGallery.js"
import RepairCalendar from "./advancedJS/calendar.js"
import Dashboard from "./advancedJS/dashboard.js"

// Component Function
function AdvancedJS() {
    // UI
    return (
    <>
        <div style={{minHeight: '60vh'}}>
            <div className="text-center bg-warning p-2 mb-3">
                <h2>Statement of authenticity</h2>
                <p>I confirm that:</p>
                <ul>
                    <li style={{listStylePosition: 'inside'}}>This is an original assessment and is entirely my own work.</li>
                    <li style={{listStylePosition: 'inside'}}>It contains no material previously published or written by another person or myself except where
                    due acknowledgement is made in the text.</li>
                    <li style={{listStylePosition: 'inside'}}>No material which to a substantial extent, has been submitted for any other academic course, is
                    included without acknowledgement.</li>
                </ul>
            </div>
            <h1 className="mx-2 my-3 text-center">Advanced JS</h1>
            <div className="accordion d-flex flex-column flex-lg-row" id="accordionExample">
            <div className="d-flex flex-lg-column flex-wrap col-lg-2 align-items-lg-evenly justify-content-center justify-content-lg-start">
                <h2 className="accordion-header col-5 col-lg-11 m-1" id="headingOne">
                    <button className="btn btn-primary col-12 h-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo1" aria-expanded="true" aria-controls="collapseDemo1">
                        Demo 1 - Calendar
                    </button>
                </h2>
                <h2 className="accordion-header col-5 col-lg-11 m-1" id="headingTwo">
                    <button className="btn btn-primary col-12 h-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo2" aria-expanded="false" aria-controls="collapseDemo2">
                        Demo 2 - Upgraded bookings
                    </button>
                </h2>
                <h2 className="accordion-header col-5 col-lg-11 m-1" id="headingThree">
                    <button className="btn btn-primary col-12 h-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo3" aria-expanded="false" aria-controls="collapseDemo3">
                        Demo 3 - Photo upload
                    </button>
                </h2>
                <h2 className="accordion-header col-5 col-lg-11 m-1" id="headingFour">
                    <button className="btn btn-primary col-12 h-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo4" aria-expanded="false" aria-controls="collapseDemo4">
                        Demo 4 - Address Autofill
                    </button>
                </h2>
                <h2 className="accordion-header col-5 col-lg-11 m-1" id="headingFive">
                    <button className="btn btn-primary col-12 h-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo5" aria-expanded="false" aria-controls="collapseDemo5">
                        Demo 5 - Dashboard
                    </button>
                </h2>
            </div>
            <div className="col-12 col-lg-9">
                <div className="accordion-item">
                    <div id="collapseDemo1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5">
                            <h1>Demo 1 - Calendar</h1>
                            <RepairCalendar/>
                            <br/>
                            <p>I created a calendar which displays scheduled phone repairs, taken from bookings saved to the Supabase database. This would be useful for scheduling and organizing upcoming repair bookings. 
                            </p>
                            <p>I used the react-big-calendar component for the calendar and created a function that would retrieve all bookings from the Supabase database and create an event using the client’s name and the repair date for each booking. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body col-12 fs-5">
                            <h1>Demo 2 - Upgraded bookings</h1>
                            <br/>
                            <p>I added a feature to the bookings page which allows users to search all fields for a keyword, sort by ID, first name, last name, repair date, and invoice date (ascending or descending), and filter by warranty status, make, and fault. 
                            </p>
                            <p>This makes it easier to find a specific booking, or to find bookings based on certain metrics, like bookings with the closest repair date, or bookings for phones under warranty. 
                            </p>
                            <p>This was done using functions which trigger each time one of the relevant inputs changes and storing all of the relevant settings (what to sort by, whether to sort in ascending or descending order, which make to filter by, etc) as states, so that updating one input doesn’t reset all of the other inputs. 
                            </p>
                            <p>One issue with this system is that the filters and keyword search cannot both be applied at the same time due to problems with recursive filtering. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5">
                            <h1>Demo 3 - Photo upload</h1>
                            <UploadFile/>
                            <PhotoGallery/>
                            <br/>
                            <p>I added a feature that allows users to upload photos to the Supabase database. This would be useful for allowing users to upload pictures of their damaged phones. 
                            </p>
                            <p>This was done using a Supabase bucket to store the files. Files are inserted and retrieved using a Supabase client. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo4" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body col-12 fs-5">
                            <h1>Demo 4 - Address Autofill</h1>
                            <br/>
                            <p>The address inputs on the phone repair booking form were improved by adding address autofill, which tries to figure out the address the user is typing in and automatically fill in the rest of the address fields. This improves the user experience, as it makes it quicker and easier for users to input their address. It also reduces errors, as the autofill makes sure that the address is valid and enters it in for the user, decreasing the chance of a mistake. 
                            </p>
                            <p>The address autofill was implemented using mapbox with a public token. One issue with deploying this was that GitHub identified the token as a secret and refused to push it to the repository. I circumvented this by forcing the push, but this should not be done in a production environment to ensure that tokens remain secret. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo5" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body col-12 fs-5">
                            <h1>Demo 5 - Dashboard</h1>
                            <Dashboard/>
                            <br/>
                            <p>I created a dashboard which shows the most common phone make, faults, and customer type for bookings. This would be useful for decision making, as looking at insights from bookings could help the phone repair service to tailor their services to better serve their customers. 
                            </p>
                            <p>I used chart.js to create a component that would create custom charts using booking data and a chartConfig object. The dashboard component retrieves the booking data from Supabase and creates a chart for each chartConfig object. This makes it very easy to create new charts or modify existing ones, as you only need to change or add config information to the list of charts. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default AdvancedJS