// Imports
import UploadFile from "./advancedJS/uploadPhoto.js"
import PhotoGallery from "./advancedJS/uploadedPhotoGallery.js"

// Component Function
function AdvancedJS() {
    // States
    // Data
    // Functions and methods

    // UI
    return (
    <>
        <div style={{minHeight: '60vh'}}>
            <h1>THIS IS ADVANCED JS PAGE</h1>
            <div className="accordion d-flex flex-column flex-lg-row" id="accordionExample">
            <div className="d-flex flex-lg-column col-lg-2">
                <h2 className="accordion-header col-6 col-lg-10 m-lg-1" id="headingOne">
                    <button className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo1" aria-expanded="true" aria-controls="collapseOne">
                        Demo 1
                    </button>
                </h2>
                <h2 className="accordion-header col-6 col-lg-10 m-lg-1" id="headingTwo">
                    <button className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo2" aria-expanded="false" aria-controls="collapseTwo">
                        Demo 2
                    </button>
                </h2>
                <h2 className="accordion-header col-6 col-lg-10 m-lg-1" id="headingOne">
                    <button className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo3" aria-expanded="true" aria-controls="collapseOne">
                        Demo 3
                    </button>
                </h2>
                <h2 className="accordion-header col-6 col-lg-10 m-lg-1" id="headingTwo">
                    <button className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo4" aria-expanded="false" aria-controls="collapseTwo">
                        Demo 4
                    </button>
                </h2>
                <h2 className="accordion-header col-6 col-lg-10 m-lg-1" id="headingTwo">
                    <button className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo5" aria-expanded="false" aria-controls="collapseTwo">
                        Demo 5
                    </button>
                </h2>
            </div>
            <div className="col-12 col-lg-9">
                <div className="accordion-item">
                    <div id="collapseDemo1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            demo 1
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body col-12">
                            demo 2

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <UploadFile/>
                            <PhotoGallery/>                     
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo4" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body col-12">
                            demo 4

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div id="collapseDemo5" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body col-12">
                            demo 5

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