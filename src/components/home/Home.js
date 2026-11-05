// Import
import CustomerDetail from "./CustomerDetail.js";
import RepairDetail from "./RepairDetail.js";
import CourtesyPhone from "./CourtesyPhone.js"
import Buttons from "./Buttons.js";
import Cost from "./Cost.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient.js"

// Component
function Home( ) {
    // States
    const [sharedBond, setSharedBond] = useState(0);
    const [sharedPhone, setSharedPhone] = useState("none");
    const [sharedCharger, setSharedCharger] = useState("none");
    const updateSharedPhoneInfo = (dict) => {
        setSharedBond(dict.bond);
        setSharedPhone(dict.phone);
        setSharedCharger(dict.charger);
    }

    const [sharedCustomerType, setSharedCustomerType] = useState(0);
    const updateSharedCustomerType = (value) => setSharedCustomerType(value);

    const [sharedWarranty, setSharedWarranty] = useState(false);
    const updateSharedWarranty = (value) => setSharedWarranty(value);

    // Data
    const navigate = useNavigate();

    // Functions and methods
    {/* 
        Saves a new booking to the Supabase database when the form submits.
        Data for the new booking is taken from the form. 
        @param {EventArgs} event - event arguments, used to get form data
    */}
    const formSubmit = async(event) => {
        event.preventDefault();

        // Retreive form data
        const formData = new FormData(event.target);

        // Create booking object
        const bookingData = {
            customer_type: formData.get('customer-type'),
            title: formData.get('title-select'),
            first_name: formData.get('fname-input'),
            last_name: formData.get('lname-input'),
            street: formData.get('street-input'),
            suburb: formData.get('suburb-input'),
            city: formData.get('city-input'),
            postcode: parseFloat(formData.get('postcode-input')),
            phone_number: formData.get('phone-number-input'),
            email: formData.get('email-input'),
            purchase_date: formData.get('purchase-date-input'),
            repair_date: formData.get('repair-date-input'),
            has_warranty: formData.get('warranty-input') ? true : false,
            imei: parseFloat(formData.get('imei-input')),
            make: formData.get('make-select'),
            model_number: formData.get('model-number-input'),
            fault: formData.get('fault-select'),
            description: formData.get('description-input'),
            courtesy_phone: sharedPhone,
            courtesy_charger: sharedCharger,
            // Bond, service fee, total etc are stored as numbers, without the currency symbol
            bond: formData.get('bond-display').replace('$', ''),
            service_fee: formData.get('service-fee-display').replace('$', ''),
            gst: formData.get('gst-display').replace('$', ''),
            total_without_gst: formData.get('total-display').replace('$', ''),
            total_with_gst: formData.get('total-gst-display').replace('$', '')
        }

        // Check that form data is valid
        let validationError = validateFormData(bookingData)

        if (validationError !== "") {
            alert(`Error: ${validationError}`)
            return
        }
        
        // If no error is returned, save booking data to Supabase DB
        try {
            // Insert data into DB
            console.log("Attempting to save booking")
            const { data, error } = await supabase.from('bookings').insert([bookingData]);
            // Handle errors
            if (error) throw error;
            console.log('Booking added: ', data);
        }
        catch (error) {
            alert(`Error ${error.message}`)
            return
        }

        // Go to bookings page
        try {
            // Clear form
            event.target.reset();
            navigate("/bookings");
        }
        catch(e) {
            alert("Error")
        }
    }

    {/* 
        Checks that form data is valid
        @param {EventArgs} formData - event arguments, data from the submitted form
        @returns {string | null} returns an error if data is invalid
    */}
    const validateFormData = (bookingData) => {
        const requiredFields = ['customer_type', 'title', 'first_name', 'last_name', 'street', 'city', 'email', 'purchase_date', 'repair_date', 'imei', 
            'make', 'fault', 'description', 'courtesy_phone', 'courtesy_charger', 'bond', 'service_fee', 'gst', 'total_without_gst', 'total_with_gst']

        console.log(bookingData)
        // Check required fields have data
        requiredFields.forEach((field) => {
            if (bookingData[field] === null || bookingData[field] === "") {
                return `Please fill in all required fields (marked with *). ${field} is not filled in.`
            }
        })
        
        // Checks if data matches appropriate regular expression
        if (!/[A-Za-z\s\-\u2014]+$/.test(bookingData.first_name)) {
            return "Only letters, hyphens, and em-dashes are allowed in a first name"
        }
        if (!/[A-Za-z\s\-\u2014]+$/.test(bookingData.last_name)) {
            return "Only letters, hyphens, and em-dashes are allowed in a last name"
        }
        if (bookingData.postcode) {
            if (!/[0-9]{4}/.test(bookingData.postcode)) {
                return "Postcode must be a 4 digit number"
            }
        }
        if (!/[0-9+\(]{1}[+\)0-9\s\-\u2014]+$/.test(bookingData.phone_number)) {
            return "Phone number must follow pattern: +64 123 456 7890 or +64 123-456-789"
        }
        if (!/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(bookingData.email)) {
            return "Please enter a valid email"
        }
        if (!/[0-9]{15}/.test(bookingData.imei)) {
            return "IMEI Number must be a 15 diigt number"
        }

        // Domain checks
        if (bookingData.customer_type !== "consumer" && bookingData.customer_type !== "business") {
            return "Customer type must be consumer or business"
        }
        try {
            let checkPurchaseDate = new Date(bookingData.purchase_date)
            // Checks that the purchase date is a valid date, and that the purchase date is not in the future
            if (!(checkPurchaseDate instanceof Date) || isNaN(checkPurchaseDate) 
                || checkPurchaseDate > new Date(Date.now()).toISOString().split("T")[0]) {
                return "Purchase date must be a valid date, today or in the past"
            }
        }
        catch {
            return "Purchase date must be a valid date, today or in the past"
        }
        
        return ""
    }

    {/* 
        Resets cost section of form when form is reset
    */}
    const formReset = () => {
        setSharedBond(0);
        setSharedPhone('none');
        setSharedCharger('none');
        setSharedWarranty(false);
    }

    // UI
    return (
    <>
        <form  style={{minHeight: '60vh'}} onSubmit={formSubmit} onReset={formReset}>
            <div className="row" style={{minHeight: '60vh'}}>
                {/* Customer Details */}
                <div className="col-12 col-lg-4 p-4 d-flex flex-column align-items-center" style={{backgroundColor: '#FBE0BC'}}>
                    <CustomerDetail passDataToParent={updateSharedCustomerType}/>
                </div>

                {/* Repair Details */}
                <div className="col-12 col-lg-4 p-4 d-flex flex-column align-items-center" style={{backgroundColor: '#EFFFFF'}}>
                    <RepairDetail passDataToParent={updateSharedWarranty}/>
                </div>

                {/* Courtesy Phone & Cost */}
                <div className="col-12 col-lg-4 p-0">
                    {/* Courtesy Phone */}
                    <div className="col-12 p-4 d-flex flex-column align-items-center" style={{backgroundColor: '#5E9597', minHeight: '50%'}}>
                        <CourtesyPhone passDataToParent={updateSharedPhoneInfo}/>
                    </div>
                    {/* Cost */}
                    <div className="col-12 p-4 d-flex flex-column align-items-center" style={{backgroundColor: '#DE8B6F', minHeight: '50%'}}>
                        <Cost sharedPropBond={sharedBond} sharedPropCustomerType={sharedCustomerType} sharedPropWarranty={sharedWarranty}/>
                    </div>
                </div>
            </div>

            {/* Form Buttons */}
            <div className="d-flex col-12 flex-column flex-lg-row justify-content-center align-items-center" style={{backgroundColor: '#DE8B6F'}}>
                <Buttons/>
            </div>
        </form>
    </>
    );
}

// Export
export default Home;