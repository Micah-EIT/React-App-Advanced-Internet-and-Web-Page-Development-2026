// Imports
import { Link } from "react-router";

function Buttons() {
    // States
    // Data
    // Functions and methods

    // UI
    return (
    <>
        <div className="d-flex align-items-center justify-content-center col-12">
            <button type="reset" className="w-auto btn btn-light m-2">Reset</button>
            <button type="submit" className="w-auto btn btn-light m-2">Submit</button>
            <Link to="/faqs" className="w-auto btn btn-light m-2">FAQ</Link>
        </div>
    </>
    );
}

export default Buttons;