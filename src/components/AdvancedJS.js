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
            <div class="accordion d-flex flex-column flex-lg-row" id="accordionExample">
            <div class="d-flex flex-lg-column col-lg-2">
                <h2 class="accordion-header col-6 col-lg-10 m-lg-1" id="headingOne">
                    <button class="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo1" aria-expanded="true" aria-controls="collapseOne">
                        Demo 1
                    </button>
                </h2>
                <h2 class="accordion-header col-6 col-lg-10 m-lg-1" id="headingTwo">
                    <button class="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo2" aria-expanded="false" aria-controls="collapseTwo">
                        Demo 2
                    </button>
                </h2>
                <h2 class="accordion-header col-6 col-lg-10 m-lg-1" id="headingOne">
                    <button class="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo3" aria-expanded="true" aria-controls="collapseOne">
                        Demo 3
                    </button>
                </h2>
                <h2 class="accordion-header col-6 col-lg-10 m-lg-1" id="headingTwo">
                    <button class="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo4" aria-expanded="false" aria-controls="collapseTwo">
                        Demo 4
                    </button>
                </h2>
                <h2 class="accordion-header col-6 col-lg-10 m-lg-1" id="headingTwo">
                    <button class="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo5" aria-expanded="false" aria-controls="collapseTwo">
                        Demo 5
                    </button>
                </h2>
            </div>
            <div class="col-12 col-lg-9">
                <div class="accordion-item">
                    <div id="collapseDemo1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            demo 1
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div id="collapseDemo2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body col-12">
                            demo 2

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div id="collapseDemo3" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            demo 3                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div id="collapseDemo4" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body col-12">
                            demo 4

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div id="collapseDemo5" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body col-12">
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