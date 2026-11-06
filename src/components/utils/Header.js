// Imports
import { Link } from "react-router";

// Functions
function Header() {
    // States
    // Data
    const headerStyle = {
        minHeight: '15vh',
        backgroundColor: '#2C3E50'
    }

    const taglineStyle = {
        minHeight: '15vh'
    }

    const homeButtonStyle = {
        backgroundColor: '#8FB569'
    }

    const extensionButtonStyle = {
        backgroundColor: '#5E9597'
    }

    // Functions and methods

    // UI
    return (
    <>
        <header style={headerStyle}>
            <div className="d-flex flex-column flex-lg-row">
                <div className="d-flex align-items-center justify-content-center col-12 col-lg-8" style={taglineStyle}>
                    <h1 className="p-3 text-center text-white">Project 2: Phone Fix Booking System</h1>
                </div>
                <div className="d-flex col-12 col-lg-4 flex-column flex-md-row">
                    <Link to="/" className="btn h-25 col-12 col-md-6 text-white" style={homeButtonStyle}>Home</Link>
                    <Link to="/advancedjs" className="btn h-25 col-12 col-md-6 text-white" style={extensionButtonStyle}>Extension</Link>
                </div>
            </div>
        </header>
    </>
    );
}

export default Header;