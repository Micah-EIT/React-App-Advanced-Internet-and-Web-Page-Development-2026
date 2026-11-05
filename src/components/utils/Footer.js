function Footer() {
    // States
    // Data
    let footerStyle = {
        minHeight: '10vh',
        fontSize: '1em',
        color: 'white',
        backgroundColor: '#2C3E50'
    }

    // Functions and methods

    // UI
    return (
    <>
        <header style={footerStyle}>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <p>Created by Micah McClunie</p>
            </div>
        </header>
    </>
    );
}

export default Footer;