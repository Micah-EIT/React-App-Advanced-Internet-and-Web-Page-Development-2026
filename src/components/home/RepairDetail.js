function RepairDetail( { passDataToParent } ) {
    // States
    // Data

    // Functions and methods

    {/* Pass warranty information to cost component */}
    const updateWarranty = (value) => passDataToParent(value)

    {/* 
    * Checks if the phone was purchased more than 24 months ago, and disables the warranty checkbox if it was
    * @param {event args} e - Event arguments from the purchase date input
    * */}
    const checkWarrantyChange = (e) => {
        let purchaseDate = new Date(e.target.value);
        let currentDate = new Date();

        {/* Calculate how long ago the phone was purchased (in months) */}
        let diffTime = Math.abs(currentDate - purchaseDate)
        let diffMonths = Math.ceil(diffTime / (1000*60*60*24*30))

        {/* If the phone was purchased more than 24 months ago, disable the warranty box*/}
        if (diffMonths > 24) {
            document.getElementById('warranty-input').disabled = true;
        }
        else {
            document.getElementById('warranty-input').disabled = false;
        }
    }

    // UI
    return (
    <>
        <h2>Repair Details</h2>
        <div className="p-3 col-11">
            <div className="row mb-3">
                <label for="purchase-date-input" className="col-4 col-form-label">Purchase Date: *</label>
                <div className="col-8">
                    <input 
                        type="date" 
                        className="form-control" 
                        id="purchase-date-input" 
                        name="purchase-date-input" 
                        max={new Date(Date.now()).toISOString().split("T")[0] /* Current date */}
                        title="Purchase date must be today or in the past"
                        onChange={checkWarrantyChange}
                        required/>
                </div>
            </div>
            <div className="row">
                <label for="repair-date-input" className="col-4 col-form-label">Repair Date: *</label>
                <div className="col-8">
                    <input 
                        type="datetime-local" 
                        className="form-control" 
                        id="repair-date-input" 
                        name="repair-date-input" 
                        min={new Date(Date.now()).toISOString().split(".")[0].slice(0, -3) /* Current date */}
                        title="Repair date must be today or in the future"
                        required/>
                </div>
            </div>
        </div>
        
        <fieldset className="border border-secondary col-10 ms-2 me-2" required>
            <legend className="fs-5 float-none w-auto mx-2">Under Warranty</legend>
            <div className="d-flex flex-row p-2">
                <label for="warranty-input"> Warranty: </label>
                <div className="ms-2">
                    <input 
                        type="checkbox" 
                        id="warranty-input" 
                        name="warranty-input" 
                        value="has-warranty"
                        onClick={(event) => updateWarranty(event.target.checked) }/>
                </div>
            </div>
        </fieldset>

        <div className="p-3 col-11">
            <div className="row mb-3">
                <label for="imei-input" className="col-4 col-form-label">IMEI Number: *</label>
                <div className="col-8">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="imei-input" 
                        name="imei-input" 
                        pattern="[0-9]{15}"
                        title="IMEI Number must be a 15 diigt number"
                        onInput={(e) => e.target.value.replace(/[0-9]/g, '')}
                        required/>
                </div>
            </div>

            <div className="row mb-3">
                <label for="make-select" class="col-4 col-form-label">Make: *</label>
                <div class="col-8">
                    <select name="make-select" id="make-select" class="form-select" required>
                        <option value="Apple">Apple</option>
                        <option value="LG">LG</option>
                        <option value="Motorola">Motorola</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            
            <div className="row mb-3">
                <label for="model-number-input" className="col-4 col-form-label">Model number: </label>
                <div className="col-8">
                    <input type="text" className="form-control" id="model-number-input" name="model-number-input"/>
                </div>
            </div>

            <div className="row mb-3">
                <label for="fault-select" class="col-4 col-form-label">Fault Category: *</label>
                <div class="col-8">
                    <select name="fault-select" id="fault-select" class="form-select" required>
                        <option value="Battery">Battery</option>
                        <option value="Charging">Charging</option>
                        <option value="Screen">Screen</option>
                        <option value="SD-Storage">SD-Storage</option>
                        <option value="Software">Software</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            
            <div className="row mb-3">
                <label for="description-input" className="col-4 col-form-label">Description: *</label>
                <div className="col-8">
                    <textarea id="description-input" className="form-control" name="description-input" rows="4" cols="50" required></textarea>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default RepairDetail;