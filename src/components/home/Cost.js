// Component Function
function Cost(props) {
    // States
    // Data
    // Functions and methods

    {/* 
        Calculates the total cost (without GST), which is the sum of the bond and service fee. 
        Charges a bond equal to sum of the bonds for the selected phone and selected charger if the customer is a consumer
        Charges a $85 service fee if the phone is not under warranty
        @param {bool} hasWarranty - whether or not the phone is currently under warranty. 
        Phones purchased more than 24 months ago cannot be under warranty
        @param {string} customerType - whether the customer is a 'consumer' or a 'business'
        @param {int} bond - the total bond (sum of the bonds for the selected phone and selected charger)
    */}
    const calculateTotal = (hasWarranty, customerType, bond) => {
        let total = 0

        if (customerType != 'business') {
            total += bond
        }
        
        if (!hasWarranty) {
            total += 85
        }

        return total
    }

    // UI
    return (
    <>
        <div className="d-flex flex-column align-items-center justify-content-center col-12">
            <div className="row mb-3 col-10">
                <label for="bond-display" className="col-4 col-form-label">Bond: </label>
                <div className="col-8">
                    {/* Checks if the customer type is business or consumer. 
                    If the customer is a consumer, the bond total (sum of the bond for the selected phone and selected phone charger) is displayed
                    If the customer is a business, no bond is required, so the bond will be $0*/}
                    <input 
                        type="text" 
                        className="form-control" 
                        id="bond-display" 
                        name="bond-display" 
                        value={props.sharedPropCustomerType == 'business' ? '$0': `$${props.sharedPropBond}`} 
                        readOnly/>
                </div>
            </div>
            <div className="row mb-3 col-10">
                <label for="service-fee-display" className="col-4 col-form-label">Service Fee: </label>
                <div className="col-8">
                    {/*If the phone isn't covered by a warranty, charge a service fee of $85*/}
                    <input 
                        type="text" 
                        className="form-control" 
                        id="service-fee-display" 
                        name="service-fee-display"
                        value={props.sharedPropWarranty == true ? '$0' : '$85'} 
                        readOnly/>
                </div>
            </div>
            <div className="row mb-3 col-10">
                <label for="total-display" className="col-4 col-form-label">Total: </label>
                <div className="col-8">
                    {/* Calculate total (total bond + service fee) without GST */}
                    <input 
                        type="text" 
                        className="form-control" 
                        id="total-display" 
                        name="total-display"
                        value={`$${calculateTotal(props.sharedPropWarranty, props.sharedPropCustomerType, props.sharedPropBond)}`} 
                        readOnly/>
                </div>
            </div>
            <div className="row mb-3 col-10">
                <label for="gst-display" className="col-4 col-form-label">GST: </label>
                <div className="col-8">
                    {/* Calculate 15% GST */}
                    <input 
                        type="text" 
                        className="form-control" 
                        id="gst-display"
                        name="gst-display"  
                        value={`$${Math.round(calculateTotal(props.sharedPropWarranty, props.sharedPropCustomerType, props.sharedPropBond)*0.15*100)/100}`} 
                        readOnly/>
                </div>
            </div>
            <div className="row mb-3 col-10">
                <label for="total-gst-display" className="col-4 col-form-label">Total(+GST): </label>
                <div className="col-8">
                    {/* Calculate total (total bond + service fee) with 15% GST */}
                    <input 
                        type="text" 
                        className="form-control" 
                        id="total-gst-display" 
                        name="total-gst-display" 
                        value={`$${Math.round(calculateTotal(props.sharedPropWarranty, props.sharedPropCustomerType, props.sharedPropBond)*1.15*100)/100}`} 
                        readOnly/>
                </div>
            </div>
        </div>
    </>
    );
}

export default Cost;