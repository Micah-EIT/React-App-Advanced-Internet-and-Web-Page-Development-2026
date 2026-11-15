// Imports
import { useState, useEffect, useCallback } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, BarController, BarElement } from 'chart.js/auto';

Chart.register(BarController, BarElement);

// Component function
function DashboardChart( props ) {
    // States
    const [chartElement, setChartElement] = useState([]);

    // Functions and methods
    /**
     * Creates a chart instance based on data and chartConfig values.
     * Displays the category and number/percentage of bookings in a category 
     * (i.e. the number of customers for each customer type)
     * @param {Array} data - Bookings data from Supabase. An array of objects where each object relates to one bookings,
     * and the object stores the booking information.  
     * @param {object} chartConfig - Chart configuration options in the following form:
     *                  {id: unique id for each chart
                        title: chart title
                        metric: What each slice/bar represents (i.e. number of clients)
                        db_field: the category bookings will be sorted into (i.e. customer_type). Must match a key in the data array.
                        type: type of graph (Bar or Pie)}
    */
    const createChart = useCallback((data, chartConfig) => {
        const count = {};

        // Counts how many answers were the same for the specified category
        data.forEach(booking => {
            count[booking[chartConfig['db_field']]] = (count[booking[chartConfig['db_field']]] || 0) + 1
        });

        // Chart labels and data
        const labels = Object.keys(count);
        const values = Object.values(count);
        const chartData = {
            labels: labels,
            datasets: [{
                label: chartConfig['metric'],
                data: values,
                backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#dc3545", "#20c997", "#6f42c1"]
            }]
        };

        // Create chart UI based on chart type
        switch (chartConfig['type']) {
            case 'Bar':
                setChartElement(<div>
                    <h2 className="card-title">{chartConfig['title']}</h2>  
                    <Bar data={chartData}/>
                </div>);
                break;
            case 'Pie':
                setChartElement(<div>
                    <h2 className="card-title">{chartConfig['title']}</h2>  
                    <Pie data={chartData}/>
                </div>);
                break;
            default:
                setChartElement(<div>
                    <h2 className="card-title">{chartConfig['title']}</h2>  
                    <Bar data={chartData}/>
                </div>);
                break;
        }
    }, []);

    // Create chart on component mount
    useEffect(() => {
        createChart(props.data.data, props.chartConfig);
    }, [createChart, props.data.data, props.chartConfig]);

    // UI
    return(chartElement);
}

export default DashboardChart;