// Imports
import { useRef, useEffect, useState } from "react";

// Component Function
function CourtesyPhone( { passDataToParent }) {
    // States
    const [selectedPhone, setSelectedPhone] = useState(0);
    const [selectedCharger, setSelectedCharger] = useState(0);

    // Data
    let courtesyList = [
        {id: 0, type: 'none', name: 'none', bond: 0},
        {id: 1, type: 'phone', name: 'iphone 10', bond: 275},
        {id: 2, type: 'phone', name: 'iphone 14', bond: 300},
        {id: 3, type: 'phone', name: 'iphone 16', bond: 500},
        {id: 4, type: 'phone', name: 'samsung galaxy', bond: 200},
        {id: 5, type: 'phone', name: 'nokia', bond: 150},
        {id: 6, type: 'phone', name: 'xiaomi', bond: 100},
        {id: 7, type: 'charger', name: 'iphone charger', bond: 45},
        {id: 8, type: 'charger', name: 'samsung charger', bond: 30},
        {id: 9, type: 'charger', name: 'nokia charger', bond: 25},
        {id: 10, type: 'charger', name: 'xiaomi charger', bond: 25}
    ];

    // Functions and methods

    {/* 
    * Adds/removes a phone from the courtesy items table by changing the currently selected phone and updates the bond total
    * @param {int} selectedOption - The id for the phone that will be added to the items table and bond. 
    * If 'none' is selected, the phone row will be removed from the items table and no phone bond will be added to the bond total
    */}
    let updatePhone = (selectedOption) => {
        {/* Update selected phone */}
        selectedOption == 'none' ? setSelectedPhone(0) : setSelectedPhone(Number(selectedOption)) 

        {/* Update Bond */}
        let updateId = 0
        selectedOption == 'none' ? (updateId = 0) : (updateId = Number(selectedOption)) 
        let updatedPhoneInfo = {
            bond: courtesyList.filter((item) => {return item.id == updateId})[0].bond 
            + courtesyList.filter((item) => {return item.id == selectedCharger})[0].bond, 
            phone: courtesyList.filter(item => {return item.id == updateId})[0].name, 
            charger: courtesyList.filter(item => {return item.id == selectedCharger})[0].name
        }
        passDataToParent(updatedPhoneInfo)
    }

    {/* 
    * Adds/removes a charger from the courtesy items table by changing the currently selected charger and updates the bond total
    * @param {int} selectedOption - The id for the charger that will be added to the items table and bond. 
    * If 'none' is selected, the charger row will be removed from the items table and no charger bond will be added to the bond total
    */}
    let updateCharger = (selectedOption) => {
        {/* Update selected charger */}
        selectedOption == 'none' ? setSelectedCharger(0) : setSelectedCharger(Number(selectedOption)) 

        {/* Update bond */}
        let updateId = 0
        selectedOption == 'none' ? (updateId = 0) : (updateId = Number(selectedOption)) 
        let updatedPhoneInfo = {
            bond: courtesyList.filter((item) => {return item.id == updateId})[0].bond 
            + courtesyList.filter((item) => {return item.id == selectedPhone})[0].bond, 
            phone: courtesyList.filter(item => {return item.id == selectedPhone})[0].name, 
            charger: courtesyList.filter(item => {return item.id == updateId})[0].name
        }
        passDataToParent(updatedPhoneInfo)
    }

    // UI
    return (
    <>
        <h2>Courtesy Phone</h2>
        <div className="p-3 col-11">
            <div className="row mb-3">
                <label for="phone-select" className="col-4 col-form-label">Phone: </label>
                <div className="col-8">
                    <select 
                        name="phone-select" 
                        id="phone-select" 
                        className="form-select"
                        onChange={(event) => updatePhone((event.target.value))}>
                            {/* Dynamically add phones from list */}
                            {courtesyList.map((item) => {
                                if (item.type == 'phone' || item.type == 'none') {
                                    return (
                                        <option value={item.id}>{item.name}</option>
                                    )
                                }
                            })}
                    </select>
                </div>
            </div>
            <br/>
            <div className="row mb-3">
                <label for="charger-select" className="col-4 col-form-label">Charger: </label>
                <div className="col-8">
                    <select 
                        name="charger-select" 
                        id="charger-select" 
                        className="form-select"
                        onChange={(event) => updateCharger((event.target.value))}>
                            {/* Dynamically add chargers from list */}
                            {courtesyList.map((item) => {
                                if (item.type == 'charger' || item.type == 'none') {
                                    return (
                                        <option value={item.id}>{item.name}</option>
                                    )
                                }
                            })}
                    </select>
                </div>
            </div>
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Adds the selected phone to the item table */}
                    {selectedPhone == 0 ? (null) : (
                        <tr>
                            <td>{courtesyList.filter(item => {return item.id == selectedPhone})[0].name}</td>
                            <td>${courtesyList.filter(item => {return item.id == selectedPhone})[0].bond}</td>
                        </tr>
                        )
                    }
                    {/* Adds the selected charger to the item table */}
                    {selectedCharger == 0 ? (null) : (
                        <tr>
                            <td>{courtesyList.filter(item => {return item.id == selectedCharger})[0].name}</td>
                            <td>${courtesyList.filter(item => {return item.id == selectedCharger})[0].bond}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
    );
}

export default CourtesyPhone;