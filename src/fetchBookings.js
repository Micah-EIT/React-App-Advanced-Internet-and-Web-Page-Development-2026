// Imports
import { supabase } from './components/supabaseClient.js';

// Fetches bookings from the Supabase database
export const fetchBookings = async () => {
    try {
        // Get all data from bookings table
        const { data, error } = await supabase.from('bookings').select('*');
        
        // Handle errors
        if (error) throw error;
        // Update bookings with data
        return {"data": data, "error": ""}
    }
    // Log error
    catch (error) {
        console.error('Error fetching bookings:', error.message)
        return {"data": [], "error": error.message}
    }
};