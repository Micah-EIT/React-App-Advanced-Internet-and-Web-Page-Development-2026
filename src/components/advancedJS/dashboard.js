//Imports
import { fetchBookings } from "../../fetchBookings.js";
import DashboardChart from "./charts.js";
import { useState, useEffect } from "react";

// Component function
function Dashboard() {
    // States
    const [data, setData] = useState([])

    // Data
    // Config information used to create charts (chartConfig objects)
    let charts = [
        {
            id: 1,
            title: 'Clients by type',
            metric: 'Number of clients',
            db_field: 'customer_type',
            type:  'Pie'
        },
        {
            id: 2,
            title: 'Phone make',
            metric: 'Number of phones',
            db_field: 'make',
            type:  'Bar'
        },
        {
            id: 3,
            title: 'Fault',
            metric: 'Number of phones',
            db_field: 'fault',
            type:  'Bar'
        }
    ];

    // Functions and methods
    useEffect(() => {
        // Get form data from Supabase, then load charts
        fetchBookings().then(data => {
            setData(data)
        });
    }, []);

    // UI
    // if data has not been successfully loaded, display loading screen
    if (data.data === undefined) {
        return (
        <div className="card-body text-center">    
            <h1>Loading Data...</h1>
        </div>)
    }

    // When data is loaded, render charts
    return (
        <div className="d-flex flex-row flex-wrap card-body text-center">       
                {charts.map((chart) => {
                    return (
                        <div className="col-12 col-lg-5 m-2">
                            <DashboardChart 
                                id={chart.id} 
                                key={chart.id} 
                                data={data} 
                                chartConfig={chart}/>
                        </div> )
                })}
        </div>);
        
}

export default Dashboard;