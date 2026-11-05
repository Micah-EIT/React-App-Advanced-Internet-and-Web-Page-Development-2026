// Imports

// Component Function
function CustomerDetail( { passDataToParent } ) {
    // States
    // Data
    // Functions and methods

    {/* Pass customer type to cost component */}
    const updateCustomerType = (value) => passDataToParent(value)

    // UI
    return (
    <>
        <h2>Customer Details</h2>
        <fieldset className="border border-secondary col-10 ms-2 me-2" required>
            <legend className="fs-5 float-none w-auto mx-2">Customer type *</legend>
            <div className="m-2">
                <label className="form-check-label me-2" for="">Consumer: </label>
                <input 
                    className="form-check-input" 
                    type="radio" name="customer-type" 
                    id="radio-consumer" 
                    value="consumer" 
                    onClick={(event) => updateCustomerType(event.target.value)} />
            </div>
            <div className="m-2">
                <label className="form-check-label me-2" for="">Business: </label>
                <input 
                    className="form-check-input" 
                    type="radio" name="customer-type" 
                    id="radio-business" 
                    value="business"
                    onClick={(event) => updateCustomerType(event.target.value)}/>
            </div>
        </fieldset>

        <div className="p-3 col-11">
            <div className="row mb-3">
                <label for="title-select" class="col-4 col-form-label">Title: * </label>
                <div class="col-8">
                    <select name="title-select" id="title-select" class="form-select" required>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label for="fname-input" className="col-4 col-form-label">First name: * </label>
                <div className="col-8">
                    <input type="text" 
                        className="form-control" 
                        id="fname-input" 
                        name="fname-input" 
                        pattern="[A-Za-z\s\-\u2014]+$" 
                        title="Only letters, hyphens, and em-dashes are allowed" 
                        onInput={(e) => e.target.value.replace(/[A-Za-z\s\-\u2014]/g, '')}
                        required
                        />
                </div>
            </div>
            <div className="row mb-3">
                <label for="lname-input" className="col-4 col-form-label">Last name: *</label>
                <div className="col-8">
                    <input type="text" 
                        className="form-control" 
                        id="lname-input" 
                        name="lname-input" 
                        pattern="[A-Za-z\s\-\u2014]+$" 
                        title="Only letters, hyphens, and em-dashes are allowed" 
                        onInput={(e) => e.target.value.replace(/[A-Za-z\s\-\u2014]/g, '')}
                        required
                        />
                </div>
            </div>
            <div className="row mb-3">
                <label for="street-input" className="col-4 col-form-label">Street: *</label>
                <div className="col-8">
                    <input type="text" className="form-control" id="street-input" name="street-input" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="suburb-input" className="col-4 col-form-label">Suburb: </label>
                <div className="col-8">
                    <input type="text" className="form-control" id="suburb-input" name="suburb-input"/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="city-input" className="col-4 col-form-label">City: *</label>
                <div className="col-8">
                    <input type="text" className="form-control" id="city-input" name="city-input" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="postcode-input" className="col-4 col-form-label">Post Code: </label>
                <div className="col-8">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="postcode-input" 
                        name="postcode-input" 
                        pattern="[0-9]{4}" 
                        title="Postcode must be a 4 digit number" 
                        onInput={(e) => e.target.value.replace(/[0-9]{4}/g, '')}/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="phone-number-input" className="col-4 col-form-label">Phone Number: *</label>
                <div className="col-8">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="phone-number-input" 
                        name="phone-number-input" 
                        pattern="[0-9+\(]{1}[+\)0-9\s\-\u2014]+$"
                        title="+64 123 456 7890 or +64 123-456-7890"
                        onInput={(e) => e.target.value.replace(/[0-9+\(]{1}[+\)0-9\s\-\u2014]/g, '')}
                        required/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="email-input" className="col-4 col-form-label">Email: *</label>
                <div className="col-8">
                    <input type="email" className="form-control" id="email-input" name="email-input" required/>
                </div>
            </div>
        </div>
    </>
    );
}

export default CustomerDetail;